
import { getRestroomById } from '@/lib/getRestroomById';
import Detail from '@/components/detail';

interface DynamicPageProps {
  params: { id: string };
}

export default async function DynamicPage({ params }: DynamicPageProps) {
  const { id } = params;
  const restroom = await getRestroomById(id);

  if (!restroom) {
    return <p>Restroom not found</p>;
  }

  return <Detail restroom={restroom} />;
}