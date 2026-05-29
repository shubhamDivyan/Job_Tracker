import React, { useMemo } from "react";
import { Link } from "react-router-dom";

const SavedJobs = ({ savedJobs, onRemove }) => {
  const totalSalaryMetrics = useMemo(() => {
    console.log(
      "Calculus Log :Accumulating total Salary package via useMemo....",
    );

    const total = savedJobs.reduce((acc, curr) => {
      return acc + Number(curr.salary);
    }, 0);

    return total;
  }, [savedJobs]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-900 pb-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-black text-slate-800 dark:text-white tracking-tight">
            Saved Watchlist Ledger
          </h1>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Monitor curated profiles and compiled compensation matrices.
          </p>
        </div>

        <Link
          to="/jobs"
          className="inline-flex items-center text-xs font-bold text-sky-500 hover:text-sky-600 dark:hover:text-sky-400 uppercase tracking-wider gap-1 transition-colors"
        >
          ← Back to Explore Feed
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/60 shadow-inner">
        <div className="space-y-1 p-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            Total Saved Positions
          </span>
          <p className="text-3xl font-black text-slate-800 dark:text-white">
            {savedJobs.length}{" "}
            <span className="text-sm font-bold text-slate-400">Roles</span>
          </p>
        </div>

        <div className="space-y-1 p-2 border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-slate-800 sm:pl-6">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            Combined Annual Valuation
          </span>
          <p className="text-3xl font-black text-emerald-500 dark:text-emerald-400">
            ₹{(totalSalaryMetrics / 100000).toFixed(1)}{" "}
            <span className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              LPA
            </span>
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {savedJobs.length > 0 ? (
          savedJobs.map((job) => (
            <div
              key={job.id}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200"
            >
              {/* Info Block */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                  {job.company}
                </span>
                <h4 className="text-base font-black text-slate-800 dark:text-white tracking-tight">
                  {job.title}
                </h4>
                <p className="text-xs font-bold text-slate-400">
                  Compensation Spec:{" "}
                  <span className="text-slate-600 dark:text-slate-300">
                    ₹{(Number(job.salary) / 100000).toFixed(1)} LPA
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-2 sm:self-center self-end">
                <Link to={`/jobs/${job.id}`}>
                  <button className="px-4 py-2 rounded-xl text-xs font-extrabold border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-950 transition-colors cursor-pointer">
                    View Details
                  </button>
                </Link>

                <button
                  onClick={() => onRemove(job.id)}
                  className="px-4 py-2 rounded-xl text-xs font-extrabold bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400 hover:bg-rose-100 dark:hover:bg-rose-950/40 transition-colors cursor-pointer"
                >
                  Remove ❌
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-16 space-y-3 bg-slate-50/30 dark:bg-slate-900/10 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800">
            <h3 className="text-lg font-bold text-slate-700 dark:text-slate-300 tracking-tight">
              Your Watchlist Ledger is Empty
            </h3>
            <p className="text-sm text-slate-400 max-w-xs mx-auto">
              No positions saved yet. Head back to the explore feed to bookmark
              active software development roles.
            </p>
            <div className="pt-2">
              <Link to="/jobs">
                <button className="px-5 py-2.5 rounded-xl text-xs font-black bg-sky-500 hover:bg-sky-600 text-white shadow-sm cursor-pointer transition-colors uppercase tracking-wider">
                  Explore Jobs ⚡
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedJobs;
