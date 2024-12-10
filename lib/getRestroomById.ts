// This file defines the getRestroomById function used to fetch detailed information about a restroom from the database based on the provided ID.
// logic similar to lab 7
// The function connects to the MongoDB database, retrieves the restroom details, and returns them in a structured format.
// Contributed by Akemi Sai

import { ObjectId } from "mongodb";
import { getCollection } from "@/db";
import { restroom } from "../types";

const RESTROOMS_COLLECTION = "restrooms"; // Name of the collection in the database

// Function to fetch restroom details by ID
export async function getRestroomById(id: string): Promise<restroom | null> {
  const restroomId = new ObjectId(id); // Convert the string ID to an ObjectId

  // Get the collection from the database
  const restroomsCollection = await getCollection(RESTROOMS_COLLECTION);
  // Find the restroom document with the matching ID
  const data = await restroomsCollection.findOne({ _id: restroomId });

  // If no restroom is found, return null
  if (data === null) {
    return null;
  }

  // Structure the restroom data
  const restroom: restroom = {
    id: id,
    location: data.location,
    building: data.building,
    floor: data.floor,
    campus: data.campus,
    gender: data.gender,
    accessible: data.accessible,
    ratings: data.ratings,
    ratingCount: data.ratingCount,
    reviews: data.reviews,
  };

  // Return the structured restroom data
  return restroom;
}