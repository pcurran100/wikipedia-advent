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
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="email"
          name="email_address"
          type="email"
          required
          placeholder="Your email address"
          className="w-full rounded-xl border border-[#b7955e] bg-[#f4ead3] px-5 py-2.5 text-sm text-twilight placeholder:text-twilight/60 focus:border-[#b7955e] focus:outline-none focus:ring-2 focus:ring-[#d6b88a]/60 sm:flex-[4]"
          aria-describedby="signup-helper-text"
          disabled={!isConfigured}
        />
        <button
          type="submit"
          className="rounded-xl border border-[#b7955e] bg-[#f4ead3] px-5 py-2.5 text-sm font-semibold text-twilight transition hover:border-[#b7955e] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#d6b88a] focus-visible:ring-offset-[#f4ead3] disabled:cursor-not-allowed disabled:opacity-60 sm:flex-[2]"
          disabled={!isConfigured}
        >
          Subscribe
        </button>
      </div>
      <span id="signup-helper-text" className="text-xs text-twilight/70">
        By signing up you agree to our{" "}
        <a href="/privacy-policy" className="underline-offset-2 hover:underline">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="/terms" className="underline-offset-2 hover:underline">
          Terms &amp; Conditions
        </a>
        .
      </span>
    </form>
  );
}

