export type ServicePageImage = {
  src: string;
  alt: string;
};

export const SERVICE_PAGE_IMAGE_COUNT = 9;

const STRUCTURAL_REPAIRS_PATHS = new Set([
  "/structural-repairs",
  "/structural-repairs/concrete-spalling",
]);

const CRACK_INJECTION_PATHS = new Set(["/structural-repairs/crack-injection"]);

const EXPANSION_JOINT_PATHS = new Set(["/structural-repairs/expansion-joint-sealing"]);

const WALL_CLADDING_PATHS = new Set(["/specialized-coatings/wall-cladding"]);

const INDUSTRIAL_EPOXY_FLOORING_PATHS = new Set([
  "/specialized-coatings/industrial-epoxy-flooring",
]);

const CEMCRETE_FLOORS_PATHS = new Set(["/specialized-coatings/cemcrete-floors"]);

const CEMCRETE_EXTERNAL_WALLS_PATHS = new Set([
  "/specialized-coatings/cemcrete-external-walls",
]);

const SPECIALIZED_COATINGS_PATHS = new Set([
  "/specialized-coatings",
  "/specialized-coatings/hygienic-food-grade",
  "/specialized-coatings/marmoran-wall-systems",
  "/specialized-coatings/industrial-corrosion-control",
]);

const WATERPROOFING_PATHS = new Set(["/waterproofing-services"]);

const FLAT_CONCRETE_ROOFS_PATHS = new Set(["/waterproofing/flat-concrete-roofs"]);

const LEAKING_BALCONIES_PATHS = new Set(["/waterproofing/leaking-balconies"]);

const TORCH_ON_LIQUID_PATHS = new Set(["/waterproofing/torch-on-liquid-membranes"]);

const BASEMENT_TANKING_PATHS = new Set(["/waterproofing/basement-tanking"]);

const BODY_CORPORATE_PATHS = new Set(["/painting/body-corporate"]);

const INDUSTRIAL_PAINTING_PATHS = new Set(["/painting/industrial"]);

const COMMERCIAL_PAINTING_PATHS = new Set(["/painting/commercial-painting"]);

const STUCCO_WALL_COATINGS_PATHS = new Set(["/painting/stucco-wall-coatings"]);

const PARKING_GARAGE_PAINTING_PATHS = new Set(["/painting/parking-garage-painting"]);

const PAINTING_SERVICES_PATHS = new Set([
  "/painting-services",
  "/painting/roof-painting",
  "/painting/interior-painting",
  "/painting/internal-walls",
  "/painting/external-walls",
  "/painting/warehouse-painting",
  "/painting/high-volume-commercial-painting",
  "/painting/road-marking",
]);

const DAMP_PROOFING_PATHS = new Set([
  "/damp-proofing-services",
  "/damp-proofing/rising-damp-treatment",
]);

const ACCESS_SOLUTIONS_PATHS = new Set([
  "/access-solutions",
  "/access-solutions/rope-access-painting",
]);

/** Shared nine-slot pool for the structural repairs hub and spokes. */
const STRUCTURAL_REPAIRS_IMAGE_POOL: readonly ServicePageImage[] = [
  {
    src: "/images/structural-concrete-spalling-repair.jpg",
    alt: "Completed concrete spalling repair with structural mortar on a Gauteng façade",
  },
  {
    src: "/images/structural-concrete-spalling-assessment.jpg",
    alt: "Concrete spalling assessment and hammer testing on a Gauteng high-rise",
  },
  {
    src: "/images/structural-crack-injection-injection.jpg",
    alt: "Epoxy crack injection with ports on a Gauteng commercial concrete element",
  },
  {
    src: "/images/structural-crack-injection-qa.jpg",
    alt: "Structural crack injection QA documentation on a Gauteng commercial asset",
  },
  {
    src: "/images/structural-concrete-spalling-handover.jpg",
    alt: "Completed concrete spalling repair with protective anti-carbonation finish",
  },
  {
    src: "/images/structural-crack-injection-assessment.jpg",
    alt: "Structural crack mapping and injection assessment on a Gauteng concrete slab",
  },
  {
    src: "/images/structural-expansion-joint-assessment.jpg",
    alt: "Expansion joint condition assessment on a Gauteng parking or podium slab",
  },
  {
    src: "/images/structural-expansion-joint-installation.jpg",
    alt: "Traffic-rated expansion joint rebuild with sealant and armour detailing",
  },
  {
    src: "/images/structural-expansion-joint-finish.jpg",
    alt: "Completed expansion joint sealing ready for traffic reopening",
  },
];

/** Shared nine-slot pool for the specialized coatings hub and spokes. */
const SPECIALIZED_COATINGS_IMAGE_POOL: readonly ServicePageImage[] = [
  {
    src: "/images/coatings-industrial-epoxy-completed-floor.jpg",
    alt: "Completed industrial epoxy flooring in a Gauteng logistics warehouse",
  },
  {
    src: "/images/coatings-industrial-epoxy-surface-prep.jpg",
    alt: "Diamond grinding and surface preparation for industrial epoxy flooring",
  },
  {
    src: "/images/coatings-industrial-epoxy-resin-application.jpg",
    alt: "Multi-coat epoxy resin flooring application with controlled film build",
  },
  {
    src: "/images/coatings-hygienic-food-grade-02.jpg",
    alt: "Completed hygienic PU-cement floor with coving in a food production area",
  },
  {
    src: "/images/coatings-industrial-corrosion-02.jpg",
    alt: "Completed industrial corrosion protection on pipe bridge steelwork",
  },
  {
    src: "/images/coatings-hygienic-food-grade-01.jpg",
    alt: "Hygienic floor and wall preparation before PU-cement application",
  },
  {
    src: "/images/coatings-industrial-corrosion-01.jpg",
    alt: "Industrial corrosion assessment on steel structures in Gauteng",
  },
  {
    src: "/images/coatings-marmoran-wall-02.jpg",
    alt: "Premium textured wall coating application on a Gauteng façade",
  },
  {
    src: "/images/coatings-marmoran-wall-03.jpg",
    alt: "Completed Marmoran-style decorative wall finish on an estate elevation",
  },
];

/** Dedicated nine-slot pool for the industrial epoxy flooring spoke. */
const INDUSTRIAL_EPOXY_FLOORING_IMAGE_POOL: readonly ServicePageImage[] = [
  {
    src: "/images/coatings-industrial-epoxy-completed-floor.jpg",
    alt: "Completed industrial epoxy flooring in a Gauteng logistics warehouse",
  },
  {
    src: "/images/coatings-industrial-epoxy-surface-prep.jpg",
    alt: "Diamond grinding and surface preparation for industrial epoxy flooring",
  },
  {
    src: "/images/coatings-industrial-epoxy-resin-application.jpg",
    alt: "Multi-coat epoxy resin flooring application with controlled film build",
  },
  {
    src: "/images/coatings-hygienic-food-grade-02.jpg",
    alt: "Completed hygienic PU-cement floor with coving in a food production area",
  },
  {
    src: "/images/coatings-industrial-epoxy-04.jpg",
    alt: "Completed cold-room epoxy or polyurethane-cement floor with coved wall base",
  },
  {
    src: "/images/coatings-hygienic-food-grade-01.jpg",
    alt: "Hygienic floor and wall preparation before PU-cement application",
  },
  {
    src: "/images/coatings-industrial-epoxy-05.jpg",
    alt: "Completed mid-grey epoxy floor in a small Gauteng industrial unit",
  },
  {
    src: "/images/coatings-industrial-epoxy-06.jpg",
    alt: "Completed epoxy lining in a small chemical storage bund",
  },
  {
    src: "/images/coatings-industrial-epoxy-07.jpg",
    alt: "Completed epoxy floor with line marking in a small fulfilment unit",
  },
];

/** Dedicated nine-slot pool for the Cemcrete floors spoke. */
const CEMCRETE_FLOORS_IMAGE_POOL: readonly ServicePageImage[] = [
  {
    src: "/images/coatings-cemcrete-floors-01.jpg",
    alt: "Completed decorative cement floor in a Gauteng open-plan living area",
  },
  {
    src: "/images/coatings-cemcrete-floors-02.jpg",
    alt: "Finished seamless cement floor in a small retail showroom",
  },
  {
    src: "/images/coatings-cemcrete-floors-03.jpg",
    alt: "Close-up of a completed decorative cement floor with mineral texture",
  },
  {
    src: "/images/coatings-cemcrete-floors-04.jpg",
    alt: "Finished cement floor in a residential hallway",
  },
  {
    src: "/images/coatings-cemcrete-floors-05.jpg",
    alt: "Completed decorative cement floor in a small furniture showroom",
  },
  {
    src: "/images/coatings-cemcrete-floors-06.jpg",
    alt: "Seamless cement floor between kitchen and living space in a modest home",
  },
  {
    src: "/images/coatings-cemcrete-floors-07.jpg",
    alt: "Completed sealed cement floor in a small en-suite bathroom",
  },
  {
    src: "/images/coatings-cemcrete-floors-08.jpg",
    alt: "Finished cement floor in a suburban room renovation handover",
  },
  {
    src: "/images/coatings-cemcrete-floors-09.jpg",
    alt: "Completed decorative cement floor in a small café or guesthouse entrance",
  },
];

/** Dedicated nine-slot pool for the Cemcrete external walls spoke. */
const CEMCRETE_EXTERNAL_WALLS_IMAGE_POOL: readonly ServicePageImage[] = [
  {
    src: "/images/coatings-cemcrete-external-walls-01.jpg",
    alt: "Completed decorative cement finish on a single-storey Gauteng home",
  },
  {
    src: "/images/coatings-cemcrete-external-walls-02.jpg",
    alt: "Finished decorative cement finish on a townhouse boundary wall",
  },
  {
    src: "/images/coatings-cemcrete-external-walls-03.jpg",
    alt: "Close-up of a completed exterior cementitious wall finish at a window reveal",
  },
  {
    src: "/images/coatings-cemcrete-external-walls-04.jpg",
    alt: "Finished decorative cement garden wall beside a small patio",
  },
  {
    src: "/images/coatings-cemcrete-external-walls-05.jpg",
    alt: "Completed boundary wall refresh at a sectional-title entrance",
  },
  {
    src: "/images/coatings-cemcrete-external-walls-06.jpg",
    alt: "Finished external corner detail on a cement-finished wall",
  },
  {
    src: "/images/coatings-cemcrete-external-walls-07.jpg",
    alt: "Completed parapet cap and cement finish on a small flat-roof building",
  },
  {
    src: "/images/coatings-cemcrete-external-walls-08.jpg",
    alt: "Finished decorative cement feature wall on a normal Gauteng home",
  },
  {
    src: "/images/coatings-cemcrete-external-walls-09.jpg",
    alt: "Completed cementitious finish on a small commercial street front",
  },
];

/** Dedicated nine-slot pool for the wall cladding spoke. */
const WALL_CLADDING_IMAGE_POOL: readonly ServicePageImage[] = [
  {
    src: "/images/coatings-wall-cladding-01.jpg",
    alt: "Completed external wall cladding on a Gauteng office block with composite panels",
  },
  {
    src: "/images/coatings-wall-cladding-02.jpg",
    alt: "Finished fibre-cement cladding on a Gauteng townhouse gable end",
  },
  {
    src: "/images/coatings-wall-cladding-03.jpg",
    alt: "Completed cladding on a simple estate entrance feature wall in warm grey",
  },
  {
    src: "/images/coatings-wall-cladding-04.jpg",
    alt: "Completed cladding on a single-storey commercial unit in a Gauteng industrial park",
  },
  {
    src: "/images/coatings-wall-cladding-05.jpg",
    alt: "Finished cladding junction at a window reveal with aluminium trim",
  },
  {
    src: "/images/coatings-wall-cladding-06.jpg",
    alt: "Completed boundary wall cladding with cap coping at a Gauteng estate",
  },
  {
    src: "/images/coatings-wall-cladding-07.jpg",
    alt: "Finished interior feature wall cladding in a commercial reception area",
  },
  {
    src: "/images/coatings-wall-cladding-08.jpg",
    alt: "Completed mixed elevation with off-white cladding on a Gauteng sectional-title building",
  },
  {
    src: "/images/coatings-wall-cladding-09.jpg",
    alt: "Completed cladding elevation on a Gauteng school or community building",
  },
];

/** Dedicated nine-slot pool for the crack injection spoke. */
const CRACK_INJECTION_IMAGE_POOL: readonly ServicePageImage[] = [
  {
    src: "/images/structural-crack-injection-01.jpg",
    alt: "Repaired crack injection patch on a modest Gauteng sectional-title building",
  },
  {
    src: "/images/structural-crack-injection-02.jpg",
    alt: "Crack mapping with chalk marks on a concrete garage column",
  },
  {
    src: "/images/structural-crack-injection-03.jpg",
    alt: "Injection ports along a single vertical crack on a boundary wall",
  },
  {
    src: "/images/structural-crack-injection-04.jpg",
    alt: "Completed injected crack on a balcony soffit with ports filled flush",
  },
  {
    src: "/images/structural-crack-injection-05.jpg",
    alt: "Moisture mark and crack at a modest apartment balcony slab edge",
  },
  {
    src: "/images/structural-crack-injection-06.jpg",
    alt: "Close-up of injection ports on a short workshop floor crack",
  },
  {
    src: "/images/structural-crack-injection-07.jpg",
    alt: "Injection resin and site documentation in a small plant room with capped ports",
  },
  {
    src: "/images/structural-crack-injection-08.jpg",
    alt: "Injection ports along a crack at a single basement parking wall pillar base",
  },
  {
    src: "/images/structural-crack-injection-09.jpg",
    alt: "Completed crack injection on a double garage slab at a Gauteng house",
  },
];

/** Dedicated nine-slot pool for the expansion joint sealing spoke. */
const EXPANSION_JOINT_IMAGE_POOL: readonly ServicePageImage[] = [
  {
    src: "/images/structural-expansion-joint-01.jpg",
    alt: "Renewed expansion joint line in a small basement parking area",
  },
  {
    src: "/images/structural-expansion-joint-02.jpg",
    alt: "Worn expansion joint sealant with light arris wear before repair",
  },
  {
    src: "/images/structural-expansion-joint-03.jpg",
    alt: "Fresh saw-cut expansion joint with sealant installation in a small warehouse aisle",
  },
  {
    src: "/images/structural-expansion-joint-04.jpg",
    alt: "Completed expansion joint with flush elastomeric sealant on a parking slab",
  },
  {
    src: "/images/structural-expansion-joint-05.jpg",
    alt: "Renewed expansion joint at a sectional-title podium walkway edge",
  },
  {
    src: "/images/structural-expansion-joint-06.jpg",
    alt: "Aluminium armour angle and sealant bead at a small loading bay joint",
  },
  {
    src: "/images/structural-expansion-joint-07.jpg",
    alt: "Old worn sealant beside a newly renewed expansion joint on the same slab",
  },
  {
    src: "/images/structural-expansion-joint-08.jpg",
    alt: "Completed expansion joint across a townhouse complex driveway entrance",
  },
  {
    src: "/images/structural-expansion-joint-09.jpg",
    alt: "Wide view of renewed expansion joints across one lane of a small basement parking area",
  },
];

/** Dedicated nine-slot pool for the flat concrete roofs spoke. */
const FLAT_CONCRETE_ROOFS_IMAGE_POOL: readonly ServicePageImage[] = [
  {
    src: "/images/waterproofing-flat-roof-02.jpg",
    alt: "Completed liquid-applied waterproofing membrane on a Gauteng flat roof",
  },
  {
    src: "/images/waterproofing-flat-roof-01.jpg",
    alt: "Completed torch-on waterproofing membrane on a flat concrete roof in Gauteng",
  },
  {
    src: "/images/waterproofing-flat-roof-04.jpg",
    alt: "Completed flat concrete roof waterproofing on a modest Gauteng building",
  },
  {
    src: "/images/waterproofing-flat-roof-05.jpg",
    alt: "Finished flat roof parapet kerb membrane detail",
  },
  {
    src: "/images/waterproofing-flat-roof-06.jpg",
    alt: "Completed liquid-applied flat roof renewal on a small commercial unit",
  },
  {
    src: "/images/waterproofing-flat-roof-07.jpg",
    alt: "Finished roof outlet and membrane dress-down detail",
  },
  {
    src: "/images/waterproofing-flat-roof-08.jpg",
    alt: "Completed waterproofing around a small roof plant penetration",
  },
  {
    src: "/images/waterproofing-flat-roof-09.jpg",
    alt: "Finished flat roof with flashed AC bases on a small office strip",
  },
  {
    src: "/images/waterproofing-flat-roof-10.jpg",
    alt: "Completed flat roof waterproofing handover on a sectional-title block",
  },
];

/** Dedicated nine-slot pool for the leaking balconies spoke. */
const LEAKING_BALCONIES_IMAGE_POOL: readonly ServicePageImage[] = [
  {
    src: "/images/waterproofing-leaking-balcony-04.jpg",
    alt: "Completed leaking balcony repair on a modest Gauteng sectional-title block",
  },
  {
    src: "/images/waterproofing-leaking-balcony-05.jpg",
    alt: "Finished tiled balcony after waterproofing renewal with neat threshold detail",
  },
  {
    src: "/images/waterproofing-flat-roof-03.jpg",
    alt: "Completed balcony waterproofing remediation with tile reinstatement in Gauteng",
  },
  {
    src: "/images/waterproofing-leaking-balcony-01.jpg",
    alt: "Balcony slab edge assessment for water ingress on a sectional-title unit",
  },
  {
    src: "/images/waterproofing-leaking-balcony-02.jpg",
    alt: "Balcony threshold breakout and membrane renewal at a leaking slab edge",
  },
  {
    src: "/images/waterproofing-leaking-balcony-03.jpg",
    alt: "Completed leaking balcony waterproofing with documented handover",
  },
  {
    src: "/images/waterproofing-leaking-balcony-06.jpg",
    alt: "Finished balcony slab edge membrane and tile trim detail",
  },
  {
    src: "/images/waterproofing-leaking-balcony-07.jpg",
    alt: "Completed estate townhouse balcony with sealed balustrade junction",
  },
  {
    src: "/images/waterproofing-leaking-balcony-08.jpg",
    alt: "Finished waterproofed patio at a small restaurant or café",
  },
];

/** Dedicated nine-slot pool for the torch-on and liquid membranes spoke. */
const TORCH_ON_LIQUID_IMAGE_POOL: readonly ServicePageImage[] = [
  {
    src: "/images/waterproofing-torch-on-liquid-01.jpg",
    alt: "Completed torch-on membrane on a small flat roof without topcoat",
  },
  {
    src: "/images/waterproofing-torch-on-liquid-02.jpg",
    alt: "Finished grey liquid-applied membrane on a modest flat roof section",
  },
  {
    src: "/images/waterproofing-torch-on-liquid-03.jpg",
    alt: "Close-up of a completed torch-on membrane lap joint",
  },
  {
    src: "/images/waterproofing-torch-on-liquid-04.jpg",
    alt: "Finished membrane dress-down at a roof outlet on a small flat slab",
  },
  {
    src: "/images/waterproofing-torch-on-liquid-05.jpg",
    alt: "Completed liquid membrane renewal on a small flat roof wing",
  },
  {
    src: "/images/waterproofing-torch-on-liquid-06.jpg",
    alt: "Finished torch-on membrane upturn at a low parapet wall",
  },
  {
    src: "/images/waterproofing-torch-on-liquid-07.jpg",
    alt: "Completed liquid membrane sealed around a small roof penetration",
  },
  {
    src: "/images/waterproofing-torch-on-liquid-08.jpg",
    alt: "Finished cold-applied liquid membrane on a small retail podium roof",
  },
  {
    src: "/images/waterproofing-torch-on-liquid-09.jpg",
    alt: "Completed hybrid torch-on and liquid membrane roof on a small office unit",
  },
];

/** Dedicated nine-slot pool for the basement tanking spoke. */
const BASEMENT_TANKING_IMAGE_POOL: readonly ServicePageImage[] = [
  {
    src: "/images/waterproofing-basement-tanking-01.jpg",
    alt: "Completed basement car park level with dry sealed walls and floor",
  },
  {
    src: "/images/waterproofing-basement-tanking-02.jpg",
    alt: "Finished cementitious tanking coating on a basement parking wall",
  },
  {
    src: "/images/waterproofing-basement-tanking-03.jpg",
    alt: "Completed construction joint sealing in a basement car park wall",
  },
  {
    src: "/images/waterproofing-basement-tanking-04.jpg",
    alt: "Finished waterproofing at a basement parking column base",
  },
  {
    src: "/images/waterproofing-basement-tanking-05.jpg",
    alt: "Completed negative-side tanking in a small office basement car park corner",
  },
  {
    src: "/images/waterproofing-basement-tanking-06.jpg",
    alt: "Finished sealed lift pit or sump corner in a basement parking level",
  },
  {
    src: "/images/waterproofing-basement-tanking-07.jpg",
    alt: "Completed tanking on a wall beside a basement parking ramp",
  },
  {
    src: "/images/waterproofing-basement-tanking-08.jpg",
    alt: "Finished basement parking under a normal townhouse or apartment block",
  },
  {
    src: "/images/waterproofing-basement-tanking-09.jpg",
    alt: "Wide completed basement car park waterproofing handover with dry bays",
  },
];

/** Shared nine-slot pool for the waterproofing hub and spokes. */
const WATERPROOFING_IMAGE_POOL: readonly ServicePageImage[] = [
  {
    src: "/images/waterproofing-flat-roof-02.jpg",
    alt: "Completed liquid-applied waterproofing membrane on a Gauteng flat roof podium",
  },
  {
    src: "/images/waterproofing-flat-roof-01.jpg",
    alt: "Completed torch-on waterproofing membrane on a flat concrete roof in Gauteng",
  },
  {
    src: "/images/waterproofing-flat-roof-03.jpg",
    alt: "Completed balcony waterproofing remediation with tile reinstatement in Gauteng",
  },
  {
    src: "/images/waterproofing-leaking-balcony-01.jpg",
    alt: "Leaking balcony assessment and moisture tracing on a sectional-title unit",
  },
  {
    src: "/images/waterproofing-leaking-balcony-02.jpg",
    alt: "Balcony threshold breakout and membrane renewal at a leaking slab edge",
  },
  {
    src: "/images/waterproofing-leaking-balcony-03.jpg",
    alt: "Completed leaking balcony waterproofing with documented handover",
  },
  {
    src: "/images/waterproofing-basement-tanking-01.jpg",
    alt: "Completed basement car park level with dry sealed walls and floor",
  },
  {
    src: "/images/waterproofing-basement-tanking-02.jpg",
    alt: "Finished cementitious tanking coating on a basement parking wall",
  },
  {
    src: "/images/waterproofing-basement-tanking-03.jpg",
    alt: "Completed construction joint sealing in a basement car park wall",
  },
];

/** Dedicated nine-slot pool for the body corporate painting spoke. */
const BODY_CORPORATE_IMAGE_POOL: readonly ServicePageImage[] = [
  {
    src: "/images/painting-body-corporate-01.jpg",
    alt: "Completed exterior repaint of a modest Gauteng sectional-title apartment block",
  },
  {
    src: "/images/painting-body-corporate-02.jpg",
    alt: "Finished double-storey townhouse units in a small Centurion body corporate complex",
  },
  {
    src: "/images/painting-body-corporate-estate.jpg",
    alt: "Townhouse estate exterior painting and balcony edge repairs in Centurion",
  },
  {
    src: "/images/painting-body-corporate-03.jpg",
    alt: "Completed white trim and face-brick refresh on a small sectional-title complex in Gauteng",
  },
  {
    src: "/images/painting-body-corporate-04.jpg",
    alt: "Completed double-storey body corporate block after full exterior repaint handover",
  },
  {
    src: "/images/painting-body-corporate-qa.jpg",
    alt: "Body corporate painting programme with QA documentation at a Gauteng complex",
  },
  {
    src: "/images/painting-commercial-retail.jpg",
    alt: "Retail commercial painting completed during night shifts in Gauteng",
  },
  {
    src: "/images/painting-body-corporate-06.jpg",
    alt: "Completed common-property carport and stairwell exterior painting at a Gauteng sectional-title complex",
  },
  {
    src: "/images/painting-body-corporate-05.jpg",
    alt: "Completed townhouse estate exterior painting along paved driveways in Gauteng",
  },
];

/** Dedicated nine-slot pool for the industrial painting spoke. */
const INDUSTRIAL_PAINTING_IMAGE_POOL: readonly ServicePageImage[] = [
  {
    src: "/images/painting-industrial-01.jpg",
    alt: "Completed protective exterior coatings on a small Gauteng light industrial warehouse",
  },
  {
    src: "/images/painting-industrial-02.jpg",
    alt: "Completed interior repaint of a small Gauteng production hall after shutdown handover",
  },
  {
    src: "/images/painting-industrial-03.jpg",
    alt: "Completed protective coating on warehouse portal frame steel in Gauteng",
  },
  {
    src: "/images/painting-industrial-04.jpg",
    alt: "Completed corrosion control coatings on the lower section of a small industrial silo in Gauteng",
  },
  {
    src: "/images/painting-industrial-05.jpg",
    alt: "Completed logistics hall interior repaint with refreshed walls and columns in Isando",
  },
  {
    src: "/images/painting-industrial-06.jpg",
    alt: "Completed safety floor demarcation and wall coatings in a West Rand manufacturing unit",
  },
  {
    src: "/images/painting-industrial-07.jpg",
    alt: "Completed protective coating on a small chemical plant pipe rack in Gauteng",
  },
  {
    src: "/images/painting-industrial-08.jpg",
    alt: "Completed low-odour interior wall repaint in a small Gauteng food production washdown area",
  },
  {
    src: "/images/painting-industrial-09.jpg",
    alt: "Completed workshop interior and steel coating handover at a Gauteng assembly plant",
  },
];

/** Dedicated nine-slot pool for the commercial & healthcare painting spoke. */
const COMMERCIAL_PAINTING_IMAGE_POOL: readonly ServicePageImage[] = [
  {
    src: "/images/painting-commercial-01.jpg",
    alt: "Completed wall coatings and seamless resin flooring in a new empty hospital corridor in Gauteng",
  },
  {
    src: "/images/painting-commercial-02.jpg",
    alt: "Completed antimicrobial wall paint and resin floor in an empty new hospital patient room",
  },
  {
    src: "/images/painting-commercial-03.jpg",
    alt: "Completed hygienic wall and floor coatings in an empty new operating theatre in Gauteng",
  },
  {
    src: "/images/painting-commercial-04.jpg",
    alt: "Completed paint and resin floor handover in an empty hospital storage room in Gauteng",
  },
  {
    src: "/images/painting-commercial-05.jpg",
    alt: "Completed ward hallway with antimicrobial wall coatings and seamless flooring in a new Gauteng hospital",
  },
  {
    src: "/images/painting-commercial-06.jpg",
    alt: "Completed hygienic coatings in an empty hospital sluice or prep room with resin floor in Gauteng",
  },
  {
    src: "/images/painting-commercial-07.jpg",
    alt: "Close view of completed hospital wall paint and resin floor coving junction in Gauteng",
  },
  {
    src: "/images/painting-commercial-08.jpg",
    alt: "Completed low-VOC wall and floor coatings in an empty hospital consultation room in Gauteng",
  },
  {
    src: "/images/painting-commercial-09.jpg",
    alt: "Completed empty hospital wing corridor intersection with resin floors and wall coatings in Gauteng",
  },
];

/** Dedicated nine-slot pool for the stucco & wall coatings spoke. */
const STUCCO_WALL_COATINGS_IMAGE_POOL: readonly ServicePageImage[] = [
  {
    src: "/images/painting-stucco-01.jpg",
    alt: "Completed warm sand interior stucco feature wall in a Gauteng living room",
  },
  {
    src: "/images/painting-stucco-02.jpg",
    alt: "Completed soft greige interior stucco in an open-plan dining and living area",
  },
  {
    src: "/images/painting-stucco-03.jpg",
    alt: "Completed warm off-white interior stucco walls in a residential entrance foyer",
  },
  {
    src: "/images/painting-stucco-04.jpg",
    alt: "Completed warm sand interior stucco accent wall in a lounge seating area",
  },
  {
    src: "/images/painting-stucco-05.jpg",
    alt: "Completed soft greige interior stucco wall in a formal dining room in Gauteng",
  },
  {
    src: "/images/painting-stucco-06.jpg",
    alt: "Completed warm off-white interior stucco media wall in a living room",
  },
  {
    src: "/images/painting-stucco-07.jpg",
    alt: "Completed warm sand interior stucco in a foyer opening into the living room",
  },
  {
    src: "/images/painting-stucco-08.jpg",
    alt: "Completed soft greige interior stucco in a styled living or dining space in Gauteng",
  },
  {
    src: "/images/painting-stucco-09.jpg",
    alt: "Completed warm off-white interior stucco on a lounge corner wall in a Gauteng home",
  },
];

/** Dedicated nine-slot pool for the parking garage painting spoke. */
const PARKING_GARAGE_PAINTING_IMAGE_POOL: readonly ServicePageImage[] = [
  {
    src: "/images/painting-parking-garage-01.jpg",
    alt: "Completed light-reflective wall and deck coatings in a sectional-title basement parking level in Gauteng",
  },
  {
    src: "/images/painting-parking-garage-02.jpg",
    alt: "Close-up of completed traffic-rated deck coating on a Gauteng parking slab",
  },
  {
    src: "/images/painting-parking-garage-03.jpg",
    alt: "Completed light-reflective column and wall coatings in a residential basement car park",
  },
  {
    src: "/images/painting-parking-garage-04.jpg",
    alt: "Close-up of completed column base and deck junction in a Gauteng parking garage",
  },
  {
    src: "/images/painting-parking-garage-05.jpg",
    alt: "Completed deck and wall coatings in a small neighbourhood shopping centre parking garage in Gauteng",
  },
  {
    src: "/images/painting-parking-garage-06.jpg",
    alt: "Close-up of a completed expansion joint and deck coating line in a parking structure",
  },
  {
    src: "/images/painting-parking-garage-07.jpg",
    alt: "Close-up of completed soffit and column coating in a basement parking level",
  },
  {
    src: "/images/painting-parking-garage-08.jpg",
    alt: "Completed parking deck coatings on a larger shopping centre level in Gauteng",
  },
  {
    src: "/images/painting-parking-garage-09.jpg",
    alt: "Completed ramp and wall coatings at a Gauteng residential or retail parking structure",
  },
];

/** Shared nine-slot pool for the painting services hub and spokes. */
const PAINTING_SERVICES_IMAGE_POOL: readonly ServicePageImage[] = [
  {
    src: "/images/painting-industrial-coatings.jpg",
    alt: "Completed industrial protective coating on steel structures at a Gauteng plant",
  },
  {
    src: "/images/painting-body-corporate-sandton.jpg",
    alt: "Phased exterior repainting of a Sandton sectional-title tower",
  },
  {
    src: "/images/painting-body-corporate-estate.jpg",
    alt: "Townhouse estate exterior painting in Gauteng",
  },
  {
    src: "/images/painting-industrial-corrosion.jpg",
    alt: "Industrial corrosion control coatings on silos and plant exteriors",
  },
  {
    src: "/images/painting-industrial-preparation.jpg",
    alt: "Industrial surface preparation ahead of protective coating application",
  },
  {
    src: "/images/painting-body-corporate-qa.jpg",
    alt: "Body corporate painting programme with QA documentation",
  },
  {
    src: "/images/painting-commercial-healthcare.jpg",
    alt: "Healthcare interior painting with containment and low-VOC coatings",
  },
  {
    src: "/images/painting-commercial-campus.jpg",
    alt: "Corporate campus interior repaint with phased weekend programmes",
  },
  {
    src: "/images/painting-commercial-retail.jpg",
    alt: "Retail commercial painting completed during night shifts",
  },
];

/** Shared nine-slot pool for the damp proofing hub and rising-damp spoke. */
const DAMP_PROOFING_IMAGE_POOL: readonly ServicePageImage[] = [
  {
    src: "/images/damp-rising-damp-injection.jpg",
    alt: "Chemical damp-proof course injection at bed joint level in Gauteng masonry",
  },
  {
    src: "/images/damp-rising-damp-diagnosis.jpg",
    alt: "Rising damp diagnosis and moisture profiling on a Gauteng interior wall",
  },
  {
    src: "/images/damp-rising-damp-replaster.jpg",
    alt: "Salt-retardant replastering after rising damp remediation",
  },
  {
    src: "/images/waterproofing-basement-tanking-01.jpg",
    alt: "Below-ground moisture assessment related to damp and tanking programmes",
  },
  {
    src: "/images/waterproofing-basement-tanking-02.jpg",
    alt: "Cementitious tanking application on a below-ground structure",
  },
  {
    src: "/images/waterproofing-basement-tanking-03.jpg",
    alt: "Completed basement tanking handover with protection screed",
  },
  {
    src: "/images/waterproofing-leaking-balcony-01.jpg",
    alt: "Moisture assessment at a slab threshold related to ingress diagnostics",
  },
  {
    src: "/images/waterproofing-leaking-balcony-02.jpg",
    alt: "Threshold breakout and membrane renewal at a leaking slab edge",
  },
  {
    src: "/images/waterproofing-leaking-balcony-03.jpg",
    alt: "Completed waterproofing handover after moisture remediation",
  },
];

/** Shared nine-slot pool for the access solutions hub and rope-access spoke. */
const ACCESS_SOLUTIONS_IMAGE_POOL: readonly ServicePageImage[] = [
  {
    src: "/images/access-solutions-method.jpg",
    alt: "IRATA rope access rigging on a Gauteng high-rise façade",
  },
  {
    src: "/images/access-solutions-compliance.jpg",
    alt: "Rope access safety equipment and compliance documentation on site",
  },
  {
    src: "/images/access-solutions-coordination.jpg",
    alt: "Coordinated rope access and remedial staging on a multi-storey structure",
  },
  {
    src: "/images/painting-body-corporate-sandton.jpg",
    alt: "High-rise sectional-title tower suited to rope access programmes",
  },
  {
    src: "/images/structural-concrete-spalling-assessment.jpg",
    alt: "Façade spalling assessment often sequenced with rope access",
  },
  {
    src: "/images/structural-concrete-spalling-repair.jpg",
    alt: "Completed spalling repair on an elevated façade element",
  },
  {
    src: "/images/painting-body-corporate-qa.jpg",
    alt: "High-access painting programme with independent QA documentation",
  },
  {
    src: "/images/structural-crack-injection-injection.jpg",
    alt: "Structural crack injection on concrete elements accessed at height",
  },
  {
    src: "/images/waterproofing-flat-roof-01.jpg",
    alt: "Parapet and flat roof detailing accessed via rope or MEWP programmes",
  },
];

const SERVICE_IMAGE_PLACEHOLDERS: readonly ServicePageImage[] = [
  { src: "/images/placeholders/service-image-01.svg", alt: "Placeholder service image slot 1" },
  { src: "/images/placeholders/service-image-02.svg", alt: "Placeholder service image slot 2" },
  { src: "/images/placeholders/service-image-03.svg", alt: "Placeholder service image slot 3" },
  { src: "/images/placeholders/service-image-04.svg", alt: "Placeholder service image slot 4" },
  { src: "/images/placeholders/service-image-05.svg", alt: "Placeholder service image slot 5" },
  { src: "/images/placeholders/service-image-06.svg", alt: "Placeholder service image slot 6" },
  { src: "/images/placeholders/service-image-07.svg", alt: "Placeholder service image slot 7" },
  { src: "/images/placeholders/service-image-08.svg", alt: "Placeholder service image slot 8" },
  { src: "/images/placeholders/service-image-09.svg", alt: "Placeholder service image slot 9" },
];

function serviceLabelFromPath(path: string): string {
  const slug = path.split("/").filter(Boolean).pop() ?? "service";
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function dedupeImages(images: readonly ServicePageImage[]): ServicePageImage[] {
  const seen = new Set<string>();
  const unique: ServicePageImage[] = [];

  for (const image of images) {
    if (seen.has(image.src)) continue;
    seen.add(image.src);
    unique.push(image);
  }

  return unique;
}

export function getServicePageImages(
  path: string,
  seedImages: readonly ServicePageImage[] = [],
): ServicePageImage[] {
  if (CRACK_INJECTION_PATHS.has(path)) {
    return [...CRACK_INJECTION_IMAGE_POOL];
  }

  if (EXPANSION_JOINT_PATHS.has(path)) {
    return [...EXPANSION_JOINT_IMAGE_POOL];
  }

  if (STRUCTURAL_REPAIRS_PATHS.has(path)) {
    return [...STRUCTURAL_REPAIRS_IMAGE_POOL];
  }

  if (WALL_CLADDING_PATHS.has(path)) {
    return [...WALL_CLADDING_IMAGE_POOL];
  }

  if (INDUSTRIAL_EPOXY_FLOORING_PATHS.has(path)) {
    return [...INDUSTRIAL_EPOXY_FLOORING_IMAGE_POOL];
  }

  if (CEMCRETE_FLOORS_PATHS.has(path)) {
    return [...CEMCRETE_FLOORS_IMAGE_POOL];
  }

  if (CEMCRETE_EXTERNAL_WALLS_PATHS.has(path)) {
    return [...CEMCRETE_EXTERNAL_WALLS_IMAGE_POOL];
  }

  if (SPECIALIZED_COATINGS_PATHS.has(path)) {
    return [...SPECIALIZED_COATINGS_IMAGE_POOL];
  }

  if (FLAT_CONCRETE_ROOFS_PATHS.has(path)) {
    return [...FLAT_CONCRETE_ROOFS_IMAGE_POOL];
  }

  if (LEAKING_BALCONIES_PATHS.has(path)) {
    return [...LEAKING_BALCONIES_IMAGE_POOL];
  }

  if (TORCH_ON_LIQUID_PATHS.has(path)) {
    return [...TORCH_ON_LIQUID_IMAGE_POOL];
  }

  if (BASEMENT_TANKING_PATHS.has(path)) {
    return [...BASEMENT_TANKING_IMAGE_POOL];
  }

  if (BODY_CORPORATE_PATHS.has(path)) {
    return [...BODY_CORPORATE_IMAGE_POOL];
  }

  if (INDUSTRIAL_PAINTING_PATHS.has(path)) {
    return [...INDUSTRIAL_PAINTING_IMAGE_POOL];
  }

  if (COMMERCIAL_PAINTING_PATHS.has(path)) {
    return [...COMMERCIAL_PAINTING_IMAGE_POOL];
  }

  if (STUCCO_WALL_COATINGS_PATHS.has(path)) {
    return [...STUCCO_WALL_COATINGS_IMAGE_POOL];
  }

  if (PARKING_GARAGE_PAINTING_PATHS.has(path)) {
    return [...PARKING_GARAGE_PAINTING_IMAGE_POOL];
  }

  if (WATERPROOFING_PATHS.has(path)) {
    return [...WATERPROOFING_IMAGE_POOL];
  }

  if (PAINTING_SERVICES_PATHS.has(path)) {
    return [...PAINTING_SERVICES_IMAGE_POOL];
  }

  if (DAMP_PROOFING_PATHS.has(path)) {
    return [...DAMP_PROOFING_IMAGE_POOL];
  }

  if (ACCESS_SOLUTIONS_PATHS.has(path)) {
    return [...ACCESS_SOLUTIONS_IMAGE_POOL];
  }

  const serviceLabel = serviceLabelFromPath(path);
  const placeholders = SERVICE_IMAGE_PLACEHOLDERS.map((image, index) => ({
    src: image.src,
    alt: `${serviceLabel} project image ${index + 1}`,
  }));

  const merged = dedupeImages([...seedImages, ...placeholders]);

  while (merged.length < SERVICE_PAGE_IMAGE_COUNT) {
    const filler = placeholders[merged.length % placeholders.length];
    merged.push({
      ...filler,
      alt: `${serviceLabel} project image ${merged.length + 1}`,
    });
  }

  return merged.slice(0, SERVICE_PAGE_IMAGE_COUNT);
}
