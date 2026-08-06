#!/usr/bin/env node
// Copies package.json's version into every shipped bucket's plugin manifest.
// This fork ships one plugin per bucket (see CLAUDE.md), so there is no root
// .claude-plugin/plugin.json — each bucket carries a Claude and a Codex manifest.
// Runs as part of `npm run version`, immediately after `changeset version`.
// With --check it changes nothing and exits 1 if any manifest is out of sync.

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const repo = join(dirname(fileURLToPath(import.meta.url)), "..");
const BUCKETS = ["engineering", "productivity", "misc"];

const manifests = BUCKETS.flatMap((bucket) =>
  [".claude-plugin", ".codex-plugin"].map((dir) =>
    join(repo, "skills", bucket, dir, "plugin.json"),
  ),
).filter((path) => existsSync(path));

const { version } = JSON.parse(readFileSync(join(repo, "package.json"), "utf8"));
const check = process.argv.includes("--check");
const stale = [];

for (const path of manifests) {
  const rel = relative(repo, path);
  const source = readFileSync(path, "utf8");
  const plugin = JSON.parse(source);

  if (plugin.version === version) {
    console.log(`${rel} is ${version} — already in sync`);
    continue;
  }

  if (check) {
    stale.push(`${rel} is ${plugin.version}, package.json is ${version}`);
    continue;
  }

  // Rewrite only the version line, to keep the key order and the formatting.
  const updated = source.replace(/("version"\s*:\s*")[^"]*(")/, `$1${version}$2`);

  if (JSON.parse(updated).version !== version) {
    console.error(`Could not find a version field to replace in ${rel}.`);
    process.exit(1);
  }

  writeFileSync(path, updated);
  console.log(`${rel} ${plugin.version} -> ${version}`);
}

if (stale.length) {
  console.error(
    `${stale.join("\n")}\nRun \`node scripts/sync-plugin-version.mjs\`.`,
  );
  process.exit(1);
}
