'use client';

import Header from '@/components/pages/AiRecommendPage/ui/Header';
import Image from 'next/image';
import Distractor from '@/components/pages/AiRecommendPage/AiRecommendFormPage/ui/Distractor';
import Button from '@/components/common/Button';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { API_URL } from '@/utils/constant/url';

const CityOptions = [
  { value: 'capital', label: '수도권 (서울, 인천, 경기)' },
  { value: 'gangwon', label: '강원권' },
  { value: 'chungcheong', label: '충청권 (대전, 세종, 충북, 충남)' },
  { value: 'jeolla', label: '전라권 (광주, 전북, 전남)' },
  { value: 'gyeongsang', label: '경상권 (부산, 대구, 울산, 경북, 경남)' },
];

const CityDetailOptionsMap: Record<string, { value: string; label: string }[]> = {
  capital: [
    { value: 'seoul', label: '서울' },
    { value: 'incheon', label: '인천 (송도, 차이나타운, 월미도)' },
    { value: 'suwon', label: '수원' },
    { value: 'gapyeong&yangpyeong', label: '가평·양평' },
    { value: 'paju', label: '파주' },
    { value: 'youngin', label: '용인' },
    { value: 'pocheon', label: '포천 (아울렛, 레저)' },
    { value: 'namyangju', label: '남양주' },
  ],
  gangwon: [
    { value: 'gangneung', label: '강릉' },
    { value: 'sokcho', label: '속초' },
    { value: 'yangyang', label: '양양' },
    { value: 'pyeongchang', label: '평창' },
    { value: 'chuncheon', label: '춘천' },
  ],
  chungcheong: [
    { value: 'daejeon', label: '대전' },
    { value: 'sejong', label: '세종' },
    { value: 'cheongju', label: '청주' },
    { value: 'boryeong', label: '보령' },
    { value: 'jecheon&danyang', label: '제천·단양' },
    { value: 'gongju&buyeo', label: '공주·부여' },
    { value: 'cheonan', label: '천안' },
  ],
  jeolla: [
    { value: 'jeonju', label: '전주' },
    { value: 'gwangju', label: '광주' },
    { value: 'yeosu', label: '여수' },
    { value: 'suncheon', label: '순천' },
    { value: 'mokpo', label: '목포' },
  ],
  gyeongsang: [
    { value: 'busan', label: '부산' },
    { value: 'daegu', label: '대구' },
    { value: 'gyeongju', label: '경주' },
    { value: 'ulsan', label: '울산' },
    { value: 'tongyeong', label: '통영' },
    { value: 'pohang', label: '포항' },
  ],
};

const BudgetOptions = [
  { value: 'under100k', label: '10만 원 이하' },
  { value: '100k-200k', label: '10만 원 - 20만 원' },
  { value: '200k-300k', label: '20만 원 - 30만 원' },
  { value: '300k-400k', label: '30만 원 - 40만 원' },
  { value: '400k-500k', label: '40만 원 - 50만 원' },
  { value: 'over500k', label: '50만 원 이상' },
];

const TravelStyleOptions = [
  { value: 'experience', label: '야간 축제 등 체험 선호' },
  { value: 'comparison', label: '낮 / 밤 비교하기' },
  { value: 'healing', label: '별, 자연과 함께 힐링하기' },
  { value: 'driving', label: '드라이브 / 밤 산책 선호' },
  { value: 'nightTour', label: '지역별 밤 여행 (랜드마크 야간 개장 등)' },
  { value: 'cultural', label: '심야 문화 선호 (라이브 카페, 펍 등)' },
  { value: 'food', label: '맛집 투어' },
];

const TravelGroupOptions = [
  { value: 'solo', label: '혼자 여행' },
  { value: 'friends', label: '친구와 함께' },
  { value: 'couple', label: '연인과 함께' },
  { value: 'spouse', label: '배우자와 함께' },
  { value: 'parents', label: '부모님과 함께' },
  { value: 'family', label: '온 가족 여행' },
  { value: 'etc', label: '그 외' },
];

export default function AiRecommendFormPageContent() {
  const router = useRouter();

  const [form, setForm] = useState({
    cityId: null as string | null,
    budgetLevel: null as string | null,
    purpose: null as string | null,
    groupSize: null as string | null,
    extras: '',
  });

  const handleRecommend = async () => {
    try {
      const res = await fetch(`${API_URL}/recommend/sections`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          cityId: cityLabel,
          purpose: purposeLabel,
          budgetLevel: budgetLabel,
          groupSize: groupSizeLabel,
          extras: form.extras,
        }),
      });

      if (!res.ok) {
        alert('AI 추천 요청에 실패했습니다.');
        return;
      }
      const result = await res.json();

      sessionStorage.setItem('recommendResults', JSON.stringify(result.data));

      router.push('/ai-recommend/results');
    } catch (error) {
      console.log('네트워크 오류가 발생했습니다.', error);
    }
  };

  const getLabel = (
    options: { value: string; label: string }[] | undefined,
    value: string | null,
  ) => {
    return options?.find(option => option.value === value)?.label || '';
  };

  const cityLabel = (() => {
    const region = Object.keys(CityDetailOptionsMap).find(region =>
      CityDetailOptionsMap[region].some(opt => opt.value === form.cityId),
    );
    if (!region) return '';
    return CityDetailOptionsMap[region].find(opt => opt.value === form.cityId)?.label ?? '';
  })();
  const budgetLabel = getLabel(BudgetOptions, form.budgetLevel);
  const purposeLabel = getLabel(TravelStyleOptions, form.purpose);
  const groupSizeLabel = getLabel(TravelGroupOptions, form.groupSize);

  return (
    <div className="flex flex-col items-center bg-nt-primary-50 min-h-screen">
      <Header title="AI 추천" />
      <div>
        <div className="header4 flex px-5 gap-2 pt-[50px] pb-8 text-nt-neutral-400">
          <Image src="/images/rabbit_glasses.png" alt="rabbit_glasses" width={60} height={60} />
          <div>
            <p className="block">원하는 것을 선택해주시면</p>
            <p className="block">나잇트립 AI가 맞춤 추천을 해드릴게요!</p>
          </div>
        </div>

        <div className="flex flex-col gap-6.5 pb-4">
          <Distractor
            title="목적지"
            description="1곳만 선택해주세요 😊"
            firstOptions={CityOptions}
            secondOptionsMap={CityDetailOptionsMap}
            selected={form.cityId}
            setSelected={cityId => setForm(prev => ({ ...prev, cityId }))}
          />
          <Distractor
            title="여행 예산"
            description="생각하시는 여행 예산을 선택해주세요 🐰✨"
            firstOptions={BudgetOptions}
            selected={form.budgetLevel}
            setSelected={budgetLevel => setForm(prev => ({ ...prev, budgetLevel }))}
          />
          <Distractor
            title="여행 스타일"
            description="원하시는 여행 스타일을 마음 껏 골라주세요 🌙"
            firstOptions={TravelStyleOptions}
            selected={form.purpose}
            setSelected={purpose => setForm(prev => ({ ...prev, purpose }))}
          />
          <Distractor
            title="여행 인원"
            description="여행 인원을 선택해주세요 🩷"
            firstOptions={TravelGroupOptions}
            selected={form.groupSize}
            setSelected={groupSize => setForm(prev => ({ ...prev, groupSize }))}
          />
          <Distractor
            title="그 외 원하는 것"
            description="그 외에 원하는 것이 있으시다면 기재해주세요 🩷"
            inputValue={form.extras}
            setInputValue={extras => setForm(prev => ({ ...prev, extras }))}
          />
        </div>

        <div className="px-5 py-4">
          <Button
            onClick={() => handleRecommend()}
            disabled={!(form.cityId && form.budgetLevel && form.groupSize && form.purpose)}
          >
            AI 추천 보러가기!
          </Button>
        </div>
      </div>
    </div>
  );
}
