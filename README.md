PlaywrightUIAutomation

✅ Prerequisites
Ensure you have the following installed on your system:

Node.js (v16 or later recommended)
VS Code

📦 VS Code Extensions
Install the following extensions from the VS Code Marketplace:

Playwright Test for VS Code
Helps with running Playwright tests and debugging.

Cucumber (Gherkin) Full Support
Provides syntax highlighting and IntelliSense for .feature files.

⚙️ Install Playwright
Open VS Code.
Press Ctrl + Shift + P to open the command palette.
Type Playwright and select Install Playwright.
Choose browsers to install (default options are fine).

📁 Project Setup with Cucumber and TypeScript
Run the following commands in the terminal:

# Install Cucumber.js
npm install @cucumber/cucumber --save-dev

# Install TypeScript runtime
npm install ts-node --save-dev

📂 Folder Structure

Organize your folders as shown below:
PlaywrightUIAutomation/
│
├── features/
│   └── login.feature
│
├── step-definitions/
│   └── login.steps.ts
│
├── support/
│   └── hooks.ts
│
├── cucumber.json
├── playwright.config.ts
└── tsconfig.json


🛠️ Configure cucumber.json
Create a cucumber.json file in the root directory with the following configuration:

json
Copy
Edit
{
  "default": {
    "require": ["./step-definitions/**/*.ts", "./support/**/*.ts"],
    "paths": ["./features/**/*.feature"],
    "publishQuiet": true,
    "format": ["html:reports/cucumber-report.html"],
    "requireModule": ["ts-node/register"]
  }
}


⚙️ VS Code Cucumber Settings
Press Ctrl + , to open Settings.

Search for cucumber.

Under Cucumber > Features and Glue Paths, specify the folder paths:

Features path: features/

Glue path: step-definitions/

▶️ Running Tests
To run tests using Cucumber:

bash
Copy
Edit
npx cucumber-js
If you're using TypeScript, ensure it's compiled or use ts-node as shown in the config.



