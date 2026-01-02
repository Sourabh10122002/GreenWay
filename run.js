import { makeCommits } from "./index.js";

// ==========================================
// USER CONFIGURATION
// ==========================================

const REPO_PATH = "."; // Path to your git repository (e.g., "../my-other-project")
const START_DATE = "2025-05-01"; // Format: YYYY-MM-DD
const END_DATE = "2025-07-30"; // Format: YYYY-MM-DD
const TOTAL_COMMITS = 100;

// ==========================================

console.log(`Starting ${TOTAL_COMMITS} commits in ${REPO_PATH} between ${START_DATE} and ${END_DATE}...`);
makeCommits(TOTAL_COMMITS, START_DATE, END_DATE, REPO_PATH);
