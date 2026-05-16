import fs from "fs";

const files = [
  "src/app/structural-repairs/crack-injection/page.tsx",
  "src/app/waterproofing/leaking-balconies/page.tsx",
  "src/app/structural-repairs/concrete-spalling/page.tsx",
  "src/app/painting/body-corporate/page.tsx",
  "src/app/painting/roof-painting/page.tsx",
  "src/app/painting/industrial/page.tsx",
  "src/app/waterproofing/torch-on-liquid-membranes/page.tsx",
  "src/app/damp-proofing/rising-damp-treatment/page.tsx",
  "src/app/waterproofing/flat-concrete-roofs/page.tsx",
  "src/app/painting/stucco-wall-coatings/page.tsx",
  "src/app/specialized-coatings/marmoran-wall-systems/page.tsx",
  "src/app/access-solutions/rope-access-painting/page.tsx",
  "src/app/structural-repairs/expansion-joint-sealing/page.tsx",
  "src/app/specialized-coatings/hygienic-food-grade/page.tsx",
  "src/app/specialized-coatings/industrial-epoxy-flooring/page.tsx",
  "src/app/waterproofing/basement-tanking/page.tsx",
  "src/app/specialized-coatings/industrial-corrosion-control/page.tsx",
];

for (const f of files) {
  const c = fs.readFileSync(f, "utf8");
  const id = c.match(/getServiceSpoke\("([^"]+)"\)/)[1];
  const fn = c.match(/export default function (\w+)/)[1];
  const out = `import { buildPageMetadata } from "@/lib/metadata";
import { ServiceDeepPage } from "@/components/service-deep-page";
import { getServiceSpoke } from "@/data/service-deep-registry";
import type { ServiceSpokeId } from "@/lib/service-deep-types";

const spokeId: ServiceSpokeId = "${id}";

export const metadata = buildPageMetadata(getServiceSpoke(spokeId).meta);

export default function ${fn}() {
  return <ServiceDeepPage spokeId={spokeId} />;
}
`;
  fs.writeFileSync(f, out);
}

console.log("updated", files.length, "pages");
