import { AdventCalendar } from "@/components/AdventCalendar";
import { EmailSignupForm } from "@/components/EmailSignupForm";
import { getCalendarDoors } from "@/lib/calendar";

export default function Home() {
  const articles = getCalendarDoors();

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-10 px-4 py-16 text-twilight sm:px-6 lg:px-8">
      <header className="space-y-6 text-center">
        <h1 className="handwritten-title text-4xl font-semibold leading-tight sm:text-5xl">
          Wikipedia Advent Calendar
        </h1>
        <div className="mx-auto max-w-md">
          <EmailSignupForm />
        </div>
      </header>

      <section className="flex-1">
        <AdventCalendar entries={articles} />
      </section>

    </main>
  );
}
