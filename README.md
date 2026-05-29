# Briefcase.ai 💼

Briefcase.ai is a premium, high-performance Client-Side Single Page Application (SPA) designed as an advanced career metrics tracking dashboard for software engineers. It enforces strict reactive performance optimization using **React 19**, **React Router v6**, and **Tailwind CSS v4** with zero props-drilling.

---

## 🔗 Deployment & Repository

* **Live Production Link:**https://job-tracker-git-main-shubham-divyanshus-projects.vercel.app/
* **GitHub Repository:**https://github.com/shubhamDivyan/Job_Tracker

---

## 📂 System Folder Structure

```text
briefcase-ai/
├── public/
│   └── jobs.json           # Raw mock data ledger for active vacancy listings
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Sticky header with real-time counters & context theme toggle
│   │   └── SavedJobCard.jsx   # Performance memoized card row for bookmarked items
│   ├── context/
│   │   └── ThemeContext.jsx   # Custom context layer handling root HTML class mutations
│   ├── pages/
│   │   ├── Home.jsx           # Aggregator terminal dashboard landing grid
│   │   ├── About.jsx          # Generic product identity narrative mapping
│   │   ├── Jobs.jsx           # Main vacancy exploration board grid
│   │   ├── JobDetails.jsx     # Deep specification review panel parsing active parameters
│   │   ├── SavedJobs.jsx      # Watchlist dashboard tracking overall financial analytics
│   │   └── NotFound.jsx       # Wildcard 404 router protection barrier
│   ├── App.jsx             # Top-ancestor state manager orchestrating central routing tree
│   ├── index.css           # Main CSS stream managing Tailwind v4 injection hooks
│   └── main.jsx            # Application initialization node attaching root providers
├── package.json            # Project dependencies and operational scripts
└── README.md               # System documentation ledger
⚡ Core Features & Systems Framework
Asynchronous Data Ingestion: Dynamic software job openings pipeline processed smoothly via centralized JSON asset streams.

Atomic State Mutation: Watchlist additions and exclusions adhere strictly to structural immutability patterns using spread allocations.

Calculated Valuation Modeling: Real-time computational analytics layer backed by useMemo hooks to map cumulative compensation matrices into Lakhs Per Annum (LPA) formats instantly.

Workspace Theme Synchronizer: Custom global React Context API engine mapping manual light/dark themes directly onto the HTML Document root node.

Responsive Fluid Design: Powered by Tailwind CSS v4 featuring responsive flex adaptations changing row styles seamlessly from desktop grids down to mobile cards.

Wildcard Security Fallback: Integrated catch-all routing module (*) acting as a shield to securely isolate unauthorized or dead path queries without application crashes.

🛠️ Tech Stack & Registries
Core UI Architecture: React 19 (Functional Component Blueprints)

Routing Infrastructure: React Router v6 (Dynamic Param Iterations)

Global Context Layer: Named Export Context API (ThemeContext)

Styling Framework: Tailwind CSS v4 (Utility Processing Engine)

Performance Optimizers: React Memoization Modules (React.memo, useMemo)

⚙️ Development Environment Deployment
Follow this exact terminal execution tree to spin up the local application server:

1. Clone the repository framework
Bash
git clone [https://github.com/shubham-divyanshu/briefcase-ai.git](https://github.com/shubham-divyanshu/briefcase-ai.git)
cd briefcase-ai
2. Install node package bundles
Bash
npm install
3. Verify Tailwind CSS v4 Compilation Layer
Ensure your src/index.css setup includes the custom variant flag targeting class configurations:

CSS
@import "tailwindcss";

/* Forces the Tailwind compiler engine to look for manual root theme tags */
@custom-variant dark (&:where(.dark, .dark *));
4. Execute environment dev thread
Bash
npm run dev
Open http://localhost:5173 inside your local browser to access the active instance sandbox.

🧠 Architectural Deep Dive
I. Data Immutability Controls
To bypass structural reference pollution and force clean component rendering loops, adding records computes a fresh state reference footprint:

JavaScript
setSavedJobs([...savedJobs, job]); // Forces unique reference pointer allocation in RAM
II. Computational Isolation
Cumulative metrics operations avoid heavy script execution overhead during unrelated state switches by implementing snapshot isolation boundaries:

JavaScript
const totalSalaryMetrics = useMemo(() => {
  return savedJobs.reduce((acc, curr) => acc + Number(curr.salary), 0);
}, [savedJobs]);
III. Context-Driven Root Variant Adjustments
The manual theme provider passes toggle notifications down the application tree without props-drilling, updating the HTML document context wrapper dynamically:

JavaScript
const root = window.document.documentElement;
theme === "dark" ? root.classList.add("dark") : root.classList.remove("dark");
Developed & Documented by Shubham Divyanshu | 2026 Engineering Compilation Ledger.
