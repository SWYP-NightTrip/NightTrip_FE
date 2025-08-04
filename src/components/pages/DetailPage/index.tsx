import HydrationPrefetchBoundary from '@/components/boundary/HydrationPrefetchBoundary';
import DetailPageContent from '@/components/pages/DetailPage/DetailPageContent';

import { DetailSpotService } from '@/components/pages/DetailPage/detail/entities';

export default function DetailSpot({ id }: { id: string }) {
  return (
    <HydrationPrefetchBoundary fetchQueryOptions={[DetailSpotService.queryOptions(id)]}>
      <DetailPageContent id={id} />
    </HydrationPrefetchBoundary>
  );
}
