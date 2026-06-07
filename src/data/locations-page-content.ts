export const LOCATIONS_VISUAL_STRIP = [
  {
    src: "/images/munyaka-midrand.jpg",
    alt: "Sectional-title and estate maintenance programme in Midrand",
  },
  {
    src: "/images/painting-body-corporate-sandton.jpg",
    alt: "High-rise body corporate painting in Sandton",
  },
  {
    src: "/images/eastlands-benoni.jpg",
    alt: "East Rand commercial and lifestyle estate coatings",
  },
] as const;

export const REGION_VISUAL_STRIPS = {
  central: [
    { src: "/images/the-blyde-pretorria.jpg", alt: "Pretoria East estate façade programme" },
    { src: "/images/painting-commercial-campus.jpg", alt: "Central Gauteng commercial campus repaint" },
    { src: "/images/munyaka-midrand.jpg", alt: "Midrand sectional-title asset maintenance" },
  ],
  "east-rand": [
    { src: "/images/eastlands-benoni.jpg", alt: "East Rand lifestyle estate maintenance" },
    { src: "/images/painting-industrial-preparation.jpg", alt: "Industrial surface preparation on the East Rand" },
    { src: "/images/coatings-hygienic-food-grade-01.jpg", alt: "HACCP flooring in an East Rand production facility" },
  ],
  "west-rand": [
    { src: "/images/greencreek-estate.jpg", alt: "West Rand estate exterior coatings" },
    { src: "/images/waterproofing-flat-roof-02.jpg", alt: "West Rand basement tanking and flat roof waterproofing" },
    { src: "/images/structural-concrete-spalling-repair.jpg", alt: "West Rand structural remediation and damp-related repairs" },
  ],
  "south-rand": [
    { src: "/images/painting-body-corporate-estate.jpg", alt: "South Rand townhouse estate painting" },
    { src: "/images/waterproofing-leaking-balcony-01.jpg", alt: "Balcony waterproofing in Alberton and Glenvista" },
    { src: "/images/painting-body-corporate-qa.jpg", alt: "Body corporate programme with QA documentation" },
  ],
} as const;

export const CITY_HERO_IMAGES: Record<string, { src: string; alt: string }> = {
  midrand: { src: "/images/munyaka-midrand.jpg", alt: "Midrand sectional-title and logistics asset maintenance" },
  sandton: { src: "/images/painting-body-corporate-sandton.jpg", alt: "Sandton tower and sectional-title painting" },
  centurion: { src: "/images/coatings-hygienic-food-grade-02.jpg", alt: "Centurion industrial and HACCP flooring" },
  "pretoria-east": { src: "/images/the-blyde-pretorria.jpg", alt: "Pretoria East estate waterproofing and painting" },
  benoni: { src: "/images/eastlands-benoni.jpg", alt: "Benoni and East Rand asset maintenance" },
  "kempton-park": { src: "/images/painting-industrial-preparation.jpg", alt: "Kempton Park logistics and warehouse coatings" },
  boksburg: { src: "/images/painting-industrial-corrosion.jpg", alt: "Boksburg industrial corrosion control" },
  germiston: { src: "/images/structural-concrete-spalling-repair.jpg", alt: "Germiston concrete spalling repair" },
  isando: { src: "/images/coatings-industrial-epoxy-completed-floor.jpg", alt: "Isando industrial epoxy flooring" },
  alberton: { src: "/images/painting-body-corporate-estate.jpg", alt: "Alberton sectional-title painting" },
  glenvista: { src: "/images/waterproofing-leaking-balcony-02.jpg", alt: "Glenvista balcony waterproofing" },
  roodepoort: { src: "/images/waterproofing-flat-roof-02.jpg", alt: "Roodepoort basement tanking and damp scopes" },
  krugersdorp: { src: "/images/greencreek-estate.jpg", alt: "Krugersdorp rising damp and estate maintenance" },
  "johannesburg-north": { src: "/images/painting-body-corporate-qa.jpg", alt: "Johannesburg North body corporate programme" },
  "serengeti-estate": { src: "/images/greencreek-estate.jpg", alt: "Serengeti Estate exterior maintenance" },
  "ebotse-estate": { src: "/images/painting-body-corporate-estate.jpg", alt: "Ebotse Estate painting programme" },
  "meyersdal-estate": { src: "/images/painting-body-corporate-estate.jpg", alt: "Meyersdal Estate stucco and façade coatings" },
};

export const DEFAULT_CITY_HERO = {
  src: "/images/painting-commercial-campus.jpg",
  alt: "Gauteng commercial and sectional-title asset maintenance",
};
