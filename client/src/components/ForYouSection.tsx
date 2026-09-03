/** Homepage visual direction: an honest two-sided qualification decision. */
const forYou = [
  "You want to build an ecommerce business using AI tools and proven systems",
  "You want personalised feedback on your actual store, products, ads and strategy",
  "You are ready to test, learn, optimise and keep moving forward",
  "You understand that growth requires investment, consistency and execution",
  "You want an AI-integrated roadmap instead of another collection of random tactics",
];

const notForYou = [
  "You are looking for shortcuts instead of doing the work",
  "You want passive content but are not willing to implement",
  "You are not ready to test products, creatives or offers consistently",
  "You prefer generic advice over personalised, direct feedback",
  "You are not currently prepared to invest time, focus or resources into building properly",
];

const Check = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>;
const Cross = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>;

export default function ForYouSection() {
  return (
    <section className="home-section relative overflow-hidden border-y border-white/[0.06] bg-[#131118]">
      <div className="home-wrap">
        <div data-reveal className="mx-auto mb-[52px] max-w-[680px] text-center">
          <p className="home-kicker justify-center">Who this is for</p>
          <h2 className="home-section-title">The Programme Works Best When <em>The Fit Is Honest</em></h2>
          <p className="mx-auto mt-5 max-w-[520px] text-[15px] leading-[1.7] text-white/50">This is hands-on support for people ready to build, test, receive direct feedback and implement consistently—not a promise of automatic results.</p>
        </div>

        <div className="mx-auto grid max-w-[1000px] gap-5 md:grid-cols-2">
          <div data-reveal className="rounded-[24px] border border-emerald-400/20 bg-[linear-gradient(160deg,rgba(52,211,153,0.08)_0%,#17151E_60%)] p-[clamp(24px,3vw,36px)]">
            <p className="mb-[22px] flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.12em] text-emerald-300"><span className="h-2 w-2 rounded-full bg-emerald-400" />THIS IS FOR YOU IF…</p>
            <ul className="flex flex-col gap-3.5">
              {forYou.map((item) => <li key={item} className="flex gap-3 text-[14px] leading-[1.6] text-white/80 sm:text-[14.5px]"><span className="mt-[3px] shrink-0 text-green-400"><Check /></span>{item}</li>)}
            </ul>
          </div>
          <div data-reveal style={{ "--reveal-delay": "100ms" } as React.CSSProperties} className="rounded-[24px] border border-white/[0.08] bg-[#17151E] p-[clamp(24px,3vw,36px)]">
            <p className="mb-[22px] flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.12em] text-white/45"><span className="h-2 w-2 rounded-full bg-white/30" />THIS MAY NOT BE FOR YOU IF…</p>
            <ul className="flex flex-col gap-3.5">
              {notForYou.map((item) => <li key={item} className="flex gap-3 text-[14px] leading-[1.6] text-white/45 sm:text-[14.5px]"><span className="mt-[3px] shrink-0 text-white/35"><Cross /></span>{item}</li>)}
            </ul>
          </div>
        </div>

        <div data-reveal className="mt-12 text-center">
          <p className="mb-5 text-[14px] font-medium text-white/60">If the left side sounds like you, the next step is to apply.</p>
          <a href="/apply" className="btn-primary min-h-12 justify-center px-[30px] py-4 text-[15px] font-semibold">Apply For A Fit Call <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg></a>
          <p className="mt-4 text-[11px] text-white/30">Applications are reviewed before calls are booked.</p>
        </div>
      </div>
    </section>
  );
}
