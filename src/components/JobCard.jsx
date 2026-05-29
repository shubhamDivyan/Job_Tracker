import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job, onSave, savedJobs }) => {
  const isAlreadySaved =
    savedJobs && savedJobs.some((item) => item.id === job.id);

  return (
    <div className="group relative p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:shadow-xl hover:border-sky-500/50 transform hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 block truncate max-w-[150px]">
            {job.company}
          </span>
          <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 border border-sky-100/30 dark:border-sky-900/20">
            {job.category}
          </span>
        </div>

        <h3 className="text-lg font-black text-slate-800 dark:text-white tracking-tight leading-snug group-hover:text-sky-500 transition-colors line-clamp-1">
          {job.title}
        </h3>

        <div className="flex flex-wrap gap-1.5 pt-1">
          <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-800">
            📍 {job.location}
          </span>

          <span
            className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${
              job.level === "Advanced"
                ? "bg-rose-50 text-rose-600 dark:bg-rose-950/20 dark:text-rose-400 border-rose-100/30"
                : job.level === "Intermediate"
                  ? "bg-amber-50 text-amber-600 dark:bg-amber-950/20 dark:text-amber-400 border-amber-100/30"
                  : "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/20 dark:text-emerald-400 border-emerald-100/30"
            }`}
          >
            🔥 {job.level}
          </span>
        </div>

        <div className="pt-2 flex items-baseline gap-1 text-slate-700 dark:text-slate-200">
          <span className="text-xl font-black tracking-tight">
            ₹{(Number(job.salary) / 100000).toFixed(1)}
          </span>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            LPA
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60">
        <Link to={`/jobs/${job.id}`} className="w-full">
          <button className="w-full text-center py-2.5 rounded-xl text-xs font-black tracking-wider uppercase border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 bg-slate-50/50 dark:bg-slate-950/40 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all cursor-pointer">
            Details
          </button>
        </Link>

        <button
          onClick={() => onSave(job)}
          disabled={isAlreadySaved}
          className={`w-full py-2.5 rounded-xl text-xs font-black tracking-wider uppercase transition-all shadow-sm active:scale-95 cursor-pointer ${
            isAlreadySaved
              ? "bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed border border-slate-200/40 dark:border-slate-700/20 shadow-none"
              : "bg-sky-500 hover:bg-sky-600 text-white shadow-sky-500/10 hover:shadow-sky-500/20"
          }`}
        >
          {isAlreadySaved ? "✓ Saved" : "Save"}
        </button>
      </div>
    </div>
  );
};

export default React.memo(JobCard);
