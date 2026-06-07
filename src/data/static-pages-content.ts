export const SOLUTION_PAGE_IMAGES = {
  homeowners: {
    hero: {
      src: "/images/painting-body-corporate-estate.jpg",
      alt: "Premium residential and estate exterior maintenance in Gauteng",
    },
    triptych: [
      { src: "/images/waterproofing-leaking-balcony-01.jpg", alt: "Balcony waterproofing for Gauteng homes" },
      { src: "/images/painting-commercial-healthcare.jpg", alt: "Low-VOC interior painting in occupied homes" },
      { src: "/images/waterproofing-flat-roof-02.jpg", alt: "Flat roof membrane renewal on residential stock" },
    ],
    editorial: {
      src: "/images/greencreek-estate.jpg",
      alt: "Estate and townhouse exterior coatings in Gauteng",
    },
  },
  "body-corporates": {
    hero: {
      src: "/images/painting-body-corporate-sandton.jpg",
      alt: "Sectional-title tower painting with rope access in Sandton",
    },
    triptych: [
      { src: "/images/painting-body-corporate-qa.jpg", alt: "Body corporate programme with QA documentation" },
      { src: "/images/structural-concrete-spalling-repair.jpg", alt: "Façade spalling repair before repainting" },
      { src: "/images/waterproofing-leaking-balcony-02.jpg", alt: "Balcony and podium waterproofing for sectional-title schemes" },
    ],
    editorial: {
      src: "/images/the-blyde-pretorria.jpg",
      alt: "High-rise sectional-title maintenance in Pretoria",
    },
  },
  developers: {
    hero: {
      src: "/images/munyaka-midrand.jpg",
      alt: "Developer handover programme at a Gauteng lifestyle estate",
    },
    triptych: [
      { src: "/images/painting-commercial-campus.jpg", alt: "Practical completion painting on a commercial campus" },
      { src: "/images/coatings-industrial-epoxy-completed-floor.jpg", alt: "Industrial epoxy handover on a logistics development" },
      { src: "/images/structural-concrete-spalling-handover.jpg", alt: "Structural remediation with documented QA sign-off" },
    ],
    editorial: {
      src: "/images/eastlands-benoni.jpg",
      alt: "Estate practical completion and defect liability works",
    },
  },
} as const;

export type SolutionPageKey = keyof typeof SOLUTION_PAGE_IMAGES;

export const STATIC_PAGE_VISUALS = {
  contact: [
    { src: "/images/painting-body-corporate-qa.jpg", alt: "On-site assessment with documented QA" },
    { src: "/images/structural-concrete-spalling-assessment.jpg", alt: "Substrate assessment before specification" },
    { src: "/images/coatings-industrial-epoxy-completed-floor.jpg", alt: "Completed industrial coating programme" },
  ],
  qa: [
    { src: "/images/painting-body-corporate-qa.jpg", alt: "Independent QA documentation on a sectional-title programme" },
    { src: "/images/structural-crack-injection-qa.jpg", alt: "Structural repair QA sign-off" },
    { src: "/images/coatings-hygienic-food-grade-03.jpg", alt: "Food-grade floor audit-ready finish" },
  ],
  accreditations: [
    { src: "/images/painting-industrial-coatings.jpg", alt: "Manufacturer-approved industrial coating application" },
    { src: "/images/waterproofing-flat-roof-01.jpg", alt: "Certified waterproofing membrane installation" },
    { src: "/images/painting-commercial-healthcare.jpg", alt: "Accredited commercial coating programme" },
  ],
  projects: [
    { src: "/images/munyaka-midrand.jpg", alt: "Munyaka Lifestyle Estate case study" },
    { src: "/images/the-blyde-pretorria.jpg", alt: "The Blyde Riverwalk Estate case study" },
    { src: "/images/eastlands-benoni.jpg", alt: "Eastlands Mature Lifestyle Estate case study" },
  ],
  blog: [
    { src: "/images/structural-concrete-spalling-repair.jpg", alt: "Structural remediation technical guide imagery" },
    { src: "/images/waterproofing-flat-roof-02.jpg", alt: "Waterproofing systems technical guide imagery" },
    { src: "/images/coatings-industrial-epoxy-completed-floor.jpg", alt: "Industrial coatings technical guide imagery" },
  ],
} as const;
