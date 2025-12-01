const convertKitFormId = process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID;

const actionUrl = convertKitFormId
  ? `https://app.convertkit.com/forms/${convertKitFormId}/subscriptions`
  : undefined;

export function EmailSignupForm() {
  const isConfigured = Boolean(actionUrl);

  return (
    <form
      className="flex flex-col gap-3 rounded-2xl border border-twilight/15 bg-white/80 p-4 text-twilight shadow-xl shadow-twilight/10 backdrop-blur"
      action={actionUrl}
      method="post"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Sign up for the Wikipedia Advent Calendar newsletter"
    >
      <label htmlFor="email" className="text-sm font-semibold uppercase tracking-wide text-twilight">
        Join the list
      </label>
      <p className="text-sm text-twilight/80">
        One hand-curated Wikipedia deep dive delivered each morning of Advent. No spam, just stories.
      </p>
      <input
        id="email"
        name="email_address"
        type="email"
        required
        placeholder="you@email.com"
        className="w-full rounded-xl border border-twilight/25 bg-white/70 px-4 py-3 text-base text-twilight placeholder:text-twilight/60 focus:border-periwinkle focus:outline-none focus:ring-2 focus:ring-periwinkle/40"
        aria-describedby="signup-helper-text"
        disabled={!isConfigured}
      />
      <button
        type="submit"
        className="rounded-xl bg-gradient-to-r from-periwinkle via-indigo-500 to-twilight px-4 py-3 text-base font-semibold text-white shadow-lg shadow-periwinkle/40 transition hover:from-indigo-500 hover:via-twilight hover:to-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-periwinkle focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-60"
        disabled={!isConfigured}
      >
        Subscribe on ConvertKit
      </button>
      <span id="signup-helper-text" className="text-xs text-twilight/70">
        {isConfigured
          ? "Powered by ConvertKit · unsubscribe anytime."
          : "Add NEXT_PUBLIC_CONVERTKIT_FORM_ID to enable the live form."}
      </span>
    </form>
  );
}

