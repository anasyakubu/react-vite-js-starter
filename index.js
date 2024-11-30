#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");

// Function to run shell commands
function runCommand(command) {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    console.error(`Failed to execute ${command}`);
    process.exit(1);
  }
}

// Function to create Tailwind config
function createTailwindConfig() {
  const configContent = `
    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
  `;

  fs.writeFileSync("tailwind.config.js", configContent);
}

// Function to update Tailwind imports in index.css
function updateCSS() {
  const cssContent = `
@tailwind base;
@tailwind components;
@tailwind utilities;
  `;

  fs.writeFileSync("./src/index.css", cssContent);
}

// Main function
function init() {
  console.log(
    "Creating a new Vite project with React, Tailwind CSS, Axios, React Icons, and Sass..."
  );

  // Step 1: Initialize a new Vite project with React template
  runCommand("npm create vite@latest . -- --template react");

  // Step 2: Install core dependencies
  console.log("Installing core dependencies...");
  runCommand("npm install");

  // Step 3: Install Tailwind CSS and its dependencies
  console.log("Installing Tailwind CSS...");
  runCommand("npm install -D tailwindcss postcss autoprefixer");

  // Step 4: Initialize Tailwind CSS configuration
  console.log("Initializing Tailwind CSS...");
  runCommand("npx tailwindcss init -p");

  // Step 5: Update Tailwind configuration and CSS imports
  createTailwindConfig();
  updateCSS();

  // Step 6: Install additional packages (Axios, React Icons, Sass)
  console.log("Installing additional packages: Axios, React Icons, Sass");
  runCommand("npm install axios react-icons sass");

  console.log("\n✅ Project setup complete!");
  console.log("To start the development server, run:");
  console.log("npm run dev");
}

// Run the initialization script
init();
