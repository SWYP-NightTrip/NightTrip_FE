'use client';

import { useEffect, useState } from 'react';

import Loading from '@/components/pages/DetailPage/ui/Loading';

interface MapProps {
  latitude: number;
  longitude: number;
}

export default function Map({ latitude, longitude }: MapProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const checkNaverMapLoaded = () => {
      if (
        typeof window !== 'undefined' &&
        window.naver &&
        window.naver.maps &&
        window.naver.maps.Map
      ) {
        setIsLoading(true);
        initializeMap();
      }
    };

    const initializeMap = () => {
      try {
        const map = new window.naver.maps.Map('map', {
          center: new window.naver.maps.LatLng(latitude, longitude),
          zoom: 15,
        });

        new window.naver.maps.Marker({
          position: new window.naver.maps.LatLng(latitude, longitude),
          map: map,
        });
      } catch (error: unknown) {
        console.error(error);
        setIsError(true);
      }
    };

    checkNaverMapLoaded();
  }, [latitude, longitude]);

  return (
    <div id="map" className="w-full h-[400px]">
      {isLoading && (
        <div className="w-full h-[400px] flex items-center justify-center">
          <Loading />
        </div>
      )}
      {isError && <div className="flex items-center justify-center">지도 로딩 실패</div>}
    </div>
  );
}
