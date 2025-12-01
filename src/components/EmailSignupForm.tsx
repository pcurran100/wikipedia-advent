const convertKitFormId = process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID;

const actionUrl = convertKitFormId
  ? `https://app.convertkit.com/forms/${convertKitFormId}/subscriptions`
  : undefined;

export function EmailSignupForm() {
  const isConfigured = Boolean(actionUrl);

  return (
    <form
      className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl shadow-emerald-950/30 backdrop-blur"
      action={actionUrl}
      method="post"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Sign up for the Wikipedia Advent Calendar newsletter"
    >
      <label htmlFor="email" className="text-sm font-semibold uppercase tracking-wide text-gold">
        Join the list
      </label>
      <p className="text-sm text-snow/80">
        One hand-curated Wikipedia deep dive delivered each morning of Advent. No spam, just stories.
      </p>
      <input
        id="email"
        name="email_address"
        type="email"
        required
        placeholder="you@email.com"
        className="w-full rounded-xl border border-white/20 bg-emerald-900/60 px-4 py-3 text-base text-snow placeholder:text-snow/60 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/50"
        aria-describedby="signup-helper-text"
        disabled={!isConfigured}
      />
      <button
        type="submit"
        className="rounded-xl bg-gradient-to-r from-holly to-rose-600 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-holly/40 transition hover:from-rose-600 hover:to-orange-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gold focus-visible:ring-offset-emerald-950 disabled:cursor-not-allowed disabled:opacity-60"
        disabled={!isConfigured}
      >
        Subscribe on ConvertKit
      </button>
      <span id="signup-helper-text" className="text-xs text-snow/70">
        {isConfigured
          ? "Powered by ConvertKit · unsubscribe anytime."
          : "Add NEXT_PUBLIC_CONVERTKIT_FORM_ID to enable the live form."}
      </span>
    </form>
  );
}

