import React from "react";

const NotFound = () => {
  return (
    <div>
      <div className="min-h-[75vh] flex flex-col items-center justify-center px-4 text-center space-y-6 animate-fade-in">
        <div className="relative">
          <h1 className="text-7xl md:text-9xl font-black text-slate-200 dark:text-slate-800 tracking-widest select-none">
            404
          </h1>
          <span className="absolute inset-0 flex items-center justify-center text-xl md:text-2xl font-extrabold text-sky-500 tracking-tight mt-4 md:mt-8">
            ⚠️ Route Core Breach
          </span>
        </div>

        <div className="space-y-2 max-w-md">
          <h3 className="text-xl font-bold text-slate-800 dark:text-white tracking-tight">
            Lost in the Data Stream?
          </h3>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
            The terminal path you are trying to intercept does not exist inside
            the current routing registry index logs.
          </p>
        </div>

        <div className="pt-2">
          <Link to="/jobs">
            <button className="px-6 py-3 rounded-xl text-xs font-black tracking-widest uppercase bg-sky-500 hover:bg-sky-600 text-white shadow-lg shadow-sky-500/10 hover:shadow-sky-500/20 active:scale-95 transition-all cursor-pointer">
              Return to Active Base ⚡
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
