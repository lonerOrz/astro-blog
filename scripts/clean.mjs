import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// 获取项目根目录的绝对路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

// 定义需要清理的目录
const targets = ["dist", ".astro", "node_modules/.vite", "node_modules/.cache"];

console.log("\x1b[36m%s\x1b[0m", "🧹 Cleaning build artifacts and cache...");

let deletedCount = 0;

targets.forEach((target) => {
  const fullPath = path.join(rootDir, target);

  try {
    if (fs.existsSync(fullPath)) {
      fs.rmSync(fullPath, { recursive: true, force: true });
      console.log(`\x1b[32m  ✔\x1b[0m Removed: ${target}`);
      deletedCount++;
    } else {
      console.log(`\x1b[90m  - Skipped: ${target} (not found)\x1b[0m`);
    }
  } catch (err) {
    console.error(
      `\x1b[31m  ✖\x1b[0m Failed to remove ${target}: ${err.message}`,
    );
  }
});

if (deletedCount > 0) {
  console.log(
    "\x1b[35m%s\x1b[0m",
    `✨ Successfully cleaned ${deletedCount} targets.`,
  );
} else {
  console.log("\x1b[33m%s\x1b[0m", "👍 Workspace is already clean.");
}
