import { getCollection, RESTROOMS_COLLECTION } from '../db';
import { restroom } from '../types';

// Fetch all restrooms with optional filters
export async function getRestrooms(filters: Partial<restroom>): Promise<restroom[]> {
    const collection = await getCollection(RESTROOMS_COLLECTION);
    const data = await collection.find(filters).toArray();

    const restrooms: restroom[] = data.map((p) => ({

        campus: p.campus,
        building: p.building,
        gender: p.gender,
        overall: p.overall,
        id: p.id,
        location: p.location,
        floor: p.floor,
        accessible: p.accessible,
        cleanliness: p.cleanliness,
        amenities: p.amenities,
        ratings: p.ratings,
        ratingCount: p.ratingCount,
        reviews: p.reviews
    }));

    return restrooms;
}

