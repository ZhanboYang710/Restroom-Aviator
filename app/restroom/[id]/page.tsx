import { getRestroomById } from '../../../lib/getRestroomById';
import { restroom } from '@/types';

interface DynamicPageProps {
  params: { id: string };
}

export default async function DynamicPage({ params }: DynamicPageProps) {
  const { id } = params;
  const restroom = await getRestroomById(id);

  if (!restroom) {
    return <p>Restroom not found</p>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Details for {restroom.building} - {restroom.location}</h1>
      <p><strong>Campus:</strong> {restroom.campus}</p>
      <p><strong>Building:</strong> {restroom.building}</p>
      <p><strong>Floor:</strong> {restroom.floor}</p>
      <p><strong>Gender:</strong> {restroom.gender}</p>
      <p><strong>Accessible:</strong> {restroom.accessible ? "Yes" : "No"}</p>
      <p><strong>Odor Rating:</strong> {restroom.ratings.odor}</p>
      <p><strong>Cleanliness Rating:</strong> {restroom.ratings.cleanliness}</p>
      <p><strong>Privacy Rating:</strong> {restroom.ratings.privacy}</p>
      <p><strong>Overall Rating:</strong> {restroom.ratings.overall}</p>
      <p><strong>Number of Ratings:</strong> {restroom.ratingCount}</p>
    </div>
  );
}