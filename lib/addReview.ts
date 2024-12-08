import { ObjectId } from "mongodb";
import { Review } from "../types";
import { getCollection, RESTROOMS_COLLECTION } from "../db";
import { calculateAverageRating } from "./calculateAverageRating";

// Add a review for a restroom
export async function addReview(
  restroomId: string,
  review: Review
): Promise<void> {
  const collection = await getCollection(RESTROOMS_COLLECTION);

  // Add the review to the reviews array
  const result = await collection.updateOne(
    { _id: new ObjectId(restroomId) },
    {
      $push: { reviews: review as any }, // Push the review directly with type assertion
      $inc: { ratingCount: 1 },          // Increment the rating count
    }
  );

  if (result.modifiedCount === 0) {
    throw new Error("Review could not be added");
  }

  // Update the ratings
  await collection.updateOne(
    { _id: new ObjectId(restroomId) },
    {
      $set: {
        "ratings.odor": await calculateAverageRating(restroomId, "odor"),
        "ratings.cleanliness": await calculateAverageRating(restroomId, "cleanliness"),
        "ratings.privacy": await calculateAverageRating(restroomId, "privacy"),
        "ratings.overall": await calculateAverageRating(restroomId, "overall"),
      },
    }
  );
}
