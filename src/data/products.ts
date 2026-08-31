export type ProductImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  contain?: boolean;
};

export type ProductSpecies = {
  name: string;
  aka: string;
  season: string;
  profile: string;
};

export type ProductFact = {
  label: string;
  value: string;
};

export type Product = {
  id: string;
  name: string;
  scientific?: string;
  kicker: string;
  summary: string;
  details: string[];
  facts?: ProductFact[];
  species?: ProductSpecies[];
  images: ProductImage[];
};

export const products: Product[] = [
  {
    id: "farmed-salmon",
    name: "Farmed Salmon",
    scientific: "Salmo salar",
    kicker: "Atlantic salmon",
    summary:
      "Raised Atlantic salmon fillets come from Salmo salar raised in net pens or recirculating aquaculture systems (RAS), primarily in Norway, Chile, Canada, and Scotland.",
    details: [
      "These fish are bred and harvested under controlled conditions, allowing consistent supply year-round.",
    ],
    facts: [
      { label: "Per 3 oz serving", value: "22 g protein · 2 g omega-3s" },
      { label: "Availability", value: "Fresh & frozen year-round" },
    ],
    images: [
      {
        src: "/images/products/farmed-salmon.jpg",
        alt: "Two raw Atlantic salmon fillets on a wooden board with lemon and fishing net.",
        width: 702,
        height: 412,
      },
    ],
  },
  {
    id: "wild-salmon",
    name: "Wild Salmon",
    kicker: "Pacific species",
    summary:
      "Fresh availability is limited to seasonal commercial seasons. Frozen is available year-round.",
    details: [
      "Wild salmon is high in protein and omega-3 fatty acids, with about 18 g protein and 1.2 g omega-3s per 3 oz serving.",
    ],
    facts: [
      { label: "Per 3 oz serving", value: "18 g protein · 1.2 g omega-3s" },
      { label: "Frozen", value: "Available year-round" },
    ],
    species: [
      {
        name: "Chinook",
        aka: "King",
        season: "Fresh available year-round during commercially regulated fisheries.",
        profile: "Rich red color, succulent flavor, and delicate texture.",
      },
      {
        name: "Sockeye",
        aka: "Red",
        season:
          "Fresh available May–September. Season starts in late May, with peak availability mid-June through August.",
        profile: "Deep red color, rich flavor, and firm texture.",
      },
      {
        name: "Coho",
        aka: "Silver",
        season:
          "Fresh available June–October. Most consistent availability starts late August and ends mid-September.",
        profile: "Bright orange-red color, delicate flavor, and firm texture.",
      },
      {
        name: "Keta",
        aka: "Silverbrite, Chum",
        season: "Fresh available June–September.",
        profile: "Coral-pink color, mild flavor, and firm texture.",
      },
      {
        name: "Pink",
        aka: "Humpy",
        season: "Fresh available June–September.",
        profile: "Light rosy-pink color, delicate flavor, and tender texture.",
      },
    ],
    images: [],
  },
  {
    id: "pacific-halibut",
    name: "Pacific Halibut",
    scientific: "Hippoglossus stenolepis",
    kicker: "Whitefish",
    summary:
      "Pacific halibut has a mild, slightly sweet flavor with firm, white flesh and minimal fishiness, making it versatile for many cooking methods.",
    details: [
      "Pacific halibut is known for its lean, firm, and meaty white flesh that carries a subtle sweetness and a clean, fresh taste, often described as how the ocean should taste — pure and gentle.",
    ],
    images: [
      {
        src: "/images/products/pacific-halibut.jpg",
        alt: "A Pacific halibut fillet on crushed ice beside a whole fish.",
        width: 1400,
        height: 933,
      },
      {
        src: "/images/products/pacific-halibut-whole.png",
        alt: "Pacific halibut shown from above, with a spotted brown topside.",
        width: 744,
        height: 367,
        contain: true,
      },
    ],
  },
  {
    id: "sablefish",
    name: "Sablefish",
    scientific: "Anoplopoma fimbria",
    kicker: "Black cod",
    summary:
      "Black cod, also known as sablefish, has a rich, buttery flavor with a mild, slightly sweet taste and a melt-in-your-mouth, velvety texture that makes it a premium choice for seafood lovers.",
    details: [],
    images: [
      {
        src: "/images/products/sablefish-fillets.jpg",
        alt: "Sablefish fillets with white flesh beside dark, skin-on pieces.",
        width: 1299,
        height: 1299,
      },
      {
        src: "/images/products/sablefish.jpg",
        alt: "Two whole sablefish, also called black cod, on ice.",
        width: 1299,
        height: 808,
      },
    ],
  },
  {
    id: "pacific-cod",
    name: "Pacific Cod",
    scientific: "Gadus macrocephalus",
    kicker: "Whitefish",
    summary:
      "Pacific cod fillets are mild-flavored, firm, and flaky whitefish, prized for their versatility in cooking and ability to pair with a wide range of flavors.",
    details: [],
    images: [
      {
        src: "/images/products/pacific-cod-fillet.jpg",
        alt: "A raw Pacific cod fillet with flaky white flesh.",
        width: 497,
        height: 297,
      },
      {
        src: "/images/products/pacific-cod.jpg",
        alt: "A whole Pacific cod on a white background.",
        width: 860,
        height: 287,
        contain: true,
      },
    ],
  },
];
