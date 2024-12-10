// setting up connection to MongoDb
// Contributed by Akemi

import { MongoClient, Db, Collection } from "mongodb";

const MONGO_URI = process.env.MONGO_URI as string;
if (!MONGO_URI) {
  throw new Error("MONGO_URI environment variable is undefined");
}

const DB_NAME = "bu-bathroom-ratings";
export const RESTROOMS_COLLECTION = "restrooms";

// Initialize variables to hold MongoDB client and database instances.
let client: MongoClient | null = null;
let db: Db | null = null;

async function connect(): Promise<Db> {
  if (!client) {
    client = new MongoClient(MONGO_URI);
    await client.connect();
    // Ensures the connection is established asynchronously before proceeding.
  }
  return client.db(DB_NAME);
}

// Function to get a specific collection from the database.
export async function getCollection(collectionName: string): Promise<Collection> {
  if (!db) {
    db = await connect();
  }
  return db.collection(collectionName);
}
