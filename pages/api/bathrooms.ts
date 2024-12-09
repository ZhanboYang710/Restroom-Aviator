// Contributed by Akemi
// Data Collection Retrieving Handler function

import { MongoClient, ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const MONGO_URI = process.env.MONGO_URI as string;
const DB_NAME = "bu-bathroom-ratings";
export const RESTROOMS_COLLECTION = "restrooms";

const client = new MongoClient(MONGO_URI);
let isConnected = false;

async function connect() {
  if (!isConnected) {
    await client.connect();
    isConnected = true;
  }
  return client.db(DB_NAME);
}

// Handler of restroom collection data that process the query and 
// set the fields to the right type as declared in type.ts
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
    // accessible is of type boolean in MongoDb, need type string of our type definition
    if (accessible) {
      query.accessible = accessible === 'true';
    }

    console.log("Query:", query);

    const restrooms = await collection.find(query).toArray();
    console.log(restrooms[0])
    // restrooms[0]._id.toHexString() ; testing code
        // setting up id attribute of restroom object based on _id in MongoDb
    restrooms.map( (restroom_instance) => 
      restroom_instance.id = restroom_instance._id.toHexString()
    )
    res.status(200).json(restrooms);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}