#!/usr/bin/env node

const path = require("path")
const fs = require("fs")
const execa = require("execa")
const download = require("download-git-repo")

const templateRepo =
  "https://github.com/natnaelengeda/dashboard-template-reactjs.git" // Your repo name
const targetDir = process.argv[2] || "." // Directory where to place the files

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true })
}

console.log(`Downloading template to ${targetDir}...`)

download(templateRepo, targetDir, { clone: true }, err => {
  if (err) {
    console.error("Error downloading template:", err)
    process.exit(1)
  }

  console.log("Template downloaded!")
  console.log("Now running npm install...")
  execa("npm", ["install"], { cwd: targetDir })
    .then(() => {
      console.log("npm install complete!")
    })
    .catch(err => {
      console.error("Error running npm install:", err)
    })
})
