"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { CalendarEntry } from "@/types/calendar";

type AdventCalendarProps = {
  entries: CalendarEntry[];
};

function getUnlockedCount(showArchive: boolean) {
  if (showArchive) return 24;
  const now = new Date();
  const isDecember = now.getMonth() === 11;
  const isAfterSeason = isDecember && now.getDate() > 24;
  if (isAfterSeason) return 24;
  if (!isDecember) return 0;
  return Math.min(now.getDate(), 24);
}

const doorBaseClass =
  "door-perspective relative flex h-48 w-full flex-col rounded-[26px] border border-white/10 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-950 transition-transform duration-300";

const contentBaseClass =
  "door-content relative flex h-full w-full flex-col justify-between rounded-[22px] p-4 text-snow shadow-door transition-all duration-500";

export function AdventCalendar({ entries }: AdventCalendarProps) {
  const sortedEntries = useMemo(
    () => [...entries].sort((a, b) => a.day - b.day),
    [entries]
  );

  const [activeDay, setActiveDay] = useState<number | null>(null);
  const [showArchive, setShowArchive] = useState(false);
  const unlockedCount = getUnlockedCount(showArchive);

  const dailyMessage =
    unlockedCount === 0 && !showArchive
      ? "Doors unlock daily starting December 1 in your time zone."
      : unlockedCount < 24
        ? `Unlocked through Day ${unlockedCount}. Come back tomorrow for the next article!`
        : "All doors are open—feel free to revisit your favorites.";

  const handleToggle = (day: number, unlocked: boolean) => {
    if (!unlocked) return;
    setActiveDay((prev) => (prev === day ? null : day));
  };

  return (
    <section aria-label="Wikipedia Advent Calendar" className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">
            Advent Calendar · {unlockedCount}/24 unlocked
          </p>
          <p className="text-sm text-snow/80">{dailyMessage}</p>
        </div>
        <button
          type="button"
          onClick={() => setShowArchive((prev) => !prev)}
          className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-gold hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          aria-pressed={showArchive}
        >
          {showArchive ? "Hide archive" : "Preview entire calendar"}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {sortedEntries.map((entry) => {
          const isUnlocked = entry.day <= unlockedCount;
          const isOpen = activeDay === entry.day;

          return (
            <button
              key={entry.day}
              type="button"
              onClick={() => handleToggle(entry.day, isUnlocked)}
              disabled={!isUnlocked}
              aria-pressed={isOpen}
              aria-label={
                isUnlocked
                  ? `Open Day ${entry.day} - ${entry.title}`
                  : `Day ${entry.day} locked`
              }
              className={`${doorBaseClass} ${
                isUnlocked
                  ? "hover:-translate-y-1 hover:shadow-door"
                  : "cursor-not-allowed opacity-90"
              }`}
            >
              <span
                className={`door-front absolute inset-0 rounded-[24px] p-4 text-center text-3xl font-bold text-white`}
                data-open={isOpen}
                data-locked={!isUnlocked}
                aria-hidden="true"
              >
                <span className="text-5xl font-extrabold drop-shadow-lg">
                  {entry.day}
                </span>
                <span className="mt-3 block text-sm font-semibold uppercase tracking-wide text-white/80">
                  {isUnlocked ? "Open" : "Locked"}
                </span>
              </span>

              <div
                className={`${contentBaseClass} ${
                  isOpen ? "opacity-100" : "opacity-0"
                } ${isUnlocked ? "pointer-events-auto" : "pointer-events-none"}`}
                aria-hidden={!isOpen}
              >
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold">
                    Day {entry.day}
                  </p>
                  <h3 className="text-lg font-semibold leading-tight text-white">
                    {entry.title}
                  </h3>
                  <p className="text-sm text-snow/80">{entry.summary}</p>
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href={entry.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-gold underline-offset-4 hover:underline"
                  >
                    Read on Wikipedia
                  </a>
                  {entry.image ? (
                    <Image
                      src={entry.image}
                      alt={entry.imageAlt ?? ""}
                      width={40}
                      height={40}
                      className="rounded-full border border-white/20 bg-white/10 p-1"
                      loading="lazy"
                    />
                  ) : null}
                </div>
              </div>

              {!isUnlocked && (
                <span className="sr-only">
                  Locked until December {entry.day}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}

