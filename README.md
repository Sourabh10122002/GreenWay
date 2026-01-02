# 🌱 GreenWay

A tool to generate GitHub contribution graph commits with backdated timestamps.

## 📦 Installation

```bash
npm install
```

## 🚀 Usage

Run the script to create commits:

```bash
node run.js
```

This will generate commits based on your configuration in `run.js` to populate your GitHub contribution graph.

## ⚙️ Configuration

Edit the configuration variables in `run.js` to customize the commit generation:

```javascript
const REPO_PATH = ".";         // Path to your git repository
const START_DATE = "2025-05-01"; // Start date (YYYY-MM-DD)
const END_DATE = "2025-07-30";   // End date (YYYY-MM-DD)
const TOTAL_COMMITS = 100;       // Total number of commits to generate
```

## 📁 Project Structure

```
greenway/
├── run.js           # Entry point & Configuration
├── index.js         # Core logic script
├── data.json        # Commit data file
├── package.json     # Dependencies
├── LICENSE          # MIT License
└── README.md        # This file
```

## ⚠️ Disclaimer

This tool is for educational purposes only. Use responsibly and ethically.

## Credits
Idea given by Akshay Saini

## 📄 License

MIT © [Sourabh Rawat](https://github.com/sourabh10122002)
