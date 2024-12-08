
export interface restroom{
    location: string;
    building: string;
    floor: number;
    capacity: number;
    gender: string;
    overall_rating: number;
    odor: number;
    cleanliness: number;
    toliet_paper: number;
}

export interface thumbnail{
    building: string;
    floor: number;
    gender: string;
    overall_rating: number;
}
