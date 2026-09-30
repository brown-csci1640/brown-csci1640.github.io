#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const readline = require("readline");

const dataPath = path.join(__dirname, "src", "Lectures", "Lectures-Data.json");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

function displayLectures(lectures) {
  console.log("\nAvailable lectures:");
  lectures.forEach((lec, idx) => {
    console.log(`  ${idx}: ${lec.Date} - ${lec.Topic}`);
  });
  console.log();
}

async function main() {
  try {
    const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

    console.log("=== Add Hyperlink to Lectures ===\n");

    displayLectures(data);

    const indexStr = await question("Enter lecture index: ");
    const index = parseInt(indexStr);

    if (isNaN(index) || index < 0 || index >= data.length) {
      console.error("Invalid index!");
      rl.close();
      process.exit(1);
    }

    const lecture = data[index];
    console.log(
      `\nSelected: ${lecture.Date} - ${lecture.Topic}\n`
    );

    let modified = false;

    // Add readings
    const addReadings = await question("Add readings? (y/n): ");
    if (addReadings.toLowerCase() === "y") {
      let addMore = true;
      while (addMore) {
        const label = await question("Enter reading link label/text: ");
        const url = await question("Enter reading URL (can be external link): ");

        if (!label || !url) {
          console.error("Label and URL cannot be empty!");
          continue;
        }

        if (lecture.Reading === "-" || !lecture.Reading) {
          lecture.Reading = url;
          lecture.ReadingLabel = label;
        } else {
          lecture.Reading += "," + url;
          if (!lecture.ReadingLabel) {
            lecture.ReadingLabel = label;
          }
        }
        console.log(`✓ Added reading: "${label}"`);
        modified = true;

        const more = await question("Add another reading? (y/n): ");
        addMore = more.toLowerCase() === "y";
      }
    }

    // Add assignments
    const addAssignments = await question("\nAdd assignments? (y/n): ");
    if (addAssignments.toLowerCase() === "y") {
      let addMore = true;
      while (addMore) {
        const label = await question("Enter assignment link label/text: ");
        const url = await question("Enter assignment URL (can be external link): ");

        if (!label || !url) {
          console.error("Label and URL cannot be empty!");
          continue;
        }

        if (!lecture.Homework) {
          lecture.Homework = url;
          lecture.HomeworkLabel = label;
        } else {
          lecture.Homework += "," + url;
          if (!lecture.HomeworkLabel) {
            lecture.HomeworkLabel = label;
          }
        }
        console.log(`✓ Added assignment: "${label}"`);
        modified = true;

        const more = await question("Add another assignment? (y/n): ");
        addMore = more.toLowerCase() === "y";
      }
    }

    if (modified) {
      fs.writeFileSync(dataPath, JSON.stringify(data, null, 2) + "\n");
      console.log(`\n✓ File saved successfully!`);
    } else {
      console.log("\nNo changes made.");
    }

    rl.close();
  } catch (error) {
    console.error("Error:", error.message);
    rl.close();
    process.exit(1);
  }
}

main();
