import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";
import path from "path";

export const makeCommits = (n, startDate, endDate, repoPath = ".") => {
    // Initialize git with the specific repo path
    const git = simpleGit(repoPath);
    const filePath = path.join(repoPath, "data.json");

    if (n === 0) {
        return git
            .push()
            .then(() => console.log("All commits pushed successfully!"))
            .catch((err) => console.error("Failed to push:", err));
    }

    // Ensure dates are moment objects
    const startM = moment(startDate);
    const endM = moment(endDate);

    if (!startM.isValid() || !endM.isValid()) {
        console.error("Invalid dates! Please use format YYYY-MM-DD");
        return;
    }

    const startTimestamp = startM.valueOf();
    const endTimestamp = endM.valueOf();

    const randomTimestamp = random.int(startTimestamp, endTimestamp);
    const date = moment(randomTimestamp).format();

    const data = {
        date: date,
    };

    console.log(`Commit ${n}: ${date}`);

    jsonfile.writeFile(filePath, data, (err) => {
        if (err) {
            console.error("Failed to write file:", err);
            console.error("Path was:", filePath);
            return;
        }
        git
            .add([filePath])
            .commit(date, { "--date": date })
            .then(() => makeCommits(n - 1, startDate, endDate, repoPath))
            .catch((err) => console.error("Failed to commit:", err));
    });
};