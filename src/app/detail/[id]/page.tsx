import DetailPage from '@/components/pages/DetailPage';

interface DetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DetailPageRoute({ params }: DetailPageProps) {
  const { id } = await params;
  return <DetailPage id={id} />;
}
