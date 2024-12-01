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

// Function to create Home component
function createHomeComponent() {
  const folderPath = "./src/home";
  const filePath = `${folderPath}/Home.jsx`;

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }

  const homeComponentContent = `
import React from 'react';

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-500">Welcome to Your React Vite App</h1>
        <p className="mt-4 text-lg text-gray-600">
          This is the Home Page component created with React and styled using Tailwind CSS.
        </p>
        <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;
  `;

  fs.writeFileSync(filePath, homeComponentContent);
}

// Function to create App.jsx
function createAppJSX() {
  const appContent = `
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";

function App() {
  return (
    <div className="App font-sans">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
  `;

  fs.writeFileSync("./src/App.jsx", appContent);
}

// Function to update main.jsx to render App component
function updateMainJSX() {
  const mainJSXContent = `
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
  `;

  fs.writeFileSync("./src/main.jsx", mainJSXContent);
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

  // Step 6: Install additional packages (Axios, React Icons, Sass, react-router-dom)
  console.log(
    "Installing additional packages: Axios, React Icons, Sass, react-router-dom"
  );
  runCommand("npm install axios react-icons sass react-router-dom");

  // Step 7: Create Home component and App.jsx, then update main.jsx
  createHomeComponent();
  createAppJSX();
  updateMainJSX();

  console.log("\n✅ Project setup complete!");
  console.log("To start the development server, run:");
  console.log("npm run dev");
}

// Run the initialization script
init();
