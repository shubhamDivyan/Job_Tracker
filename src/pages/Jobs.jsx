import React, { useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import JobCard from "../components/JobCard";

const Jobs = ({ jobs, loading, onSave, savedJobs }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const SearchText = searchParams.get("search") || "";
  const selectCategory = searchParams.get("category") || "All";

  const searchInputRef = useRef(null);

  const handleFocusSearch = () => {
    if (searchInputRef.current) searchInputRef.current.focus();
  };

  const handleSearchChange = (e) => {
    setSearchParams({ search: e.target.value, category: selectCategory });
  };

  const handleCategoryChange = (e) => {
    setSearchParams({ search: SearchText, category: e.target.value });
  };

  const filteredJobs = useMemo(() => {
    console.log("Calculus Log:useMemo filtering algorithm triggered!");

    return jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(SearchText.toLowerCase()) ||
        job.company.toLowerCase().includes(SearchText.toLowerCase());

      const matchesCategory =
        selectCategory === "All" || job.category === selectCategory;

      return matchesSearch && matchesCategory;
    });
  }, [jobs, SearchText, selectCategory]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-lg font-bold text-slate-400 animate-pulse tracking-wide">
          Streaming open positions from database...
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-8 animate-fade-in">
      <div className="space-y-2 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white tracking-tight">
          Explore Production Openings
        </h1>
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          Search, track, and secure verified software engineering roles across
          MERN stack ecosystems.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 p-4 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/60 items-center justify-between shadow-sm">
        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3 flex-1 max-w-3xl">
          <div className="relative flex-1">
            <span className="absolute left-4 top-3.5 text-slate-400 text-sm">
              🔍
            </span>
            <input
              type="text"
              placeholder="Filter by role name or tech stack keywords..."
              ref={searchInputRef}
              value={SearchText}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm font-semibold text-slate-800 dark:text-slate-100 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/20 transition-all shadow-inner"
            />
          </div>

          <select
            value={selectCategory}
            onChange={handleCategoryChange}
            className="px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm font-bold text-slate-600 dark:text-slate-300 focus:outline-none focus:border-sky-500 cursor-pointer shadow-sm transition-colors"
          >
            <option value="All">All Framework Domains</option>
            <option value="Frontend">Frontend Frameworks</option>
            <option value="Backend">Backend Frameworks</option>
            <option value="FullStack">FullStack Roles</option>
            <option value="AI">Artificial Intelligence</option>
            <option value="Data">Data Analytics</option>
          </select>
        </div>

        <button
          onClick={handleFocusSearch}
          className="w-full md:w-auto px-5 py-3 rounded-2xl text-xs font-black tracking-widest uppercase bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 active:scale-95 transition-all shadow-sm cursor-pointer"
        >
          Focus Search ⚡
        </button>
      </div>

      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-900 pb-3">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span className="text-sm font-extrabold text-sky-500 tracking-tight">
            Found {filteredJobs.length} Live Specifications
          </span>
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          Local Ledger API Sync Active
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => {
            return (
              <JobCard
                key={job.id}
                job={job}
                onSave={onSave}
                savedJobs={savedJobs}
              />
            );
          })
        ) : (
          <div className="col-span-full text-center py-16 space-y-3 bg-slate-50/50 dark:bg-slate-900/20 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800">
            <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 tracking-tight">
              No Records Matched Active Predicates
            </h3>
            <p className="text-sm text-slate-400 max-w-sm mx-auto">
              We couldn't find any openings matching "{SearchText}". Try
              modifying your character queries or framework selectors.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;
