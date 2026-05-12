#!/usr/bin/env node
/**
 * Konverterar Midjourney-PNG:er till optimerade WebP:er.
 *
 * Workflow:
 *   1. Lägg PNG-filer i public/images/mellanstadiet/_raw/ med namn
 *      L1.1.png, L1.2.png, ..., S8.png (samma ID som i lib/mellanstadiet-images.ts).
 *   2. Kör `npm run optimize-images`.
 *   3. WebP:er hamnar i public/images/mellanstadiet/<ID>.webp.
 *
 * Storleksgränser (max-bredd) per kategori:
 *   - hero (21:9):  1600px bred
 *   - inline / spel: 1200px bred
 *
 * Sharp körs lossless=false, quality=82 — bra balans för pastell-illustrationer.
 */

import { readdir, mkdir, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const RAW = path.resolve(__dirname, "..", "public", "images", "mellanstadiet", "_raw");
const OUT = path.resolve(__dirname, "..", "public", "images", "mellanstadiet");

const HERO_WIDTH = 1600;
const DEFAULT_WIDTH = 1200;
const QUALITY = 82;

function targetWidth(id) {
  return id.endsWith("-hero") ? HERO_WIDTH : DEFAULT_WIDTH;
}

function humanSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

async function main() {
  let files;
  try {
    files = await readdir(RAW);
  } catch {
    console.error(`Katalog saknas: ${RAW}`);
    console.error("Skapa den och lägg PNG-filerna där, sedan kör om scriptet.");
    process.exit(1);
  }

  const pngs = files.filter((f) => f.toLowerCase().endsWith(".png"));
  if (pngs.length === 0) {
    console.error(`Inga PNG-filer i ${RAW}`);
    process.exit(1);
  }

  await mkdir(OUT, { recursive: true });

  let totalIn = 0;
  let totalOut = 0;
  let count = 0;

  for (const file of pngs.sort()) {
    const id = file.replace(/\.png$/i, "");
    const inPath = path.join(RAW, file);
    const outPath = path.join(OUT, `${id}.webp`);
    const w = targetWidth(id);

    const inStat = await stat(inPath);
    await sharp(inPath)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(outPath);
    const outStat = await stat(outPath);

    totalIn += inStat.size;
    totalOut += outStat.size;
    count++;

    const ratio = (100 * (1 - outStat.size / inStat.size)).toFixed(0);
    console.log(
      `  ${id.padEnd(10)}  ${humanSize(inStat.size).padStart(8)} → ${humanSize(outStat.size).padStart(8)}  (-${ratio}%)  @${w}px`
    );
  }

  console.log("");
  console.log(
    `Totalt: ${count} bilder · ${humanSize(totalIn)} → ${humanSize(totalOut)}  (-${(
      100 *
      (1 - totalOut / totalIn)
    ).toFixed(0)}%)`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
