import { AdventCalendar } from "@/components/AdventCalendar";
import { EmailSignupForm } from "@/components/EmailSignupForm";
import data from "@/data/articles.json";
import type { CalendarEntry } from "@/types/calendar";

const articles = data as CalendarEntry[];

export default function Home() {
  return (
    <div className="relative isolate min-h-screen bg-transparent text-twilight">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/20 to-transparent"
        aria-hidden="true"
      />
      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-4 py-14 sm:px-6 lg:flex-row lg:items-start lg:gap-16 lg:px-8 lg:py-20">
        <section className="w-full space-y-6 lg:max-w-sm">
          <p className="text-sm uppercase tracking-[0.5em] text-gold">
            Wikipedia Advent Calendar
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-twilight sm:text-5xl">
            24 days of curious Christmas lore in your inbox.
          </h1>
          <p className="text-lg text-twilight/80">
            Countdown to Christmas with handpicked Wikipedia articles—traditions,
            songs, food, legends, and deep dives researched so you don’t have to.
            Each door unlocks at midnight in your local time zone.
          </p>

          <div className="frosted-card space-y-4 rounded-3xl p-5">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/70 text-lg font-bold text-twilight">
                01
              </span>
              <p className="text-base text-twilight/80">
                Tap into nerdy gift ideas—link to the live article the moment it
                unlocks.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/70 text-lg font-bold text-twilight">
                02
              </span>
              <p className="text-base text-twilight/80">
                Responsive Advent grid with door animations and accessibility
                baked in.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/70 text-lg font-bold text-twilight">
                03
              </span>
              <p className="text-base text-twilight/80">
                ConvertKit signup form to deliver the newsletter through your
                existing list.
              </p>
            </div>
          </div>

          <EmailSignupForm />
        </section>

        <section className="w-full flex-1 space-y-6">
          <AdventCalendar entries={articles} />
        </section>
      </main>
    </div>
  );
}
