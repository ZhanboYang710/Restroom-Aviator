// This file defines the DynamicPage component used to fetch and display detailed information about a restroom based on the dynamic ID.
// Used same logic as lab 7
// The component uses the Detail component to format and display the restroom details.
// Contributed by akemi sai

import { getRestroomById } from '@/lib/getRestroomById';
import Detail from '@/components/detail';

// Type definition for the DynamicPage component props
interface DynamicPageProps {
  params: { id: string };
}

// DynamicPage component to fetch and display restroom details
export default async function DynamicPage({ params }: DynamicPageProps) {
  const { id } = params; // Extract the ID from the params
  const restroom = await getRestroomById(id); // Fetch the restroom details using the ID

  // If the restroom is not found, display a message
  if (!restroom) {
    return <p>Restroom not found</p>;
  }

  // Use the Detail component to display the restroom details
  return <Detail restroom={restroom} />;
}