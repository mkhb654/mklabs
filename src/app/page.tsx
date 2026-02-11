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

      {/* HERO - Full viewport */}
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

      {/* MARQUEE - Full width */}
      <div className="border-t border-b border-[#151515] py-4 overflow-hidden whitespace-nowrap">
        <div className="inline-block marquee-animate text-[13px] font-bold text-[#1A1A1A] tracking-[5px] uppercase mono">
          AUTOMATE // SCALE // SELL // MEMORY // INTEL // FLOW // GROWTH // AUTOMATE // SCALE // SELL // MEMORY // INTEL // FLOW // GROWTH // AUTOMATE // SCALE // SELL // MEMORY // INTEL // FLOW // GROWTH //&nbsp;
        </div>
      </div>

      {/* VALUATION - Near full viewport */}
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

      {/* PILLARS - Near full viewport */}
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
            {pillars.map((p, i) => (
              <div key={i} className="bg-[#0A0A0A] py-12 px-8">
                <div className="text-[48px] mb-6">{p.icon}</div>
                <div
                  className="text-[13px] font-bold tracking-[3px] mb-4 mono"
                  style={{ color: p.color }}
                >
                  {p.name}
                </div>
                <p className="text-[18px] font-normal text-[#555] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP - Near full viewport */}
      <section className="min-h-screen flex flex-col justify-center py-32 px-8 md:px-12 border-t border-[#151515]">
        <div className="max-w-[1100px] mx-auto w-full">
          <div className="text-[12px] tracking-[5px] uppercase mb-6 mono text-[#8B5CF6]">
            (03) THE ROADMAP //
          </div>
          <h2 className="text-[clamp(40px,7vw,72px)] font-black text-white leading-[0.95] mb-20 tracking-[-3px]">
            Start small.
            <br />
            Prove it. Scale.
          </h2>

          <div>
            {steps.map((s, i) => (
              <div
                key={i}
                className={`flex items-start gap-8 py-10 ${
                  i < steps.length - 1 ? "border-b border-[#151515]" : ""
                }`}
              >
                <div className="text-[48px] font-bold text-[#1A1A1A] leading-none min-w-[80px] mono">
                  {s.num}
                </div>
                <div>
                  <div className="text-[28px] font-bold text-white mb-3 tracking-tight">
                    {s.title}
                  </div>
                  <p className="text-[18px] text-[#555] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Full viewport */}
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
