export const metadata = {
  title: "Terms & Conditions · Wikipedia Advent Calendar",
  description: "Terms governing newsletter subscriptions and content use.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-6 px-4 py-16 text-twilight sm:px-6 lg:px-8">
      <h1 className="handwritten-title text-4xl font-semibold">Terms & Conditions</h1>
      <p className="text-sm text-twilight/70">Last updated: 1 December 2025</p>

      <p>
        By subscribing to our newsletter, you agree to the following terms:
      </p>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Subscription</h2>
        <p>Your subscription is voluntary and can be cancelled at any time.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Content</h2>
        <p>
          Newsletter content is for informational purposes only. We make no guarantees
          about accuracy or completeness.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Future communications</h2>
        <p>
          We may occasionally contact you with other newsletters, projects, or products
          that may be relevant. You can unsubscribe from all communications at any time.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Intellectual property</h2>
        <p>
          Content provided by us is protected by copyright. You may share links to
          content but may not reproduce it commercially without permission.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Limitation of liability</h2>
        <p>
          We are not liable for any damages arising from your use of the newsletter or
          content.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Changes</h2>
        <p>
          We may update these terms at any time; changes will be effective immediately
          upon posting on our website.
        </p>
      </section>
    </main>
  );
}



