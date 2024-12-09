// Contribued by Akemi

import { ObjectId } from 'mongodb';
import { restroom } from '../types';
import { getCollection } from '../db';
import { RESTROOMS_COLLECTION } from '../db';

// Calculate average ratings for a restroom
export async function calculateAverageRating(
    restroomId: string,
    ratingType: keyof restroom['ratings']
  ): Promise<number> {
    const collection = await getCollection(RESTROOMS_COLLECTION);
    const restroom = await collection.findOne({
      _id: new ObjectId(restroomId),
    });
  
    if (!restroom || restroom.reviews.length === 0) {
      return 0; // No reviews yet, return 0 as average
    }
  
    const totalRating = restroom.reviews.reduce(
      (sum: number, review: { [key in keyof restroom['ratings']]: number }) => sum + review[ratingType],
      0
    );
    return totalRating / restroom.reviews.length;
  }
  