import data from "@/data/articles.json";
import type { CalendarDoor, CalendarEntry } from "@/types/calendar";

const ALL_ENTRIES = [...(data as CalendarEntry[])].sort((a, b) => a.day - b.day);

const MAX_DAY = 24;

function getUnlockedCount(referenceDate = new Date()) {
  const month = referenceDate.getMonth();

  if (month !== 11) return 0; // Only unlock days in December

  const day = referenceDate.getDate();
  if (day >= MAX_DAY) return MAX_DAY;

  return Math.max(0, Math.min(day, MAX_DAY));
}

export function getCalendarDoors(date = new Date()): CalendarDoor[] {
  const unlockedCount = getUnlockedCount(date);

  return ALL_ENTRIES.map((entry) => {
    const unlocked = entry.day <= unlockedCount;

    if (unlocked) {
      return {
        ...entry,
        unlocked,
      };
    }

    return {
      day: entry.day,
      unlocked,
    };
  });
}

