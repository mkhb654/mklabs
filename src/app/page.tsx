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

const steps = [
  { num: "01", title: "Discover", desc: "Audit your operations. Map your data. Find the gaps." },
  { num: "02", title: "Clean + Connect", desc: "Organize your data. Build the foundation AI needs." },
  { num: "03", title: "Memory + Intel", desc: "Your business gets a brain. Custom ML on your data." },
  { num: "04", title: "Agent Orchestration", desc: "AI agents run your workflows. Business runs without you." },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#060606] text-[#E4E4E7]">
      {/* NAV */}
      <nav
        className={`sticky top-0 z-50 px-7 py-3.5 flex justify-between items-center transition-all duration-400 border-b ${
          scrolled
            ? "bg-[#060606]/90 backdrop-blur-lg border-[#151515]"
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
          <span className="font-extrabold text-[17px] text-white tracking-tight">
            MKLABS
          </span>
        </div>
        <div className="px-5 py-2 border border-[#222] rounded-[3px] text-[9px] text-[#888] tracking-[2.5px] uppercase cursor-pointer hover:border-[#10B981] hover:text-[#10B981] transition-all mono">
          Book a Call
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-[120px] pb-[60px] px-7 max-w-[880px] mx-auto text-center">
        <div className="text-[9px] tracking-[5px] text-[#333] uppercase mb-9 mono">
          AI IMPLEMENTATION PARTNER //
        </div>
        <h1 className="text-[clamp(36px,7vw,72px)] font-black text-white leading-[1.0] mb-5 tracking-[-3px]">
          Turn your business
          <br />
          into an <span className="grad">AI-scalable</span>
          <br />
          company.
        </h1>
        <p className="text-lg font-light text-[#666] mb-[60px] tracking-wide">
          Built to automate, scale, and sell.
        </p>
        <div
          className="w-[1px] h-[60px] mx-auto"
          style={{ background: "linear-gradient(to bottom, #333, transparent)" }}
        />
      </section>

      {/* MARQUEE */}
      <div className="border-t border-b border-[#151515] py-3 overflow-hidden whitespace-nowrap">
        <div className="inline-block marquee-animate text-[11px] font-bold text-[#1A1A1A] tracking-[4px] uppercase mono">
          AUTOMATE // SCALE // SELL // MEMORY // INTEL // FLOW // GROWTH // AUTOMATE // SCALE // SELL // MEMORY // INTEL // FLOW // GROWTH // AUTOMATE // SCALE // SELL // MEMORY // INTEL // FLOW // GROWTH //&nbsp;
        </div>
      </div>

      {/* VALUATION */}
      <section className="py-20 px-7 max-w-[880px] mx-auto">
        <div className="text-[9px] tracking-[4px] uppercase mb-3 mono text-[#10B981]">
          (01) The Exit Math //
        </div>
        <h2 className="text-[clamp(26px,4.5vw,44px)] font-black text-white leading-[1.05] mb-12 tracking-[-2px]">
          How AI changes
          <br />
          your valuation.
        </h2>

        <div className="space-y-3.5">
          {valuation.map((v, i) => (
            <div key={i} className="flex items-center gap-3.5">
              <div className="w-20 shrink-0 text-right text-[11px] text-[#555] mono">
                {v.label}
              </div>
              <div className="flex-1">
                <div
                  className="h-[42px] rounded-[3px] flex items-center pl-3.5 transition-all duration-1000"
                  style={{
                    width: `${v.pct}%`,
                    background: `linear-gradient(90deg, ${v.color}08, ${v.color}35)`,
                    border: `1px solid ${v.color}25`,
                  }}
                >
                  <span
                    className="text-base font-bold mono"
                    style={{ color: v.color }}
                  >
                    {v.mult}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-20 px-7 max-w-[880px] mx-auto border-t border-[#151515]">
        <div className="text-[9px] tracking-[4px] uppercase mb-3 mono text-[#3B82F6]">
          (02) What We Build //
        </div>
        <h2 className="text-[clamp(26px,4.5vw,44px)] font-black text-white leading-[1.05] mb-12 tracking-[-2px]">
          Proprietary AI that
          <br />
          increases your value.
        </h2>

        <div
          className="grid gap-[1px] rounded-md overflow-hidden"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            background: "#151515",
          }}
        >
          {pillars.map((p, i) => (
            <div key={i} className="bg-[#0A0A0A] py-7 px-5">
              <div className="text-[28px] mb-3">{p.icon}</div>
              <div
                className="text-[10px] font-bold tracking-[2.5px] mb-2 mono"
                style={{ color: p.color }}
              >
                {p.name}
              </div>
              <p className="text-sm font-normal text-[#555] leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ROADMAP */}
      <section className="py-20 px-7 max-w-[880px] mx-auto border-t border-[#151515]">
        <div className="text-[9px] tracking-[4px] uppercase mb-3 mono text-[#8B5CF6]">
          (03) The Roadmap //
        </div>
        <h2 className="text-[clamp(26px,4.5vw,44px)] font-black text-white leading-[1.05] mb-12 tracking-[-2px]">
          Start small.
          <br />
          Prove it. Scale.
        </h2>

        <div>
          {steps.map((s, i) => (
            <div
              key={i}
              className={`flex items-start gap-5 py-6 ${
                i < steps.length - 1 ? "border-b border-[#151515]" : ""
              }`}
            >
              <div className="text-[32px] font-bold text-[#151515] leading-none min-w-[56px] mono">
                {s.num}
              </div>
              <div>
                <div className="text-xl font-bold text-white mb-1 tracking-tight">
                  {s.title}
                </div>
                <p className="text-sm text-[#555] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-[120px] px-7 max-w-[880px] mx-auto text-center border-t border-[#151515]">
        <h2 className="text-[clamp(28px,5vw,52px)] font-black text-white leading-[1.05] mb-5 tracking-[-2px]">
          Wherever you are
          <br />
          in the journey —
          <br />
          <span className="grad">we meet you there.</span>
        </h2>
        <p className="text-[15px] font-light text-[#444] mb-10">
          No fluff. No wasted motion. Just clarity and execution.
        </p>
        <div className="inline-block px-10 py-3.5 border border-[#222] rounded-[3px] text-[10px] font-bold text-[#ccc] tracking-[3px] uppercase cursor-pointer hover:border-[#10B981] hover:text-[#10B981] transition-all mono">
          Book an Intro Call
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#151515] py-7 px-7 flex justify-between items-center max-w-[880px] mx-auto">
        <div className="flex items-center gap-2">
          <div
            className="w-5 h-5 rounded-[3px] flex items-center justify-center text-[7px] font-bold text-white mono"
            style={{ background: "linear-gradient(135deg, #10B981, #3B82F6)" }}
          >
            MK
          </div>
          <span className="text-[10px] text-[#1A1A1A] mono">MKLABS</span>
        </div>
        <span className="text-[8px] text-[#1A1A1A] tracking-wide mono">
          © MK Labs, Inc.
        </span>
      </footer>
    </div>
  );
}
