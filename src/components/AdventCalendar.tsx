"use client";

import { useMemo, useState } from "react";
import type { CalendarDoor } from "@/types/calendar";

type AdventCalendarProps = {
  entries: CalendarDoor[];
};

const doorBaseClass =
  "door-perspective relative w-full overflow-hidden rounded-[24px] focus:outline-none focus-visible:ring-4 focus-visible:ring-periwinkle/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent transition-transform duration-300";

const contentBaseClass =
  "door-content door-back absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-3 rounded-[22px] p-4 text-center text-twilight shadow-door";

const doorInnerClass =
  "door-inner relative h-full w-full rounded-[24px] transition-transform duration-700 [transform-style:preserve-3d]";

const doorImageSources = [
  { src: "/doors/Good_1.png", width: 2816, height: 1536 },
  { src: "/doors/Good_2.png", width: 2816, height: 1504 },
  { src: "/doors/Good_5.png", width: 2816, height: 1504 },
  { src: "/doors/Good_6.png", width: 2816, height: 1504 },
  { src: "/doors/Okay_3.png", width: 2816, height: 1504 },
  { src: "/doors/Okay_4.png", width: 2816, height: 1504 },
  {
    src: "/doors/Gemini_Generated_Image_b7w5z0b7w5z0b7w5.png",
    width: 2816,
    height: 1536,
  },
  {
    src: "/doors/Gemini_Generated_Image_xafszbxafszbxafs.png",
    width: 2816,
    height: 1536,
  },
  {
    src: "/doors/Gemini_Generated_Image_yq8eoxyq8eoxyq8e.png",
    width: 2816,
    height: 1536,
  },
] as const;

const quadrantPositions = ["0% 0%", "100% 0%", "0% 100%", "100% 100%"] as const;

const doorImageConfigs = doorImageSources.flatMap((image) =>
  quadrantPositions.map((position) => ({
    src: image.src,
    position,
    aspectRatio: image.width / image.height,
  }))
);

function getDoorImage(day: number) {
  const index = (day - 1) % doorImageConfigs.length;
  return doorImageConfigs[index];
}

export function AdventCalendar({ entries }: AdventCalendarProps) {
  const sortedEntries = useMemo(
    () => [...entries].sort((a, b) => a.day - b.day),
    [entries]
  );

  const [activeDay, setActiveDay] = useState<number | null>(null);

  const handleToggle = (day: number, unlocked: boolean) => {
    if (!unlocked) return;
    setActiveDay((prev) => (prev === day ? null : day));
  };

  return (
    <section aria-label="Wikipedia Advent Calendar" className="space-y-6">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {sortedEntries.map((entry) => {
          const isUnlocked = entry.unlocked;
          const isOpen = activeDay === entry.day;
          const doorImage = getDoorImage(entry.day);

          return (
            <button
              key={entry.day}
              type="button"
              onClick={() => handleToggle(entry.day, isUnlocked)}
              disabled={!isUnlocked}
              aria-pressed={isOpen}
              aria-label={
                isUnlocked
                  ? `Open Day ${entry.day}${
                      entry.title ? ` - ${entry.title}` : ""
                    }`
                  : `Day ${entry.day} locked`
              }
              className={`${doorBaseClass} ${
                isUnlocked
                  ? "hover:-translate-y-1 hover:shadow-door"
                  : "cursor-not-allowed opacity-90"
              }`}
              style={{ aspectRatio: `${doorImage.aspectRatio}` }}
            >
              <div
                className={`${doorInnerClass} ${
                  isOpen ? "[transform:rotateY(180deg)]" : ""
                } ${isUnlocked ? "pointer-events-auto" : "pointer-events-none"}`}
              >
                <div
                  className="door-front absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-[24px] p-4 text-center text-3xl font-bold text-white [backface-visibility:hidden]"
                  style={{
                    backgroundImage: `url(${doorImage.src})`,
                    backgroundSize: "200% 200%",
                    backgroundPosition: doorImage.position,
                    backgroundRepeat: "no-repeat",
                  }}
                  data-locked={!isUnlocked}
                  aria-hidden="true"
                >
                  <span className="text-5xl font-extrabold drop-shadow-lg">
                    {entry.day}
                  </span>
                  <span className="mt-3 block text-sm font-semibold uppercase tracking-wide text-white/80">
                    {isUnlocked ? "Open" : "Locked"}
                  </span>
                </div>

                <div
                  className={`${contentBaseClass} [transform:rotateY(180deg)] [backface-visibility:hidden]`}
                  aria-hidden={!isOpen}
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-periwinkle">
                    Day {entry.day}
                  </p>
                  {isUnlocked && entry.link ? (
                    <a
                      href={entry.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold leading-snug text-twilight underline-offset-4 hover:underline"
                    >
                      {entry.title}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-periwinkle">
                      Opens December {entry.day}
                    </p>
                  )}
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

