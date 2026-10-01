# Add Hyperlink Script

A simple interactive script to add hyperlinks to the Lectures page Readings and Assignments sections.

## Usage

```bash
node add-hyperlink.js
```

Or directly:

```bash
./add-hyperlink.js
```

## How It Works

1. **Display Lectures**: The script shows all available lectures indexed by date and topic
2. **Select Lecture**: Enter the index number of the lecture you want to update
3. **Add Readings (optional)**: Choose whether to add readings. You can add multiple readings in one go.
4. **Add Assignments (optional)**: Choose whether to add assignments. You can add multiple assignments in one go.
5. **Enter Link Details** for each item:
   - **Link label**: The text that will be displayed (e.g., "Paper 1", "Assignment 1")
   - **URL**: The full URL to the resource (can be any external link or internal reference)

The script will then update `src/Lectures/Lectures-Data.json` with your changes.

## Examples

### Adding Readings and Assignments to the Same Lecture
```
Enter lecture index: 5
Selected: Oct 19 - Security in Machine Learning I

Add readings? (y/n): y
Enter reading link label/text: MPC Tutorial
Enter reading URL (can be external link): https://example.com/mpc-tutorial
✓ Added reading: "MPC Tutorial"
Add another reading? (y/n): y
Enter reading link label/text: Secure Computation Paper
Enter reading URL (can be external link): https://arxiv.org/abs/1234.5678
✓ Added reading: "Secure Computation Paper"
Add another reading? (y/n): n

Add assignments? (y/n): y
Enter assignment link label/text: Problem Set 5
Enter assignment URL (can be external link): https://example.com/pset5
✓ Added assignment: "Problem Set 5"
Add another assignment? (y/n): n

✓ File saved successfully!
```

## Data Format

- **Readings**: Stored as comma-separated URLs in the `Reading` field. The `ReadingLabel` is used as the display text.
- **Assignments**: Stored as comma-separated URLs in the `Homework` field. The `HomeworkLabel` is used as the display text.

## Features

- Add multiple readings and assignments in a single run
- Support for any external URL (not limited to internal 1640 page links)
- Comma-separated storage allows multiple links per lecture
- The script preserves JSON formatting when saving
