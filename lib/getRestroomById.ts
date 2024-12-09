import { ObjectId } from "mongodb";
import { getCollection } from "@/db";
import { restroom } from "../types";

const RESTROOMS_COLLECTION = "restrooms";

export async function getRestroomById(
  id: string,
): Promise<restroom | null> {
  const restroomId = new ObjectId(id);

  const restroomsCollection = await getCollection(RESTROOMS_COLLECTION);
  const data = await restroomsCollection.findOne({ _id: restroomId });

  if (data === null) {
    return null;
  }

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

  return restroom;
}
