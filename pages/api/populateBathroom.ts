// script to setting up the database in MongoDb
// contribued by Akemi

// import { MongoClient } from "mongodb";
// import dotenv from "dotenv";
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const MONGO_URI = process.env.MONGO_URI as string;
const DB_NAME = "cs391-final-projects";
const RESTROOMS_COLLECTION = "restroom_aviator";

const client = new MongoClient(MONGO_URI);

async function populateBathrooms() {
  await client.connect();
  const db = client.db(DB_NAME);
  const collection = db.collection(RESTROOMS_COLLECTION);

  const bathrooms = [
    {
      location: "Second Floor near Dish Area",
      building: "Marciano",
      floor: 2,
      campus: "East",
      gender: "Men",
      accessible: true,
      ratings: { odor: 0, cleanliness: 0, privacy: 0, overall: 0 },
      ratingCount: 0,
      reviews: [],
    },
    {
      location: "Near Water Refill past Security",
      building: "Warren Dining Hall",
      floor: 1,
      campus: "Central",
      gender: "Men",
      accessible: false,
      ratings: { odor: 0, cleanliness: 0, privacy: 0, overall: 0 },
      ratingCount: 0,
      reviews: [],
    },
    {
      location: "Across from C Tower Elevators",
      building: "Warren Dining Hall",
      floor: 1,
      campus: "Central",
      gender: "Women",
      accessible: false,
      ratings: { odor: 0, cleanliness: 0, privacy: 0, overall: 0 },
      ratingCount: 0,
      reviews: [],
    },
    {
      location: "Right when Entering Building",
      building: "Sleeper",
      floor: 1,
      campus: "West",
      gender: "Gender Neutral",
      accessible: true,
      ratings: { odor: 0, cleanliness: 0, privacy: 0, overall: 0 },
      ratingCount: 0,
      reviews: [],
    },
    {
      location: "First and Second Floors near Open Stairs",
      building: "Photonics",
      floor: 1,
      campus: "South",
      gender: "Men",
      accessible: true,
      ratings: { odor: 0, cleanliness: 0, privacy: 0, overall: 0 },
      ratingCount: 0,
      reviews: [],
    },
    {
      location: "Back of the Building, Near Long Hallway",
      building: "CGS",
      floor: 1,
      campus: "Central",
      gender: "Men",
      accessible: false,
      ratings: { odor: 0, cleanliness: 0, privacy: 0, overall: 0 },
      ratingCount: 0,
      reviews: [],
    },
    {
      location: "Near Large Conference Room",
      building: "CILSE",
      floor: 1,
      campus: "East",
      gender: "Women",
      accessible: true,
      ratings: { odor: 0, cleanliness: 0, privacy: 0, overall: 0 },
      ratingCount: 0,
      reviews: [],
    },
    {
      location: "To the Right of the Entrance",
      building: "LSEB",
      floor: 1,
      campus: "East",
      gender: "Men",
      accessible: true,
      ratings: { odor: 0, cleanliness: 0, privacy: 0, overall: 0 },
      ratingCount: 0,
      reviews: [],
    },
    {
      location: "Basement Floor",
      building: "ENG",
      floor: -1,
      campus: "Central",
      gender: "Gender Neutral",
      accessible: true,
      ratings: { odor: 0, cleanliness: 0, privacy: 0, overall: 0 },
      ratingCount: 0,
      reviews: [],
    },
    {
      location: "First Floor at the Back",
      building: "GSU",
      floor: 1,
      campus: "Central",
      gender: "Women",
      accessible: false,
      ratings: { odor: 0, cleanliness: 0, privacy: 0, overall: 0 },
      ratingCount: 0,
      reviews: [],
    },
    {
      location: "Second Floor Near Left or Right Turn",
      building: "GSU",
      floor: 2,
      campus: "Central",
      gender: "Men",
      accessible: true,
      ratings: { odor: 0, cleanliness: 0, privacy: 0, overall: 0 },
      ratingCount: 0,
      reviews: [],
    },
    {
      location: "First Floor, Next to the Stairs",
      building: "Questrom",
      floor: 1,
      campus: "East",
      gender: "Gender Neutral",
      accessible: true,
      ratings: { odor: 0, cleanliness: 0, privacy: 0, overall: 0 },
      ratingCount: 0,
      reviews: [],
    },
  ];

  await collection.insertMany(bathrooms);
  console.log("Bathrooms populated!");
  await client.close();
}

populateBathrooms().catch((err) => console.error("Failed to populate bathrooms:", err));
