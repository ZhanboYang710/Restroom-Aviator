import { MongoClient, ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const MONGO_URI = process.env.MONGO_URI as string;
const DB_NAME = "cs391-final-projects";
const RESTROOMS_COLLECTION = "restroom_aviator";

const client = new MongoClient(MONGO_URI);
let isConnected = false;

async function connect() {
  if (!isConnected) {
    await client.connect();
    isConnected = true;
  }
  return client.db(DB_NAME);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("Received request:", req.query);

  const { campus, building, gender, accessible } = req.query;

  try {
    const db = await connect();
    const collection = db.collection(RESTROOMS_COLLECTION);

    let query: any = {};

    if (campus) {
      query.campus = campus;
    }
    if (building) {
      query.building = building;
    }
    if (gender) {
      query.gender = gender;
    }
    if (accessible) {
      query.accessible = accessible === 'true';
    }

    console.log("Query:", query);

    const restrooms = await collection.find(query).toArray();
    res.status(200).json(restrooms);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}