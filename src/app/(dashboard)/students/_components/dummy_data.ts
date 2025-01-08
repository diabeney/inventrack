import { LabEquipmentData } from "../../equipment/_components/dummy_data";
import { ReagentData } from "../../reagents/_components/dummy_data";

export interface StudentData {
  _id: string;
  leaderName: string;
  indexNumber: string;
  year: string;
  projectTitle: string;
  supervisor: string;
  numberOfColleagues: number;
  session: {
    equipment: LabEquipmentData[];
    reagents: ReagentData[];
    _createdAt: string;
  };
  _createdAt: string;
}

export const studentProjectDummyData: StudentData[] = [
  {
    _id: "1a2b3c4d5e6f",
    leaderName: "John Doe",
    indexNumber: "4567890",
    year: "final_year",
    projectTitle: "Catalyst Optimization in Chemical Reactions",
    supervisor: "Dr. Jane Smith",
    numberOfColleagues: 3,
    session: {
      equipment: [
        {
          _id: "1a2b3c4d5e6f",
          name: "Centrifuge",
          description: "A device used to separate substances of different densities.",
          quantity: 1,
          type: "1.5 L capacity",
          imageUrl: "https://example.com/images/centrifuge.jpg",
          _createdAt: "2024-01-01T10:00:00Z",
        },
        {
          _id: "3m4n5o6p7q8r",
          name: "Hot Plate",
          description: "A device used to heat substances in a controlled manner.",
          quantity: 2,
          type: "Heating equipment",
          imageUrl: "https://example.com/images/hot-plate.jpg",
          _createdAt: "2024-01-06T09:40:00Z",
        },
      ],
      reagents: [
        {
          _id: "7g8h9i0j1k2l",
          name: "Sodium Hydroxide",
          description: "A strong alkali used in various chemical reactions.",
          quantity: 2,
          type: "Solid pellets",
          storageConditions: "Store in a cool, dry place.",
          imageUrl: "https://example.com/images/sodium-hydroxide.jpg",
          _createdAt: "2024-01-01T10:00:00Z",
        },
      ],
      _createdAt: "2024-01-15T09:00:00Z",
    },
    _createdAt: "2024-01-15T09:00:00Z",
  },
  {
    _id: "7g8h9i0j1k2l",
    leaderName: "Alice Brown",
    indexNumber: "654321",
    year: "third_year",
    projectTitle: "Synthesis of Green Polymers",
    supervisor: "Dr. Mark Taylor",
    numberOfColleagues: 4,
    session: {
      equipment: [
        {
          _id: "3m4n5o6p7q8r",
          name: "Hot Plate",
          description: "A device used to heat substances in a controlled manner.",
          quantity: 2,
          type: "Heating equipment",
          imageUrl: "https://example.com/images/hot-plate.jpg",
          _createdAt: "2024-01-06T09:40:00Z",
        },
      ],
      reagents: [
        {
          _id: "3m4n5o6p7q8r",
          name: "Ethanol",
          description: "A solvent commonly used in organic synthesis and as a disinfectant.",
          quantity: 5,
          type: "Liquid",
          storageConditions: "Keep tightly closed and away from heat or ignition sources.",
          imageUrl: "https://example.com/images/ethanol.jpg",
          _createdAt: "2024-01-03T12:45:00Z",
        },
      ],

      _createdAt: "2024-01-20T10:00:00Z",
    },
    _createdAt: "2024-01-20T10:00:00Z",
  },
  {
    _id: "3m4n5o6p7q8r",
    leaderName: "Michael Green",
    indexNumber: "334455",
    year: "third_year",
    projectTitle: "Analyzing the Effects of Temperature on Reaction Rates",
    supervisor: "Dr. Susan White",
    numberOfColleagues: 2,
    session: {
      equipment: [
        {
          _id: "5y6z7a8b9c0d",
          name: "Thermometer",
          description: "An instrument used to measure temperature.",
          quantity: 3,
          type: "Temperature measurement",
          imageUrl: "https://example.com/images/thermometer.jpg",
          _createdAt: "2024-01-09T14:25:00Z",
        },
      ],
      reagents: [
        {
          _id: "15r6s7t8u9v",
          name: "Hydrochloric Acid",
          description: "A strong acid used for titration and pH adjustments.",
          quantity: 3,
          type: "Liquid solution",
          storageConditions: "Store in a well-ventilated area, away from direct sunlight.",
          imageUrl: "https://example.com/images/hydrochloric-acid.jpg",
          _createdAt: "2024-01-02T15:30:00Z",
        },
      ],

      _createdAt: "2024-01-22T08:30:00Z",
    },
    _createdAt: "2024-01-22T08:30:00Z",
  },
  {
    _id: "9b8c7d6e5f4g",
    leaderName: "Sophia Carter",
    indexNumber: "7924680",
    projectTitle: "Water Treatment Using Membrane Technology",
    supervisor: "Dr. William Brown",
    year: "graduate",
    numberOfColleagues: 5,
    session: {
      equipment: [
        {
          _id: "8e9f0a1b2c3d",
          name: "pH Meter",
          description: "An instrument used to measure the acidity or alkalinity of a solution.",
          quantity: 2,
          type: "Measurement device",
          imageUrl: "https://example.com/images/ph-meter.jpg",
          _createdAt: "2024-01-10T16:00:00Z",
        },
      ],
      reagents: [
        {
          _id: "0a1b2c3d4e5f",
          name: "Sodium Chloride",
          description: "Used as an electrolyte in water treatment processes.",
          quantity: 10,
          type: "Salt",
          storageConditions: "Store in a dry place.",
          imageUrl: "https://example.com/images/sodium-chloride.jpg",
          _createdAt: "2024-01-11T09:00:00Z",
        },
      ],

      _createdAt: "2024-01-25T10:00:00Z",
    },
    _createdAt: "2024-01-25T10:00:00Z",
  },
  {
    _id: "11z22y33x44w",
    leaderName: "Emily Johnson",
    indexNumber: "8776655",
    year: "graduate",
    projectTitle: "Biofuel Production from Algae",
    supervisor: "Dr. Edward Kim",
    numberOfColleagues: 6,
    session: {
      equipment: [
        {
          _id: "4f3e2d1c0b9a",
          name: "Spectrophotometer",
          description: "Used to measure light absorbance in samples.",
          quantity: 1,
          type: "Analytical device",
          imageUrl: "https://example.com/images/spectrophotometer.jpg",
          _createdAt: "2024-01-12T14:00:00Z",
        },
      ],
      reagents: [
        {
          _id: "5g6h7j8k9l0m",
          name: "Algae Culture",
          description: "Sample of microalgae used for biofuel production experiments.",
          quantity: 10,
          type: "Biological material",
          storageConditions: "Keep in a temperature-controlled incubator.",
          imageUrl: "https://example.com/images/algae-culture.jpg",
          _createdAt: "2024-01-13T10:00:00Z",
        },
      ],

      _createdAt: "2024-02-01T09:00:00Z",
    },
    _createdAt: "2024-02-01T09:00:00Z",
  },
];
