import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-16 animate-fade-in">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-sky-50 text-sky-600 dark:bg-sky-950/50 dark:text-sky-400 border border-sky-100/20">
          Our Identity
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-slate-800 dark:text-white tracking-tight leading-none">
          Redefining Career Ingestion Frameworks.
        </h1>
        <p className="text-sm md:text-base font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
          We build decentralized data tracking layers designed to accelerate
          global software engineering recruitment workflows with zero friction.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 space-y-3 shadow-sm">
          <div className="w-10 h-10 rounded-2xl bg-sky-500/10 text-sky-500 flex items-center justify-center font-black text-lg">
            🎯
          </div>
          <h3 className="text-base font-black text-slate-800 dark:text-white tracking-tight">
            Targeted Aggregation
          </h3>
          <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 leading-relaxed">
            Filtering high-signal tech opportunities without the noise of
            generic job aggregation queues.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 space-y-3 shadow-sm">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-black text-lg">
            ⚡
          </div>
          <h3 className="text-base font-black text-slate-800 dark:text-white tracking-tight">
            Real-Time Sync
          </h3>
          <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 leading-relaxed">
            Instant interaction mapping pipelines that update live metrics and
            user watchlist states effortlessly.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 space-y-3 shadow-sm">
          <div className="w-10 h-10 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-black text-lg">
            🛡️
          </div>
          <h3 className="text-base font-black text-slate-800 dark:text-white tracking-tight">
            Data Integrity
          </h3>
          <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 leading-relaxed">
            Enforcing atomic state controls to guarantee zero synchronization
            lag and strict immutability checks.
          </p>
        </div>
      </div>

      <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-xl shadow-slate-100/40 dark:shadow-none flex flex-col md:flex-row gap-8 items-center justify-between">
        <div className="space-y-3 max-w-xl">
          <h3 className="text-xl font-black text-slate-800 dark:text-white tracking-tight">
            Empowering the Next Generation of Technical Talents.
          </h3>
          <p className="text-xs md:text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
            Briefcase operates on a fundamental baseline ideology:
            recruitment tools should be fast, highly scannable, and
            state-driven. We provide engineers with a robust command panel
            center to isolate open vacancies, monitor financial metrics scales,
            and curate high-priority career targets.
          </p>
        </div>

        <div className="w-full md:w-auto text-right">
          <Link to="/jobs" className="w-full block">
            <button className="w-full md:w-auto px-6 py-3.5 rounded-xl text-xs font-black tracking-widest uppercase bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 text-white shadow-lg active:scale-95 transition-all cursor-pointer whitespace-nowrap">
              Explore Platform ⚡
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
