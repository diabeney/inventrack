export interface ReagentData {
  _id: string;
  name: string;
  description: string;
  quantity: number;
  type: string; // E.g., solution, solid, powder, etc.
  storageConditions: string;
  imageUrl?: string;
  _createdAt: string;
}

export const reagentDummyData: ReagentData[] = [
  {
    _id: "1a2b3c4d5e6f",
    name: "Sodium Hydroxide",
    description: "A strong alkali used in various chemical reactions.",
    quantity: 25,
    type: "Solid pellets",
    storageConditions: "Store in a cool, dry place.",
    imageUrl: "https://example.com/images/sodium-hydroxide.jpg",
    _createdAt: "2024-01-01T10:00:00Z",
  },
  {
    _id: "7g8h9i0j1k2l",
    name: "Hydrochloric Acid",
    description: "A strong acid used for titration and pH adjustments.",
    quantity: 10,
    type: "Liquid solution",
    storageConditions: "Store in a well-ventilated area, away from direct sunlight.",
    imageUrl: "https://example.com/images/hydrochloric-acid.jpg",
    _createdAt: "2024-01-02T15:30:00Z",
  },
  {
    _id: "3m4n5o6p7q8r",
    name: "Ethanol",
    description: "A solvent commonly used in organic synthesis and as a disinfectant.",
    quantity: 15,
    type: "Liquid",
    storageConditions: "Keep tightly closed and away from heat or ignition sources.",
    imageUrl: "https://example.com/images/ethanol.jpg",
    _createdAt: "2024-01-03T12:45:00Z",
  },
  {
    _id: "9s0t1u2v3w4x",
    name: "Potassium Permanganate",
    description: "An oxidizing agent used in various chemical reactions.",
    quantity: 8,
    type: "Crystalline solid",
    storageConditions: "Store in a tightly closed container, away from organic materials.",
    imageUrl: "https://example.com/images/potassium-permanganate.jpg",
    _createdAt: "2024-01-04T08:20:00Z",
  },
  {
    _id: "5y6z7a8b9c0d",
    name: "Ammonium Chloride",
    description: "Used in buffer solutions and as a nitrogen source in fertilizers.",
    quantity: 20,
    type: "Powder",
    storageConditions: "Keep in a dry area, away from acids and bases.",
    imageUrl: "https://example.com/images/ammonium-chloride.jpg",
    _createdAt: "2024-01-05T16:10:00Z",
  },
  {
    _id: "11x2y3z4a5b",
    name: "Sulfuric Acid",
    description: "A strong acid used in industrial processes and chemical synthesis.",
    quantity: 12,
    type: "Liquid",
    storageConditions: "Store in a ventilated area, away from organic materials.",
    imageUrl: "https://example.com/images/sulfuric-acid.jpg",
    _createdAt: "2024-01-06T09:40:00Z",
  },
  {
    _id: "12c3d4e5f6g",
    name: "Acetone",
    description: "A common solvent used in laboratories and industry.",
    quantity: 18,
    type: "Liquid",
    storageConditions: "Keep away from heat, sparks, and open flame.",
    imageUrl: "https://example.com/images/acetone.jpg",
    _createdAt: "2024-01-07T11:50:00Z",
  },
  {
    _id: "13h4i5j6k7l",
    name: "Silver Nitrate",
    description: "Used in qualitative analysis and as an antiseptic.",
    quantity: 5,
    type: "Crystalline solid",
    storageConditions: "Store in a cool, dark place.",
    imageUrl: "https://example.com/images/silver-nitrate.jpg",
    _createdAt: "2024-01-08T13:15:00Z",
  },
  {
    _id: "14m5n6o7p8q",
    name: "Phenolphthalein",
    description: "A pH indicator commonly used in titrations.",
    quantity: 30,
    type: "Powder",
    storageConditions: "Keep in a tightly sealed container, away from moisture.",
    imageUrl: "https://example.com/images/phenolphthalein.jpg",
    _createdAt: "2024-01-09T14:25:00Z",
  },
  {
    _id: "15r6s7t8u9v",
    name: "Calcium Carbonate",
    description: "Used as a filler material and in chemical reactions.",
    quantity: 25,
    type: "Powder",
    storageConditions: "Store in a dry place, away from acids.",
    imageUrl: "https://example.com/images/calcium-carbonate.jpg",
    _createdAt: "2024-01-10T10:30:00Z",
  },
];
