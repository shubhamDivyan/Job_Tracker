import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";


import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Jobs from "./pages/Jobs";
import { JobDetails } from "./pages/JobDetails";
import SavedJobs from "./pages/SavedJobs";
import NotFound from "./pages/NotFound";

function App() {
  const [jobs, setJobs] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Ledger Data Fetch Breach:", err);
        setLoading(false);
      });
  }, []);

  const handleSavedJob = (job) => {
    const isExist = savedJobs.some((item) => item.id === job.id);
    if (isExist) {
      alert("Operational Alert: Already tracked inside your ledger!");
      return;
    }
    setSavedJobs([...savedJobs, job]);
    alert("Operational Alert: Job pinned to watchlist successfully.");
  };

  const handleRemoveJob = (id) => {
    const updatedList = savedJobs.filter((item) => item.id !== id);
    setSavedJobs(updatedList);
    alert("Operational Alert: Position successfully scrubbed from watchlist ledger.");
  };

  return (
 
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      
      
      <Navbar savedCount={savedJobs.length} totalJobs={jobs.length} />

      <Routes>
        <Route path="/" element={<Home jobsCount={jobs.length} />} />
        <Route path="/about" element={<About />} />
        <Route 
          path="/jobs" 
          element={<Jobs jobs={jobs} loading={loading} onSave={handleSavedJob} savedJobs={savedJobs} />} 
        />
        <Route 
          path="/jobs/:itemId" 
          element={<JobDetails jobs={jobs} onSave={handleSavedJob} savedJobs={savedJobs} />} 
        />
        <Route 
          path="/saved" 
          element={<SavedJobs savedJobs={savedJobs} onRemove={handleRemoveJob} />} 
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;