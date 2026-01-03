# 🌱 GreenWay

> A lightweight tool to backdate GitHub commits runs and populate your contribution graph.

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 📖 Overview

GreenWay helps you fill up your GitHub contribution graph by generating dummy commits with past dates. It's a fun tool to greenify your profile!

## �️ Prerequisites

Before you begin, ensure you have the following installed:

- **[Node.js](https://nodejs.org/en/download/)** (v14 or higher)
- **[Git](https://git-scm.com/downloads)**

## � Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/Sourabh10122002/greenWay.git
cd greenWay
npm install
```

## 🚀 Usage

1.  **Configure**: Open `run.js` and edit the configuration variables to check your needs:

    ```javascript
    // run.js
    const REPO_PATH = ".";           // Path to the git repository
    const START_DATE = "2025-05-01"; // Start date (YYYY-MM-DD)
    const END_DATE = "2025-07-30";   // End date (YYYY-MM-DD)
    const TOTAL_COMMITS = 100;       // Number of commits to generate
    ```

2.  **Run**: Execute the script to start generating commits:

    ```bash
    npm start
    ```

    The script will randomly generate commits between the specified dates and push them to the origin.

## 📁 Project Structure

```
greenway/
├── run.js           # Configuration & Entry point
├── index.js         # Core logic for git operations
├── data.json        # Stores commit history
├── package.json     # Project metadata & dependencies
└── README.md        # Documentation
```

## ⚠️ Disclaimer

**For Educational Purposes Only**: This tool is intended for learning and testing purposes. Please use it responsibly and do not abuse GitHub's contribution graph system.

## 🤝 Credits

Concept inspired by **Akshay Saini**.

## 📄 License

This project is licensed under the **MIT License**.
