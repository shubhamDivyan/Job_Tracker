import React from "react";
import { Link } from "react-router-dom";

const SavedJobCard = ({ job, onRemove }) => {
  return (
    <>
      <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md transition-all duration-200 group">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 block truncate max-w-[150px]">
              {job.company}
            </span>

            <span className="text-[10px] font-extrabold text-slate-400">
              • {job.category}
            </span>
          </div>

          <h4 className="text-base font-black text-slate-800 dark:text-white tracking-tight group-hover:text-sky-500 transition-colors">
            {job.title}
          </h4>

          <p className="text-xs font-bold text-slate-400">
            📍 {job.location} | Level:{" "}
            <span className="text-slate-600 dark:text-slate-300">
              {job.level}
            </span>
          </p>
        </div>

        <div className="sm:text-right">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">
            Annual Valuation
          </span>
          <strong className="text-lg font-black text-emerald-500 dark:text-emerald-400 tracking-tight">
            ₹{(Number(job.salary) / 100000).toFixed(1)} LPA
          </strong>
        </div>

        <div className="flex items-center gap-2 sm:self-center self-end pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-800 w-full sm:w-auto justify-end">
          <Link to={`/jobs/${job.id}`}>
            <button className="px-4 py-2.5 rounded-xl text-xs font-black border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 bg-slate-50/50 dark:bg-slate-950/40 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all cursor-pointer">
              View Specifications
            </button>
          </Link>

          <button
            onClick={() => onRemove(job.id)}
            className="px-4 py-2.5 rounded-xl text-xs font-black bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400 hover:bg-rose-100 dark:hover:bg-rose-950/40 active:scale-95 transition-all cursor-pointer"
          >
            Remove ❌
          </button>
        </div>
      </div>
    </>
  );
};

export default React.memo(SavedJobCard);
