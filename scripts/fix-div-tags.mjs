import fs from "fs";

const files = [
  "src/components/layout/header.tsx",
  "src/components/gallery/gallery-grid.tsx",
];

for (const rel of files) {
  const p = new URL(`../${rel}`, import.meta.url);
  let s = fs.readFileSync(p, "utf8");
  s = s.replaceAll("<motion ", "<div ");
  s = s.replaceAll("</motion>", "</div>");
  fs.writeFileSync(p, s);
  console.log("fixed", rel);
}
