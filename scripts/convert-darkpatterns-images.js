// Konverterar dark-patterns-bilderna från Joels Föreläsningar-mapp till WebP
// med rimliga dimensioner och bra kvalitet. Sparar i workshop-public.
//
// Kör: node scripts/convert-darkpatterns-images.js

const path = require("path");
const fs = require("fs");
const sharp = require("sharp");

const SOURCE_ROOT =
  "C:/Koden/Forelasningar/presenter/public/bilder/kritisk-ai-litteracitet/darkpatterns";
const DEST_ROOT =
  "C:/Koden/Ailitt2/public/workshops/kallkritik/darkpatterns";

// Mappning från ChatGPT-filnamn till semantiska namn.
const ILLUSTRATIONS = [
  { src: "ChatGPT Image 20 maj 2026 16_50_48 (1).png", dest: "01-sneaking.webp" },
  { src: "ChatGPT Image 20 maj 2026 16_50_50 (2).png", dest: "02-urgency.webp" },
  { src: "ChatGPT Image 20 maj 2026 16_50_50 (3).png", dest: "03-misdirection.webp" },
  { src: "ChatGPT Image 20 maj 2026 16_50_51 (4).png", dest: "04-social-proof.webp" },
  { src: "ChatGPT Image 20 maj 2026 16_50_51 (5).png", dest: "05-scarcity.webp" },
  { src: "ChatGPT Image 20 maj 2026 16_50_52 (6).png", dest: "06-obstruction.webp" },
  { src: "ChatGPT Image 20 maj 2026 16_50_52 (7).png", dest: "07-forced-action.webp" },
];

const EXERCISE = [
  { src: "ChatGPT Image 20 maj 2026 16_57_01 (1).png", dest: "01-studiehjalpen.webp" },
  { src: "ChatGPT Image 20 maj 2026 16_57_02 (2).png", dest: "02-shopbot.webp" },
  { src: "ChatGPT Image 20 maj 2026 16_57_02 (3).png", dest: "03-streamio.webp" },
  { src: "ChatGPT Image 20 maj 2026 17_01_20 (1).png", dest: "04-pluggkompisen.webp" },
  { src: "ChatGPT Image 20 maj 2026 17_01_20 (2).png", dest: "05-feedbackbot.webp" },
  { src: "ChatGPT Image 20 maj 2026 17_01_21 (3).png", dest: "06-vanbot.webp" },
];

async function ensureDir(p) {
  await fs.promises.mkdir(p, { recursive: true });
}

async function convert(srcPath, destPath, maxWidth) {
  await sharp(srcPath)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(destPath);
  const srcStat = await fs.promises.stat(srcPath);
  const destStat = await fs.promises.stat(destPath);
  const reduction = ((1 - destStat.size / srcStat.size) * 100).toFixed(0);
  console.log(
    `  ${path.basename(destPath)} — ${(srcStat.size / 1024).toFixed(0)} KB → ${(destStat.size / 1024).toFixed(0)} KB (-${reduction}%)`
  );
}

async function main() {
  await ensureDir(path.join(DEST_ROOT, "illustrations"));
  await ensureDir(path.join(DEST_ROOT, "exercise"));

  console.log("Illustrationer (max 1200px bredd):");
  for (const { src, dest } of ILLUSTRATIONS) {
    const srcPath = path.join(SOURCE_ROOT, src);
    const destPath = path.join(DEST_ROOT, "illustrations", dest);
    await convert(srcPath, destPath, 1200);
  }

  console.log("\nÖvningsbilder (max 1000px bredd):");
  for (const { src, dest } of EXERCISE) {
    const srcPath = path.join(SOURCE_ROOT, "Darkpatterns för övning", src);
    const destPath = path.join(DEST_ROOT, "exercise", dest);
    await convert(srcPath, destPath, 1000);
  }

  console.log("\nKlart!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
