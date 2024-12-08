export interface restroom {
  id: string;
  location: string;
  building: string;
  floor: number;
  campus: 'East' | 'Central' | 'South' | 'West';
  gender: 'Men' | 'Women' | 'Gender Neutral';
  accessible: boolean;
  ratings: {
    odor: number; // 1-5
    cleanliness: number; // 1-5
    privacy: number; // 1-5
    overall: number; // Average of above three
  };
  ratingCount: number; // Total number of ratings submitted
  reviews: Review[];
}

export interface Review {
  comment: string;
  odor: number;
  cleanliness: number;
  privacy: number;
  overall: number;
  date: string; // Timestamp for when the review was created
}

export interface thumbnail{
    building: string;
    floor: number;
    gender: 'Men' | 'Women' | 'Gender Neutral';
    overall_rating: number;
}
