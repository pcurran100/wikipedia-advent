export const metadata = {
  title: "Privacy Policy · Wikipedia Advent Calendar",
  description: "Learn how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-6 px-4 py-16 text-twilight sm:px-6 lg:px-8">
      <h1 className="handwritten-title text-4xl font-semibold">Privacy Policy</h1>
      <p className="text-sm text-twilight/70">Last updated: 1 December 2025</p>

      <p>
        We value your privacy. By subscribing to our newsletter, you agree to the
        collection and use of your personal data as described below.
      </p>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Information we collect</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Email address (and optionally name) provided at signup.</li>
          <li>
            Technical information (IP address, browser type) for analytics and
            deliverability.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">How we use your information</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>To send you the daily newsletter.</li>
          <li>
            To send occasional updates about related projects, products, or
            services that may be of interest.
          </li>
          <li>To analyze website usage and improve our services.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Legal basis</h2>
        <p>Your consent (by signing up) is our legal basis under GDPR.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Sharing and storage</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Your information will be stored securely with our email service provider.</li>
          <li>We will never sell your data.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Your rights</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>You can unsubscribe at any time using the link in our emails.</li>
          <li>You have the right to access, correct, or delete your personal data.</li>
          <li>Contact us at [your email] for any data requests.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Cookies / tracking</h2>
        <p>
          We use minimal cookies/analytics for performance monitoring and improving your
          experience.
        </p>
      </section>
    </main>
  );
}



