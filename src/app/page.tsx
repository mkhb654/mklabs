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
      {/* NAV - Fixed */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-7 py-4 flex justify-between items-center transition-all duration-300 ${
          scrolled
            ? "bg-[#060606]/90 backdrop-blur-lg border-b border-[#151515]"
            : ""
        }`}
      >
        <div className="flex items-center gap-2.5">
          <div
            className="w-[32px] h-[32px] rounded-[5px] flex items-center justify-center font-bold text-[10px] text-white mono"
            style={{ background: "linear-gradient(135deg, #10B981, #3B82F6)" }}
          >
            MK
          </div>
          <span className="font-extrabold text-[18px] text-white tracking-tight">
            MKLABS
          </span>
        </div>
        <div className="px-5 py-2 border border-[#333] rounded-[3px] text-[9px] text-[#666] tracking-[2.5px] uppercase cursor-pointer hover:border-[#10B981] hover:text-[#10B981] transition-all mono">
          Book a Call
        </div>
      </nav>

      {/* HERO - Full viewport height */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-7 relative">
        <div className="text-[10px] tracking-[5px] text-[#444] uppercase mb-10 mono">
          AI IMPLEMENTATION PARTNER //
        </div>
        <h1 className="text-[clamp(42px,8vw,90px)] font-black text-white leading-[0.95] mb-6 tracking-[-4px]">
          Turn your business
          <br />
          into an <span className="grad">AI-scalable</span>
          <br />
          company.
        </h1>
        <p className="text-xl font-light text-[#555] mb-16 tracking-wide">
          Built to automate, scale, and sell.
        </p>
        <div
          className="w-[1px] h-[80px]"
          style={{ background: "linear-gradient(to bottom, #333, transparent)" }}
        />
      </section>

      {/* MARQUEE - Full width */}
      <div className="border-t border-b border-[#151515] py-3 overflow-hidden whitespace-nowrap">
        <div className="inline-block marquee-animate text-[11px] font-bold text-[#222] tracking-[4px] uppercase mono">
          AUTOMATE // SCALE // SELL // MEMORY // INTEL // FLOW // GROWTH // AUTOMATE // SCALE // SELL // MEMORY // INTEL // FLOW // GROWTH // AUTOMATE // SCALE // SELL // MEMORY // INTEL // FLOW // GROWTH //&nbsp;
        </div>
      </div>

      {/* VALUATION */}
      <section className="py-24 px-7 max-w-[900px] mx-auto">
        <div className="text-[10px] tracking-[4px] uppercase mb-4 mono text-[#10B981]">
          (01) THE EXIT MATH //
        </div>
        <h2 className="text-[clamp(32px,5vw,52px)] font-black text-white leading-[1.0] mb-14 tracking-[-2px]">
          How AI changes
          <br />
          your valuation.
        </h2>

        <div className="space-y-4">
          {valuation.map((v, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-24 shrink-0 text-right text-[12px] text-[#444] mono">
                {v.label}
              </div>
              <div className="flex-1">
                <div
                  className="h-[48px] rounded-[4px] flex items-center pl-4 transition-all duration-1000"
                  style={{
                    width: `${v.pct}%`,
                    background: `linear-gradient(90deg, ${v.color}08, ${v.color}30)`,
                    border: `1px solid ${v.color}20`,
                  }}
                >
                  <span
                    className="text-[17px] font-bold mono"
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
      <section className="py-24 px-7 max-w-[900px] mx-auto border-t border-[#151515]">
        <div className="text-[10px] tracking-[4px] uppercase mb-4 mono text-[#3B82F6]">
          (02) WHAT WE BUILD //
        </div>
        <h2 className="text-[clamp(32px,5vw,52px)] font-black text-white leading-[1.0] mb-14 tracking-[-2px]">
          Proprietary AI that
          <br />
          increases your value.
        </h2>

        <div
          className="grid gap-[1px] rounded-lg overflow-hidden"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            background: "#151515",
          }}
        >
          {pillars.map((p, i) => (
            <div key={i} className="bg-[#0A0A0A] py-8 px-6">
              <div className="text-[32px] mb-4">{p.icon}</div>
              <div
                className="text-[11px] font-bold tracking-[2.5px] mb-2 mono"
                style={{ color: p.color }}
              >
                {p.name}
              </div>
              <p className="text-[15px] font-normal text-[#555] leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ROADMAP */}
      <section className="py-24 px-7 max-w-[900px] mx-auto border-t border-[#151515]">
        <div className="text-[10px] tracking-[4px] uppercase mb-4 mono text-[#8B5CF6]">
          (03) THE ROADMAP //
        </div>
        <h2 className="text-[clamp(32px,5vw,52px)] font-black text-white leading-[1.0] mb-14 tracking-[-2px]">
          Start small.
          <br />
          Prove it. Scale.
        </h2>

        <div>
          {steps.map((s, i) => (
            <div
              key={i}
              className={`flex items-start gap-6 py-7 ${
                i < steps.length - 1 ? "border-b border-[#151515]" : ""
              }`}
            >
              <div className="text-[36px] font-bold text-[#1A1A1A] leading-none min-w-[60px] mono">
                {s.num}
              </div>
              <div>
                <div className="text-[22px] font-bold text-white mb-2 tracking-tight">
                  {s.title}
                </div>
                <p className="text-[15px] text-[#555] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-7 max-w-[900px] mx-auto text-center border-t border-[#151515]">
        <h2 className="text-[clamp(32px,5.5vw,60px)] font-black text-white leading-[1.0] mb-6 tracking-[-2px]">
          Wherever you are
          <br />
          in the journey —
          <br />
          <span className="grad">we meet you there.</span>
        </h2>
        <p className="text-[16px] font-light text-[#444] mb-12">
          No fluff. No wasted motion. Just clarity and execution.
        </p>
        <div className="inline-block px-12 py-4 border border-[#333] rounded-[3px] text-[11px] font-bold text-[#999] tracking-[3px] uppercase cursor-pointer hover:border-[#10B981] hover:text-[#10B981] transition-all mono">
          Book an Intro Call
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#151515] py-8 px-7 flex justify-between items-center max-w-[900px] mx-auto">
        <div className="flex items-center gap-2">
          <div
            className="w-5 h-5 rounded-[3px] flex items-center justify-center text-[7px] font-bold text-white mono"
            style={{ background: "linear-gradient(135deg, #10B981, #3B82F6)" }}
          >
            MK
          </div>
          <span className="text-[10px] text-[#222] mono">MKLABS</span>
        </div>
        <span className="text-[9px] text-[#222] tracking-wide mono">
          © MK Labs, Inc.
        </span>
      </footer>
    </div>
  );
}
