import HydrationPrefetchBoundary from '@/components/boundary/HydrationPrefetchBoundary';
import DetailPageContent from '@/components/pages/DetailPage/DetailPageContent';

import { DetailSpotService } from '@/components/pages/DetailPage/detail/entities';

import DetailErrorBoundary from '@/components/pages/DetailPage/ui/DetailErrorBoundary';

export default function DetailSpot({ id }: { id: string }) {
  return (
    <HydrationPrefetchBoundary fetchQueryOptions={[DetailSpotService.queryOptions(id)]}>
      <DetailErrorBoundary>
        <DetailPageContent id={id} />
      </DetailErrorBoundary>
    </HydrationPrefetchBoundary>
  );
}
