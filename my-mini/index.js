import fs from "fs";
const FILE = "data.json";

function loadTask() {
  if (!fs.existsSync(FILE)) return [];
  const data = fs.readFileSync(FILE);
  return JSON.parse(data);
}
const lo = loadTask();
console.log(lo);
