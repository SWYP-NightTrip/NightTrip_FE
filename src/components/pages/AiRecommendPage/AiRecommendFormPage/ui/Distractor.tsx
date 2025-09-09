import ArrowDown from '@/icons/arrow_down.svg';
import { useState } from 'react';
import { cn } from '@/lib/shadcn/utils';
import OptionButtons from '@/components/common/OptionButtons';
import Button from '@/components/common/Button';

// const firstOptions = [
//   { value: 'capital', label: '수도권 (서울, 인천, 경기)' },
//   { value: 'gangwon', label: '강원권' },
//   { value: 'chungcheong', label: '충청권 (대전, 세종, 충북, 충남)' },
//   { value: 'jeolla', label: '전라권 (광주, 전북, 전남)' },
//   { value: 'gyeongsang', label: '경상권 (부산, 대구, 울산, 경북, 경남)' },
// ];

// // value에 따라 다른 옵션 예시
// const secondOptionsMap: Record<string, { value: string; label: string }[]> = {
//   capital: [
//     { value: 'seoul', label: '서울' },
//     { value: 'incheon', label: '인천 (송도, 차이나타운, 월미도)' },
//     { value: 'suwon', label: '수원' },
//     { value: 'gapyeong&yangpyeong', label: '가평·양평' },
//     { value: 'paju', label: '파주' },
//     { value: 'youngin', label: '용인' },
//     { value: 'pocheon', label: '포천 (아울렛, 레저)' },
//     { value: 'namyangju', label: '남양주' },
//   ],
//   gangwon: [
//     { value: 'gangneung', label: '강릉' },
//     { value: 'sokcho', label: '속초' },
//     { value: 'yangyang', label: '양양' },
//     { value: 'pyeongchang', label: '평창' },
//     { value: 'chuncheon', label: '춘천' },
//   ],
//   chungcheong: [
//     { value: 'daejeon', label: '대전' },
//     { value: 'sejong', label: '세종' },
//     { value: 'cheongju', label: '청주' },
//     { value: 'boryeong', label: '보령' },
//     { value: 'jecheon&danyang', label: '제천·단양' },
//     { value: 'gongju&buyeo', label: '공주·부여' },
//     { value: 'cheonan', label: '천안' },
//   ],
//   jeolla: [
//     { value: 'jeonju', label: '전주' },
//     { value: 'gwangju', label: '광주' },
//     { value: 'yeosu', label: '여수' },
//     { value: 'suncheon', label: '순천' },
//     { value: 'mokpo', label: '목포' },
//   ],
//   gyeongsang: [
//     { value: 'busan', label: '부산' },
//     { value: 'daegu', label: '대구' },
//     { value: 'gyeongju', label: '경주' },
//     { value: 'ulsan', label: '울산' },
//     { value: 'tongyeong', label: '통영' },
//     { value: 'pohang', label: '포항' },
//   ],
// };

interface DistractorOptions {
  title: string;
  description?: string;
  firstOptions: { value: string; label: string }[];
  secondOptionsMap?: Record<string, { value: string; label: string }[]>;
}

export default function Distractor({ title, description, firstOptions, secondOptionsMap }: DistractorOptions) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedSecond, setSelectedSecond] = useState<string | null>(null);

  // 현재 보여줄 옵션
  const currentOptions =
    step === 1
      ? firstOptions
      : selectedOption && secondOptionsMap?.[selectedOption]
        ? secondOptionsMap?.[selectedOption]
        : [];

  // 현재 선택값
  const currentValue = step === 1 ? selectedOption : selectedSecond;
  const setCurrentValue = step === 1 ? setSelectedOption : setSelectedSecond;

  return (
    <div className="bg-nt-neutral-white mx-4 rounded-[16px] overflow-hidden transition-all duration-300">
      <div className="flex items-center justify-between h-[66px] px-4 py-5 gap-2">
        <span className="header3">{title}</span>
        <button
          type="button"
          className="cursor-pointer hover:bg-nt-neutral-100 rounded-full w-8 h-8 flex items-center justify-center"
          onClick={() => setOpen(prev => !prev)}
          aria-label={`${title} 선택 영역 열기`}
        >
          <ArrowDown className={cn('transition-all', open && 'rotate-180')} />
        </button>
      </div>

      <div
        className={cn(
          'py-4 transition-all duration-300 border-t border-nt-neutral-250 mx-4',
          open ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none py-0',
        )}
      >
        <div>
          <p className="header5 mb-8 text-sm">{description}</p>
          <p className="header4 mb-4">
            {step}단계 - {step === 1 ? '권역 선택' : '세부 도시 선택'}
          </p>
        </div>

        <span className="flex flex-col gap-8 body2 text-nt-neutral-600">
          <OptionButtons options={currentOptions} value={currentValue} onChange={setCurrentValue} />
          {step === 1 ? (
            <Button
              disabled={!selectedOption}
              onClick={() => {
                setStep(2);
                setSelectedSecond(null);
              }}
            >
              다음
            </Button>
          ) : (
            <div className="flex gap-2.5">
              <Button
                onClick={() => {
                  setStep(1);
                  setSelectedSecond(null);
                }}
                className="w-[152px]"
              >
                뒤로
              </Button>
              <Button
                disabled={!selectedSecond}
                onClick={() => {
                  // 여기서 API 요청 등 원하는 동작 수행
                  alert(`선택된 지역: ${selectedOption}, 세부: ${selectedSecond}`);
                }}
                className="w-[152px]"
              >
                다음
              </Button>
            </div>
          )}
        </span>
      </div>
    </div>
  );
}
