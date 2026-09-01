export type Certification = {
  id: string;
  name: string;
  fullName: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export const certifications: Certification[] = [
  {
    id: "asc",
    name: "ASC",
    fullName: "Aquaculture Stewardship Council",
    image: {
      src: "/images/certs/asc.png",
      alt: "Farmed Responsibly ASC Certified mark",
      width: 340,
      height: 162,
    },
  },
  {
    id: "globalgap",
    name: "GLOBALG.A.P.",
    fullName: "Good Agricultural Practice",
    image: {
      src: "/images/certs/globalgap.png",
      alt: "GLOBALG.A.P. certification mark",
      width: 192,
      height: 111,
    },
  },
  {
    id: "msc",
    name: "MSC",
    fullName: "Marine Stewardship Council",
    image: {
      src: "/images/certs/msc.png",
      alt: "MSC Certified Sustainable Seafood mark",
      width: 360,
      height: 142,
    },
  },
  {
    id: "bap",
    name: "BAP",
    fullName: "Best Aquaculture Practices",
    image: {
      src: "/images/certs/bap.png",
      alt: "BAP Certified mark",
      width: 400,
      height: 184,
    },
  },
  {
    id: "alaska-seafood",
    name: "Alaska Seafood",
    fullName: "Certified Responsible Fisheries",
    image: {
      src: "/images/certs/alaska-seafood.jpg",
      alt: "Alaska Seafood Certified Responsible Fisheries mark",
      width: 600,
      height: 427,
    },
  },
  {
    id: "brc",
    name: "BRC",
    fullName: "Global Standards",
    image: {
      src: "/images/certs/brc.png",
      alt: "BRC Global Standards mark",
      width: 369,
      height: 500,
    },
  },
];
