'use client';

import { useState, useEffect } from 'react';

interface MapProps {
  latitude: number;
  longitude: number;
}

export default function Map({ latitude, longitude }: MapProps) {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // 스크립트를 동적으로 로드
    const loadNaverMapScript = () => {
      return new Promise<void>((resolve, reject) => {
        if (typeof window !== 'undefined' && window.naver && window.naver.maps) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('네이버 지도 스크립트 로드 실패'));
        document.head.appendChild(script);
      });
    };

    const initializeMap = async () => {
      try {
        await loadNaverMapScript();

        const mapOptions = {
          center: new window.naver.maps.LatLng(latitude, longitude),
          zoom: 15,
        };

        const map = new window.naver.maps.Map('map', mapOptions);

        new window.naver.maps.Marker({
          position: new window.naver.maps.LatLng(latitude, longitude),
          map: map,
        });

        setMapLoaded(true);
      } catch (error) {
        console.error('지도 초기화 실패:', error);
        setIsError(true);
      }
    };

    initializeMap();
  }, [latitude, longitude]);

  if (isError) {
    return (
      <div className="flex items-center justify-center h-[400px] text-gray-500">
        지도를 불러올 수 없습니다.
      </div>
    );
  }

  return (
    <div id="map" style={{ width: '100%', height: '400px' }}>
      {!mapLoaded && (
        <div className="flex items-center justify-center h-full">
          <div className="text-gray-500">지도 로딩 중...</div>
        </div>
      )}
    </div>
  );
}
