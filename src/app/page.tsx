"use client";

import { useState, useEffect, useRef } from "react";

const problems = [
  { text: "Your best employee quits — and takes", highlight: "10 years of knowledge", end: "with them." },
  { text: "Your team spends", highlight: "15+ hours a week", end: "building reports that are outdated by Friday." },
  { text: "You're the bottleneck.", highlight: "Nothing moves", end: "without your approval." },
  { text: "A buyer looks under the hood and sees", highlight: "chaos", end: "— not a company worth 10× revenue." },
];

const valuation = [
  { label: "No AI", mult: "3–5×", pct: 20, color: "#3F3F46", featured: false },
  { label: "Basic tools", sublabel: "(ChatGPT, etc.)", mult: "5–7×", pct: 36, color: "#F59E0B", featured: false },
  { label: "Custom AI", sublabel: "systems", mult: "7–10×", pct: 60, color: "#3B82F6", featured: true },
  { label: "Full AI", sublabel: "integration", mult: "10–12×", pct: 92, color: "#10B981", featured: true },
];

const pillars = [
  {
    icon: "🧠",
    name: "CAPTURE",
    color: "#8B5CF6",
    desc: "We take everything your team knows — every process, every decision, every \"ask Bob\" moment — and put it into a system that never forgets. Your company's knowledge becomes a permanent asset.",
  },
  {
    icon: "📊",
    name: "AUTOMATE",
    color: "#3B82F6",
    desc: "Those weekly reports that take 15 hours? Gone. Financial tracking, dashboards, operational metrics — all running automatically, in real time, without anyone lifting a finger.",
  },
  {
    icon: "⚙️",
    name: "STREAMLINE",
    color: "#F59E0B",
    desc: "We build AI into your daily operations — sales, marketing, finance, customer service. The repetitive stuff gets handled. Your team focuses on what actually moves the needle.",
  },
  {
    icon: "📈",
    name: "PREDICT",
    color: "#10B981",
    desc: "Know which customers are about to leave before they do. Spot expansion opportunities before your competitors. Make decisions based on data, not gut feelings.",
  },
];

const phases = [
  {
    num: "01",
    title: "Learn",
    color: "#F59E0B",
    headline: "Learn Your Business",
    desc: "We come in, connect to your systems, talk to your team, and figure out exactly where AI can save you the most time and money.",
    before: [
      "Your knowledge is scattered across people and spreadsheets",
      "No one knows what happens if a key person leaves",
      "Departments don't talk to each other",
      "You have no idea where you're bleeding money",
    ],
    after: [
      "Complete map of how your business actually runs",
      "You know exactly where you're vulnerable",
      "Clear picture of your biggest opportunities",
      "A prioritized plan for what to build first",
    ],
  },
  {
    num: "02",
    title: "Organize",
    color: "#3B82F6",
    headline: "Organize Your Data",
    desc: "Before AI can work, your data needs to be clean and connected. We digitize paper records, link your tools together, and build a solid foundation.",
    before: [
      "Important files are in 10 different places",
      "Half your records are still on paper",
      "Your tools don't talk to each other",
      "Finding anything takes forever",
    ],
    after: [
      "Everything in one place, organized and searchable",
      "All records digitized",
      "Systems connected and flowing automatically",
      "Information available in seconds",
    ],
  },
  {
    num: "03",
    title: "Install",
    color: "#8B5CF6",
    headline: "Install Intelligence",
    desc: "Now the magic happens. We build AI that knows your business — captures your team's knowledge, runs your dashboards, and gives you answers on demand.",
    before: [
      "Tribal knowledge that only certain people have",
      "Reports that take days to build",
      "Decisions made on gut feeling",
      "If someone leaves, you lose years of expertise",
    ],
    after: [
      "AI that knows your business inside and out",
      "Real-time dashboards that update themselves",
      "Data-driven decisions, every time",
      "Knowledge preserved permanently — nobody can take it",
    ],
  },
  {
    num: "04",
    title: "Run It",
    color: "#10B981",
    headline: "Let AI Run It",
    desc: "The endgame. AI handles the routine decisions, manages workflows, and keeps everything running — so your business grows without you being in every meeting.",
    before: [
      "Nothing happens without your sign-off",
      "Your sales team wings it",
      "Problems surface after it's too late",
      "Growth means hiring more people",
    ],
    after: [
      "AI handles the day-to-day decisions",
      "Sales and operations managed intelligently",
      "Issues flagged before they become problems",
      "Your business scales without scaling headcount",
    ],
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activePhase, setActivePhase] = useState(0);
  const [showAfter, setShowAfter] = useState<{ [key: number]: boolean }>({
    0: false,
    1: false,
    2: false,
    3: false,
  });
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Reveal animation
      revealRefs.current.forEach((el) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight - 60) {
            el.classList.add("visible");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleBeforeAfter = (phaseIndex: number, isAfter: boolean) => {
    setShowAfter((prev) => ({ ...prev, [phaseIndex]: isAfter }));
  };

  const addRevealRef = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const p = phases[activePhase];

  return (
    <div className="min-h-screen bg-[#060606] text-[#E4E4E7]">
      {/* NAV */}
      <nav
        className={`sticky top-0 z-50 px-8 md:px-20 lg:px-32 py-3.5 flex justify-between items-center transition-all duration-400 border-b ${
          scrolled
            ? "bg-[#060606]/92 backdrop-blur-[16px] border-[#151515]"
            : "border-transparent"
        }`}
      >
        <div className="flex items-center gap-2.5">
          <div
            className="w-[30px] h-[30px] rounded-[5px] flex items-center justify-center font-bold text-[10px] text-white mono"
            style={{ background: "linear-gradient(135deg, #10B981, #3B82F6)" }}
          >
            MK
          </div>
          <span className="font-extrabold text-[17px] text-white tracking-[-0.5px]">
            MKLABS
          </span>
        </div>
        <a
          href="#cta"
          className="px-5 py-2 border border-[#222] rounded-[3px] text-[9px] text-[#888] tracking-[2.5px] uppercase cursor-pointer hover:border-[#10B981] hover:text-[#10B981] transition-all mono no-underline"
        >
          Book a Call
        </a>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-20 lg:px-32 w-full text-center">
        <div className="text-[9px] tracking-[5px] text-[#10B981] uppercase mb-9 mono">
          AI IMPLEMENTATION PARTNER //
        </div>
        <h1 className="text-[clamp(42px,8vw,96px)] font-black text-white leading-[1.02] mb-[22px] tracking-[-3px]">
          Make your business
          <br />
          worth more.
          <br />
          <span className="grad">With AI that actually works.</span>
        </h1>
        <p className="text-[16px] font-light text-[#999] mx-auto max-w-3xl leading-[1.65]">
          Custom AI that makes your business run without you — scale faster,
          eliminate bottlenecks, and exit big.
        </p>

        {/* MARQUEE */}
        <div className="border-t border-b border-[#151515] py-3 overflow-hidden whitespace-nowrap mt-[60px]">
          <div className="inline-block marquee-animate text-[11px] font-bold text-[#333] tracking-[4px] uppercase mono">
            SAVE TIME // CUT COSTS // RAISE VALUATION // PROTECT KNOWLEDGE // REDUCE RISK // SCALE FASTER // SAVE TIME // CUT COSTS // RAISE VALUATION // PROTECT KNOWLEDGE // REDUCE RISK // SCALE FASTER // SAVE TIME // CUT COSTS // RAISE VALUATION // PROTECT KNOWLEDGE // REDUCE RISK // SCALE FASTER //&nbsp;
          </div>
        </div>
      </section>

      {/* THE OPPORTUNITY / VALUATION */}
      <section
        ref={addRevealRef}
        className="reveal min-h-screen flex flex-col justify-center py-20 px-8 md:px-20 lg:px-32 w-full border-t border-[#151515]"
      >
        <div className="text-[9px] tracking-[4px] uppercase mb-3.5 mono text-[#10B981]">
          (01) The Opportunity //
        </div>
        <h2 className="text-[clamp(36px,6vw,72px)] font-black text-white leading-[1.08] mb-4 tracking-[-2px]">
          AI is the #1 driver of
          <br />
          company valuation.
          <br />
          <span className="grad">Period.</span>
        </h2>
        <p className="text-[15px] font-light text-[#999] leading-[1.65] max-w-3xl">
          The biggest investment firms in the world now evaluate AI capabilities
          when they buy a business. Companies that have it are worth more.
          Companies that don't are leaving money on the table.
        </p>

        <div className="mt-10 space-y-3.5">
          {valuation.map((v, i) => (
            <div key={i} className="flex items-center gap-3.5">
              <div className={`w-[110px] shrink-0 text-right leading-[1.3] mono ${v.featured ? 'text-[13px] text-[#ccc]' : 'text-[11px] text-[#888]'}`}>
                {v.label}
                {v.sublabel && (
                  <>
                    <br />
                    <span className={v.featured ? 'text-[#999]' : 'text-[#666]'}>{v.sublabel}</span>
                  </>
                )}
              </div>
              <div className="flex-1">
                <div
                  className={`rounded-[3px] flex items-center pl-3.5 ${v.featured ? 'h-[56px]' : 'h-[44px]'}`}
                  style={{
                    width: `${v.pct}%`,
                    background: v.featured
                      ? `linear-gradient(90deg, ${v.color}15, ${v.color}50)`
                      : `linear-gradient(90deg, ${v.color}08, ${v.color}35)`,
                    border: v.featured
                      ? `2px solid ${v.color}60`
                      : `1px solid ${v.color}20`,
                    boxShadow: v.featured ? `0 0 20px ${v.color}30` : 'none',
                  }}
                >
                  <span
                    className={`font-bold mono ${v.featured ? 'text-[20px]' : 'text-[16px]'}`}
                    style={{ color: v.color }}
                  >
                    {v.mult}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-7 p-4 border border-[rgba(16,185,129,0.12)] rounded-[4px] text-[13px] text-[#999] leading-[1.65] bg-[rgba(16,185,129,0.03)]">
          We don't set you up with ChatGPT and call it a day. We build AI
          systems that are{" "}
          <strong className="text-[#10B981]">custom to your business</strong> —
          trained on your data, designed for your operations. That's what buyers
          pay a premium for.
        </div>
      </section>

      {/* THE PROBLEM */}
      <section
        ref={addRevealRef}
        className="reveal min-h-screen flex flex-col justify-center py-20 px-8 md:px-20 lg:px-32 w-full border-t border-[#151515]"
      >
        <div className="text-[9px] tracking-[4px] uppercase mb-3.5 mono text-[#F59E0B]">
          (02) The Reality //
        </div>
        <h2 className="text-[clamp(36px,6vw,72px)] font-black text-white leading-[1.08] mb-4 tracking-[-2px]">
          Most businesses run on
          <br />
          tribal knowledge and
          <br />
          manual processes.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-10">
          {problems.map((prob, i) => (
            <div
              key={i}
              className="py-[22px] px-5 bg-[rgba(220,38,38,0.03)] border border-[rgba(220,38,38,0.08)] border-l-[3px] border-l-[#DC2626] rounded-[4px] text-[14px] text-[#A1A1AA] leading-[1.55]"
            >
              {prob.text}{" "}
              <strong className="text-[#DC2626]">{prob.highlight}</strong>{" "}
              {prob.end}
            </div>
          ))}
        </div>
        <p className="mt-7 text-[14px] text-[#777] italic">
          Sound familiar? You're not alone. And it's costing you millions.
        </p>
      </section>

      {/* WHAT WE DO */}
      <section
        ref={addRevealRef}
        className="reveal min-h-screen flex flex-col justify-center py-20 px-8 md:px-20 lg:px-32 w-full border-t border-[#151515]"
      >
        <div className="text-[9px] tracking-[4px] uppercase mb-3.5 mono text-[#3B82F6]">
          (03) What We Do //
        </div>
        <h2 className="text-[clamp(36px,6vw,72px)] font-black text-white leading-[1.08] mb-4 tracking-[-2px]">
          We build what PE firms
          <br />
          look for when they
          <br />
          <span className="grad">write the check.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#151515] rounded-lg overflow-hidden mt-10">
          {pillars.map((pl, i) => (
            <div key={i} className="bg-[#0A0A0A] py-7 px-[22px]">
              <div className="text-[28px] mb-3">{pl.icon}</div>
              <div
                className="text-[10px] font-bold tracking-[2.5px] mb-2.5 mono"
                style={{ color: pl.color }}
              >
                {pl.name}
              </div>
              <p className="text-[13px] text-[#999] leading-[1.6]">{pl.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        ref={addRevealRef}
        className="reveal min-h-screen flex flex-col justify-center py-20 px-8 md:px-20 lg:px-32 w-full border-t border-[#151515]"
      >
        <div className="text-[9px] tracking-[4px] uppercase mb-3.5 mono text-[#8B5CF6]">
          (04) How It Works //
        </div>
        <h2 className="text-[clamp(36px,6vw,72px)] font-black text-white leading-[1.08] mb-4 tracking-[-2px]">
          We start small.
          <br />
          Prove it works.
          <br />
          Then scale.
        </h2>
        <p className="text-[15px] font-light text-[#999] leading-[1.65] max-w-3xl">
          No massive upfront investment. No 12-month contract. We earn your
          trust by showing results first.
        </p>

        {/* Phase Tabs */}
        <div className="flex border-b border-[#151515] mt-10">
          {phases.map((ph, i) => (
            <div
              key={i}
              onClick={() => setActivePhase(i)}
              className="flex-1 cursor-pointer py-4 px-2 text-center transition-all"
              style={{
                borderBottom:
                  i === activePhase
                    ? `2px solid ${ph.color}`
                    : "2px solid transparent",
              }}
            >
              <div
                className="text-[10px] tracking-[2px] mb-0.5 mono transition-colors"
                style={{ color: i === activePhase ? ph.color : "#555" }}
              >
                {ph.num}
              </div>
              <div
                className="text-[11px] font-bold tracking-[0.5px] transition-colors"
                style={{ color: i === activePhase ? "#fafafa" : "#666" }}
              >
                {ph.title}
              </div>
            </div>
          ))}
        </div>

        {/* Phase Content */}
        <div className="bg-[#0A0A0A] border border-[#151515] border-t-0 rounded-b-lg">
          <div className="py-7 px-6 border-b border-[#151515]">
            <div className="text-[19px] font-bold text-white mb-2 tracking-[-0.3px]">
              {p.headline}
            </div>
            <div className="text-[13px] text-[#999] leading-[1.6]">{p.desc}</div>
          </div>

          <div className="py-[22px] px-6">
            {/* Before/After Toggle */}
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="text-[9px] tracking-[2.5px] text-[#666] uppercase mono">
                Your Business
              </span>
              <div className="inline-flex bg-[#151515] rounded-[3px] p-[2px] gap-[1px]">
                <button
                  onClick={() => toggleBeforeAfter(activePhase, false)}
                  className={`px-3.5 py-[5px] rounded-[2px] text-[10px] font-bold tracking-[1px] mono transition-all border-none cursor-pointer ${
                    !showAfter[activePhase]
                      ? "bg-[#DC2626] text-white"
                      : "bg-transparent text-[#666] hover:text-[#888]"
                  }`}
                >
                  BEFORE
                </button>
                <button
                  onClick={() => toggleBeforeAfter(activePhase, true)}
                  className={`px-3.5 py-[5px] rounded-[2px] text-[10px] font-bold tracking-[1px] mono transition-all border-none cursor-pointer ${
                    showAfter[activePhase]
                      ? "bg-[#10B981] text-white"
                      : "bg-transparent text-[#666] hover:text-[#888]"
                  }`}
                >
                  AFTER
                </button>
              </div>
            </div>

            {/* Before/After Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
              {(showAfter[activePhase] ? p.after : p.before).map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-2 py-[9px] px-3 rounded-[3px] text-[12px] text-[#A1A1AA] leading-[1.4] ${
                    showAfter[activePhase]
                      ? "bg-[rgba(16,185,129,0.04)] border border-[rgba(16,185,129,0.08)]"
                      : "bg-[rgba(220,38,38,0.04)] border border-[rgba(220,38,38,0.08)]"
                  }`}
                >
                  <span
                    className="text-[12px] shrink-0 mt-[1px]"
                    style={{
                      color: showAfter[activePhase] ? "#10B981" : "#DC2626",
                    }}
                  >
                    {showAfter[activePhase] ? "✓" : "✗"}
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="cta"
        ref={addRevealRef}
        className="reveal min-h-screen flex flex-col justify-center items-center px-8 md:px-20 lg:px-32 w-full text-center border-t border-[#151515]"
      >
        <h2 className="text-[clamp(26px,5vw,48px)] font-black text-white leading-[1.08] mb-4 tracking-[-2px]">
          Your business is
          <br />
          already valuable.
          <br />
          <span className="grad">Let's make it worth more.</span>
        </h2>
        <p className="text-[15px] font-light text-[#888] mb-10 leading-[1.6]">
          One conversation. No pressure. We'll tell you exactly where AI can
          help — and if it can't, we'll tell you that too.
        </p>
        <a
          href="#"
          className="inline-block px-10 py-3.5 border border-[#222] rounded-[3px] text-[10px] font-bold text-[#ccc] tracking-[3px] uppercase cursor-pointer hover:border-[#10B981] hover:text-[#10B981] transition-all mono no-underline"
        >
          Book a Call
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#151515] py-7 px-8 md:px-20 lg:px-32 flex justify-between items-center w-full">
        <div className="flex items-center gap-2">
          <div
            className="w-5 h-5 rounded-[3px] flex items-center justify-center text-[7px] font-bold text-white mono"
            style={{ background: "linear-gradient(135deg, #10B981, #3B82F6)" }}
          >
            MK
          </div>
          <span className="text-[10px] text-[#666] mono">MKLABS</span>
        </div>
        <span className="text-[8px] text-[#666] tracking-[1px] mono">
          © MK Labs, Inc.
        </span>
      </footer>
    </div>
  );
}
