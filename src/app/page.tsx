"use client";

import { useState, useEffect } from "react";

const valuation = [
  { label: "No AI", mult: "3–5×", pct: 20, color: "#3F3F46" },
  { label: "Basic AI", mult: "5–7×", pct: 36, color: "#F59E0B" },
  { label: "Custom ML", mult: "7–10×", pct: 60, color: "#3B82F6" },
  { label: "AI Agents", mult: "10–12×", pct: 92, color: "#10B981" },
];

const pillars = [
  { icon: "🧠", name: "MEMORY", desc: "Knowledge captured. Nothing walks out.", color: "#8B5CF6" },
  { icon: "📊", name: "INTEL", desc: "Real-time dashboards. Manual reporting gone.", color: "#3B82F6" },
  { icon: "⚙️", name: "FLOW", desc: "AI workflows. Founder dependency removed.", color: "#F59E0B" },
  { icon: "📈", name: "GROWTH", desc: "Predictive analytics. Revenue accelerated.", color: "#10B981" },
];

const phases = [
  {
    num: "01",
    title: "Discover",
    color: "#F59E0B",
    headline: "We learn your business inside out.",
    desc: "Connect to your systems. Interview key people. Map every workflow.",
    before: [
      "Knowledge trapped in people's heads",
      "No documentation or SOPs",
      "Disconnected departments",
      "Blind to departure risk",
    ],
    after: [
      "Full operational map complete",
      "Automation targets identified",
      "Risk assessment delivered",
      "Prioritized AI roadmap in hand",
    ],
  },
  {
    num: "02",
    title: "Clean",
    color: "#3B82F6",
    headline: "Build the foundation AI needs.",
    desc: "Clean your data. Digitize what's on paper. Connect your systems.",
    before: [
      "Data in 12 different places",
      "Paper records and filing cabinets",
      "Copy-paste between systems",
      "Hours wasted finding information",
    ],
    after: [
      "One unified data layer",
      "Everything digitized and searchable",
      "Systems connected automatically",
      "Clean data ready for AI",
    ],
  },
  {
    num: "03",
    title: "Memory",
    color: "#8B5CF6",
    headline: "Your business gets a brain.",
    desc: "Searchable AI knowledge base. Real-time dashboards. Custom ML on your data.",
    before: [
      '"Ask Bob — he knows how that works"',
      "Reports take days to compile",
      "Decisions based on gut feeling",
      "Key people leave, knowledge leaves",
    ],
    after: [
      "Ask the AI — it has full context",
      "Real-time dashboards, always current",
      "Decisions backed by data",
      "Knowledge preserved permanently",
    ],
  },
  {
    num: "04",
    title: "Agents",
    color: "#10B981",
    headline: "AI agents run your workflows.",
    desc: "Intelligent agents across sales, marketing, finance. Your business runs without you.",
    before: [
      "Founder approves every decision",
      "Sales team works off instinct",
      "Customer issues caught too late",
      "Growth limited by headcount",
    ],
    after: [
      "AI agents handle routine decisions",
      "Sales managed by automation",
      "Churn predicted 60 days out",
      "Business scales without linear hiring",
    ],
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [showAfter, setShowAfter] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#060606] text-[#E4E4E7]">
      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-8 md:px-12 py-5 flex justify-between items-center transition-all duration-300 ${
          scrolled
            ? "bg-[#060606]/95 backdrop-blur-xl border-b border-[#151515]"
            : ""
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-[36px] h-[36px] rounded-[6px] flex items-center justify-center font-bold text-[11px] text-white mono"
            style={{ background: "linear-gradient(135deg, #10B981, #3B82F6)" }}
          >
            MK
          </div>
          <span className="font-extrabold text-[20px] text-white tracking-tight">
            MKLABS
          </span>
        </div>
        <div className="px-6 py-2.5 border border-[#333] rounded-[4px] text-[10px] text-[#666] tracking-[3px] uppercase cursor-pointer hover:border-[#10B981] hover:text-[#10B981] transition-all mono">
          Book a Call
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-8 md:px-12 relative">
        <div className="text-[11px] tracking-[6px] text-[#444] uppercase mb-12 mono">
          AI IMPLEMENTATION PARTNER //
        </div>
        <h1 className="text-[clamp(48px,9vw,100px)] font-black text-white leading-[0.92] mb-8 tracking-[-5px]">
          Turn your business
          <br />
          into an <span className="grad">AI-scalable</span>
          <br />
          company.
        </h1>
        <p className="text-[22px] font-light text-[#555] mb-20 tracking-wide">
          Built to automate, scale, and sell.
        </p>
        <div
          className="w-[1px] h-[100px]"
          style={{ background: "linear-gradient(to bottom, #333, transparent)" }}
        />
      </section>

      {/* MARQUEE */}
      <div className="border-t border-b border-[#151515] py-4 overflow-hidden whitespace-nowrap">
        <div className="inline-block marquee-animate text-[13px] font-bold text-[#1A1A1A] tracking-[5px] uppercase mono">
          AUTOMATE // SCALE // SELL // MEMORY // INTEL // FLOW // GROWTH // AUTOMATE // SCALE // SELL // MEMORY // INTEL // FLOW // GROWTH // AUTOMATE // SCALE // SELL // MEMORY // INTEL // FLOW // GROWTH //&nbsp;
        </div>
      </div>

      {/* VALUATION */}
      <section className="min-h-screen flex flex-col justify-center py-32 px-8 md:px-12">
        <div className="max-w-[1100px] mx-auto w-full">
          <div className="text-[12px] tracking-[5px] uppercase mb-6 mono text-[#10B981]">
            (01) THE EXIT MATH //
          </div>
          <h2 className="text-[clamp(40px,7vw,72px)] font-black text-white leading-[0.95] mb-20 tracking-[-3px]">
            How AI changes
            <br />
            your valuation.
          </h2>

          <div className="space-y-6">
            {valuation.map((v, i) => (
              <div key={i} className="flex items-center gap-6">
                <div className="w-28 shrink-0 text-right text-[14px] text-[#444] mono">
                  {v.label}
                </div>
                <div className="flex-1">
                  <div
                    className="h-[60px] rounded-[5px] flex items-center pl-6 transition-all duration-1000"
                    style={{
                      width: `${v.pct}%`,
                      background: `linear-gradient(90deg, ${v.color}08, ${v.color}30)`,
                      border: `1px solid ${v.color}20`,
                    }}
                  >
                    <span
                      className="text-[22px] font-bold mono"
                      style={{ color: v.color }}
                    >
                      {v.mult}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="min-h-screen flex flex-col justify-center py-32 px-8 md:px-12 border-t border-[#151515]">
        <div className="max-w-[1100px] mx-auto w-full">
          <div className="text-[12px] tracking-[5px] uppercase mb-6 mono text-[#3B82F6]">
            (02) WHAT WE BUILD //
          </div>
          <h2 className="text-[clamp(40px,7vw,72px)] font-black text-white leading-[0.95] mb-20 tracking-[-3px]">
            Proprietary AI that
            <br />
            increases your value.
          </h2>

          <div
            className="grid gap-[1px] rounded-xl overflow-hidden"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              background: "#151515",
            }}
          >
            {pillars.map((pl, i) => (
              <div key={i} className="bg-[#0A0A0A] py-12 px-8">
                <div className="text-[48px] mb-6">{pl.icon}</div>
                <div
                  className="text-[13px] font-bold tracking-[3px] mb-4 mono"
                  style={{ color: pl.color }}
                >
                  {pl.name}
                </div>
                <p className="text-[18px] font-normal text-[#555] leading-relaxed">
                  {pl.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP - TRANSFORMATION VIEW */}
      <section className="min-h-screen flex flex-col justify-center py-32 px-8 md:px-12 border-t border-[#151515]">
        <div className="max-w-[1100px] mx-auto w-full">
          <div className="text-[12px] tracking-[5px] uppercase mb-6 mono text-[#8B5CF6]">
            (03) THE ROADMAP //
          </div>
          <h2 className="text-[clamp(40px,7vw,72px)] font-black text-white leading-[0.95] mb-8 tracking-[-3px]">
            Start small.
            <br />
            Prove it. Scale.
          </h2>

          {/* Master Toggle */}
          <div className="flex items-center gap-6 mb-12">
            <span className="text-[11px] tracking-[4px] text-[#555] uppercase mono">
              Your Business
            </span>
            <div className="inline-flex bg-[#151515] rounded-[6px] p-[4px] gap-[3px]">
              <button
                onClick={() => setShowAfter(false)}
                className={`px-8 py-3 rounded-[4px] text-[12px] font-bold tracking-[2px] mono transition-all duration-300 ${
                  !showAfter
                    ? "bg-[#DC2626] text-white shadow-lg shadow-red-500/20"
                    : "text-[#555] hover:text-[#777]"
                }`}
              >
                BEFORE
              </button>
              <button
                onClick={() => setShowAfter(true)}
                className={`px-8 py-3 rounded-[4px] text-[12px] font-bold tracking-[2px] mono transition-all duration-300 ${
                  showAfter
                    ? "bg-[#10B981] text-white shadow-lg shadow-emerald-500/20"
                    : "text-[#555] hover:text-[#777]"
                }`}
              >
                AFTER
              </button>
            </div>
          </div>

          {/* All Phases */}
          <div className="space-y-4">
            {phases.map((phase, phaseIdx) => (
              <div
                key={phaseIdx}
                className={`rounded-xl overflow-hidden transition-all duration-500 ${
                  showAfter
                    ? "bg-[#10B981]/5 border border-[#10B981]/20"
                    : "bg-[#DC2626]/5 border border-[#DC2626]/20"
                }`}
              >
                {/* Phase Header */}
                <div className="flex items-center gap-4 px-6 py-4 border-b border-[#151515]/50">
                  <div
                    className="text-[11px] tracking-[2px] mono"
                    style={{ color: phase.color }}
                  >
                    ({phase.num})
                  </div>
                  <div
                    className="text-[16px] font-bold tracking-wide uppercase"
                    style={{ color: phase.color }}
                  >
                    {phase.title}
                  </div>
                  <div className="flex-1 h-[1px] bg-[#151515]" />
                  <div className="text-[13px] text-[#444] italic hidden md:block">
                    {phase.headline}
                  </div>
                </div>

                {/* Phase Items */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-5">
                  {(showAfter ? phase.after : phase.before).map((item, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 p-4 rounded-lg text-[14px] transition-all duration-300 ${
                        showAfter
                          ? "bg-[#10B981]/10 text-[#B4B4B4]"
                          : "bg-[#DC2626]/10 text-[#B4B4B4]"
                      }`}
                    >
                      <span
                        className={`text-[15px] shrink-0 transition-all duration-300 ${
                          showAfter ? "text-[#10B981]" : "text-[#DC2626]"
                        }`}
                      >
                        {showAfter ? "✓" : "✗"}
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="min-h-screen flex flex-col justify-center items-center py-32 px-8 md:px-12 text-center border-t border-[#151515]">
        <h2 className="text-[clamp(40px,7vw,80px)] font-black text-white leading-[0.95] mb-8 tracking-[-3px]">
          Wherever you are
          <br />
          in the journey —
          <br />
          <span className="grad">we meet you there.</span>
        </h2>
        <p className="text-[20px] font-light text-[#444] mb-16">
          No fluff. No wasted motion. Just clarity and execution.
        </p>
        <div className="inline-block px-14 py-5 border border-[#333] rounded-[4px] text-[12px] font-bold text-[#888] tracking-[4px] uppercase cursor-pointer hover:border-[#10B981] hover:text-[#10B981] transition-all mono">
          Book an Intro Call
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#151515] py-10 px-8 md:px-12 flex justify-between items-center max-w-[1100px] mx-auto">
        <div className="flex items-center gap-3">
          <div
            className="w-6 h-6 rounded-[4px] flex items-center justify-center text-[8px] font-bold text-white mono"
            style={{ background: "linear-gradient(135deg, #10B981, #3B82F6)" }}
          >
            MK
          </div>
          <span className="text-[12px] text-[#222] mono">MKLABS</span>
        </div>
        <span className="text-[10px] text-[#222] tracking-wide mono">
          © MK Labs, Inc.
        </span>
      </footer>
    </div>
  );
}
