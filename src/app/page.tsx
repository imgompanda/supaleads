export default function Home() {
  return (
    <main className="relative">
      {/* Ambient glow */}
      <div
        className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212,168,83,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-[family-name:var(--font-display)] text-2xl tracking-tight">
            Supaleads
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted">
            <a href="#process" className="hover:text-foreground transition-colors">
              Process
            </a>
            <a href="#pricing" className="hover:text-foreground transition-colors">
              Pricing
            </a>
            <a
              href="mailto:harris@supaleads.app"
              className="px-5 py-2 bg-accent text-background text-sm font-medium rounded-full hover:bg-accent-dim transition-colors"
            >
              Get Started
            </a>
          </div>
          {/* Mobile CTA */}
          <a
            href="mailto:harris@supaleads.app"
            className="md:hidden px-4 py-2 bg-accent text-background text-sm font-medium rounded-full hover:bg-accent-dim transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            {/* Tag */}
            <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-accent text-xs text-muted mb-8 md:mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              AI-Powered B2B Outbound Agency
            </div>

            {/* Headline */}
            <h1 className="animate-fade-up delay-100 font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-8">
              We research, write,
              <br />
              and send&mdash;
              <br />
              <span className="italic text-accent">you take the meetings.</span>
            </h1>

            {/* Subline */}
            <p className="animate-fade-up delay-200 text-lg md:text-xl text-muted max-w-xl leading-relaxed mb-12">
              Done-for-you outbound that fills your calendar with qualified B2B
              meetings. From lead research to inbox delivery, we handle
              everything.
            </p>

            {/* CTA row */}
            <div className="animate-fade-up delay-300 flex flex-col sm:flex-row items-start gap-4">
              <a
                href="mailto:harris@supaleads.app"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-background font-medium rounded-full hover:bg-accent-dim transition-all"
                style={{ animation: "pulse-glow 3s ease-in-out infinite" }}
              >
                Book a Call
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#process"
                className="inline-flex items-center gap-2 px-8 py-4 text-muted hover:text-foreground border border-border-accent rounded-full transition-colors"
              >
                See How It Works
              </a>
            </div>
          </div>

          {/* Stats strip */}
          <div className="animate-fade-up delay-500 mt-20 md:mt-28 grid grid-cols-3 gap-6 md:gap-12 max-w-2xl">
            {[
              { value: "10+", label: "Meetings / month" },
              { value: "98%", label: "Deliverability" },
              { value: "DFY", label: "Done for you" },
            ].map((stat) => (
              <div key={stat.label} className="border-l border-border-accent pl-4 md:pl-6">
                <div className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-accent">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-800">
          <div className="w-5 h-8 border-2 border-border-accent rounded-full flex items-start justify-center p-1">
            <div
              className="w-1 h-2 bg-muted rounded-full"
              style={{ animation: "float 2s ease-in-out infinite" }}
            />
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="relative py-24 md:py-32 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
            <div>
              <span className="text-xs text-muted uppercase tracking-[0.2em] mb-4 block">
                What We Do
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl leading-tight mb-6">
                Your outbound,
                <br />
                <span className="italic text-accent">fully handled.</span>
              </h2>
              <p className="text-muted leading-relaxed max-w-md">
                We combine AI-powered research with human-quality copywriting to
                build outbound campaigns that land in inboxes and book meetings.
                No templates. No spam. Just results.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Lead Research",
                  desc: "AI identifies your ideal prospects with verified contact data and intent signals.",
                },
                {
                  title: "Personalized Copy",
                  desc: "Every email crafted with context — no mass templates, no generic pitches.",
                },
                {
                  title: "Managed Delivery",
                  desc: "Warmed domains, optimized send times, and 98%+ inbox placement.",
                },
                {
                  title: "Meeting Ready",
                  desc: "Qualified replies handled and meetings booked directly on your calendar.",
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="group p-6 rounded-2xl border border-border hover:border-border-accent bg-surface/50 hover:bg-surface transition-all"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-accent font-[family-name:var(--font-display)] text-2xl leading-none mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-medium mb-1.5">{item.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="process"
        className="relative py-24 md:py-32 border-t border-border"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-xs text-muted uppercase tracking-[0.2em] mb-4 block">
              How It Works
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl leading-tight">
              Four steps to
              <br />
              <span className="italic text-accent">a full pipeline.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
            {[
              {
                step: "01",
                title: "Research",
                desc: "We identify your ICP, build targeted lists, and verify every contact.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "Write",
                desc: "AI-assisted, human-refined copy personalized for every prospect.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "Send",
                desc: "Emails delivered from warmed infrastructure with optimal timing.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                ),
              },
              {
                step: "04",
                title: "Meet",
                desc: "Qualified meetings land on your calendar. You just show up.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.step}
                className="group bg-surface p-8 md:p-10 hover:bg-surface-hover transition-colors"
              >
                <div className="text-accent mb-6">{item.icon}</div>
                <span className="text-xs text-muted font-mono">{item.step}</span>
                <h3 className="font-[family-name:var(--font-display)] text-2xl mt-2 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="relative py-24 md:py-32 border-t border-border"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs text-muted uppercase tracking-[0.2em] mb-4 block">
                Pricing
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl leading-tight">
                Simple, transparent
                <br />
                <span className="italic text-accent">pricing.</span>
              </h2>
            </div>

            <div className="relative rounded-3xl border border-border-accent bg-surface p-8 md:p-12 overflow-hidden">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-40 h-40 opacity-10"
                style={{
                  background: "radial-gradient(circle at top right, rgba(212,168,83,0.8), transparent 70%)",
                }}
              />

              <div className="relative">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-10">
                  <div>
                    <span className="text-xs text-accent uppercase tracking-[0.15em] mb-3 block">
                      Monthly Retainer
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-[family-name:var(--font-display)] text-6xl md:text-7xl text-foreground">
                        $2,000
                      </span>
                      <span className="text-muted text-lg">/mo</span>
                    </div>
                  </div>
                  <a
                    href="mailto:harris@supaleads.app"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-background font-medium rounded-full hover:bg-accent-dim transition-colors"
                  >
                    Get Started
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>

                <div className="h-px bg-border-accent mb-8" />

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "~10 qualified meetings per month",
                    "Full ICP research & list building",
                    "AI-personalized email sequences",
                    "Managed sending infrastructure",
                    "Reply handling & meeting booking",
                    "Weekly performance reports",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-accent shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-muted">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 md:py-32 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl leading-tight mb-6">
            Ready to fill
            <br />
            <span className="italic text-accent">your calendar?</span>
          </h2>
          <p className="text-muted max-w-md mx-auto mb-10 leading-relaxed">
            Let&apos;s talk about your ideal customers and how we can put
            qualified meetings on your schedule.
          </p>
          <a
            href="mailto:harris@supaleads.app"
            className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-background font-medium rounded-full text-lg hover:bg-accent-dim transition-colors"
            style={{ animation: "pulse-glow 3s ease-in-out infinite" }}
          >
            harris@supaleads.app
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-[family-name:var(--font-display)] text-lg">
            Supaleads
          </div>
          <div className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Supaleads. All rights reserved.
          </div>
          <a
            href="mailto:harris@supaleads.app"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            harris@supaleads.app
          </a>
        </div>
      </footer>
    </main>
  );
}
