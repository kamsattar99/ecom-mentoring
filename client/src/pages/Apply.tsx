export default function Apply() {
  return (
    <main className="min-h-screen bg-[#0F0E13] text-white">
      <header className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 border-b border-white/10 px-6 py-5">
        <a href="/" className="text-lg font-semibold">
          ← eMentoring
        </a>
        <a
          href="https://form.typeform.com/to/mimJCUN0"
          className="text-xs underline underline-offset-4"
        >
          Open application in a full page ↗
        </a>
      </header>
      <div className="px-6 pb-5 pt-8 text-center">
        <h1 className="text-3xl font-medium tracking-tight">
          Let’s find your fit.
        </h1>
        <p className="mt-3 text-sm text-white/60">
          Tell us about your business and goals. Applications are reviewed
          before calls are booked.
        </p>
      </div>
      <iframe
        src="https://form.typeform.com/to/mimJCUN0"
        title="Mentorship application"
        className="w-full border-0"
        style={{ height: "max(680px, calc(100dvh - 200px))" }}
        allow="camera; microphone; autoplay; encrypted-media;"
      />
    </main>
  );
}
