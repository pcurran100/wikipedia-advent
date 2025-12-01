export type CalendarEntry = {
  day: number;
  title: string;
  summary: string;
  link: string;
  image?: string;
  imageAlt?: string;
};

export type CalendarDoor = {
  day: number;
  unlocked: boolean;
  title?: string;
  summary?: string;
  link?: string;
  image?: string;
  imageAlt?: string;
};

