const convertKitFormId = process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID;

const actionUrl = convertKitFormId
  ? `https://app.convertkit.com/forms/${convertKitFormId}/subscriptions`
  : undefined;

export function EmailSignupForm() {
  const isConfigured = Boolean(actionUrl);

  return (
    <form
      className="flex flex-col gap-3 rounded-2xl bg-transparent p-4 text-twilight"
      action={actionUrl}
      method="post"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Sign up for the Wikipedia Advent Calendar newsletter"
    >
      <label htmlFor="email" className="text-sm font-semibold tracking-wide text-twilight">
        Get it in your inbox
      </label>
      <input
        id="email"
        name="email_address"
        type="email"
        required
        placeholder="you@email.com"
        className="w-full rounded-xl border border-[#b7955e] bg-[#f4ead3] px-4 py-3 text-base text-twilight placeholder:text-twilight/60 focus:border-[#8a6a3b] focus:outline-none focus:ring-2 focus:ring-[#d6b88a]/60"
        aria-describedby="signup-helper-text"
        disabled={!isConfigured}
      />
      <button
        type="submit"
        className="rounded-xl border border-[#b7955e] bg-[#f4ead3] px-4 py-3 text-base font-semibold text-twilight transition hover:border-[#8a6a3b] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#d6b88a] focus-visible:ring-offset-[#f4ead3] disabled:cursor-not-allowed disabled:opacity-60"
        disabled={!isConfigured}
      >
        Subscribe
      </button>
      <span id="signup-helper-text" className="text-xs text-twilight/70">
        {isConfigured
          ? "Powered by ConvertKit · unsubscribe anytime."
          : "Add NEXT_PUBLIC_CONVERTKIT_FORM_ID to enable the live form."}
      </span>
    </form>
  );
}

