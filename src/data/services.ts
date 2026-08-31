export type Service = {
  id: string;
  name: string;
  shortName: string;
  kicker: string;
  mobileName?: [string, string];
  paragraphs: string[];
};

export const services: Service[] = [
  {
    id: "fresh-frozen-sourcing",
    name: "Fresh & Frozen Sourcing",
    shortName: "Sourcing",
    kicker: "Sourcing",
    paragraphs: [
      "We will bring the Harvest to your door.",
      "Our 29 years of experience allows us to utilize partners across North America and globally to provide you what you are looking for.",
      "Whether you need fresh for the season or frozen for year-round coverage, we match the catch to what your buyers need. Tell us the spec, and we go to work.",
    ],
  },
  {
    id: "supply-and-demand",
    name: "Managing Supply and Your Demand",
    mobileName: ["Managing Supply and", "Your Demand"],
    shortName: "Supply & Demand",
    kicker: "Supply",
    paragraphs: [
      "We will understand your supply demand and quote accordingly and deliver per our commitment. Treating core partners as first priority.",
      "That means clear quotes, honest availability, and a plan you can count on when the market moves. When supply is tight, core partners hear from us first.",
    ],
  },
  {
    id: "long-term-commitments",
    name: "Supporting Long-Term Commitments",
    mobileName: ["Supporting Long-Term", "Commitments"],
    shortName: "Commitments",
    kicker: "Commitments",
    paragraphs: [
      "Sourcing and managing your long-term demands. We will commit to long-term needs delivering just in time either utilizing long-term price commitments or fluctuating market pricing.",
      "You choose the pricing structure that fits your program, and we hold the supply plan with you. The goal is product on your dock when you need it — without overcommitting your inventory.",
    ],
  },
  {
    id: "specialized-specifications",
    name: "Specialized Specifications",
    shortName: "Specifications",
    kicker: "Specifications",
    paragraphs: [
      "Developing and supporting specialized specifications per partner requirements.",
      "Utilizing only the top of the line Quality Assured Producers we can produce the item you need for long or short term needs.",
      "Cuts, pack sizes, grading, and labeling can be built around how you sell. We stay with the spec from the first sample through production so what you ordered is what arrives.",
    ],
  },
  {
    id: "market-communication",
    name: "Market Communication",
    shortName: "Market",
    kicker: "Market",
    paragraphs: [
      "Utilizing our professional experience and constant communications deep in the market we are here to communicate the current market, trends and upcoming market projections to help support the best possible decisions in daily or upcoming market purchases.",
      "You get a clear read before you buy — not after the window has closed. When conditions shift, we pick up the phone so you can act with the same information we have.",
    ],
  },
  {
    id: "logistics-tracking",
    name: "Logistics Tracking and Communication",
    mobileName: ["Logistics Tracking and", "Communication"],
    shortName: "Logistics",
    kicker: "Logistics",
    paragraphs: [
      "All orders will be tracked and communicated on time. Request to update or follow up on shipments from partners will be handled timely with care. We strive to invest in the best follow up on the market.",
      "This means constant feedback and communication from our office to ensure a successful transfer and to keep building our partnership.",
    ],
  },
  {
    id: "accounting",
    name: "Accounting",
    shortName: "Accounting",
    kicker: "Accounting",
    paragraphs: [
      "We supply timely invoices and communication. We will reply quickly, thoroughly and work for you to help better understand your paperwork and billing.",
      "Invoices go out on time, and questions get a real answer. If something on the paperwork does not line up, we work it through with you until it is clear.",
    ],
  },
];
