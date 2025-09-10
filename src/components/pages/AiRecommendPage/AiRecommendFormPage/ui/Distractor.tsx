import ArrowDown from '@/icons/arrow_down.svg';
import { useState } from 'react';
import { cn } from '@/lib/shadcn/utils';
import OptionButtons from '@/components/common/OptionButtons';
import Button from '@/components/common/Button';
import InputGroup from '@/components/common/InputGroup';

interface DistractorOptions {
  title: string;
  description?: string;
  firstOptions?: { value: string; label: string }[];
  secondOptionsMap?: Record<string, { value: string; label: string }[]>;
  selected?: string | null;
  setSelected?: (value: string | null) => void;
  inputValue?: string;
  setInputValue?: (value: string) => void;
}

export default function Distractor({
  title,
  description,
  firstOptions,
  secondOptionsMap,
  setSelected,
  inputValue: inputValueProp,
  setInputValue,
}: DistractorOptions) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedSecond, setSelectedSecond] = useState<string | null>(null);
  const [localInputValue, setLocalInputValue] = useState(inputValueProp ?? '');

  // 현재 보여줄 옵션
  const currentOptions =
    step === 1
      ? firstOptions
      : selectedOption && secondOptionsMap?.[selectedOption]
        ? secondOptionsMap[selectedOption]
        : [];

  // 현재 선택값
  const currentValue = step === 1 ? selectedOption : selectedSecond;
  const setCurrentValue = step === 1 ? setSelectedOption : setSelectedSecond;

  // 2단계(세부 도시)에서 "다음" 버튼을 누르면 상위로 값 전달
  const handleSecondStepNext = () => {
    if (setSelected) setSelected(selectedSecond || null);
    setOpen(false);
  };

  // 1단계만 있는 경우(예산, 스타일 등) "다음" 버튼을 누르면 상위로 값 전달
  const handleSingleStepNext = () => {
    if (setSelected) setSelected(selectedOption || null);
    setOpen(false);
  };

  // input 박스용
  const handleInputNext = () => {
    if (setInputValue) setInputValue(localInputValue);
    setOpen(false);
  };

  return (
    <div className="bg-nt-neutral-white mx-4 rounded-[16px] overflow-hidden transition-all duration-300">
      <div
        onClick={() => setOpen(prev => !prev)}
        className="flex items-center justify-between h-[66px] px-4 py-5 gap-2 cursor-pointer"
      >
        <span className="header3">{title}</span>
        <button
          type="button"
          className="cursor-pointer hover:bg-nt-neutral-100 rounded-full w-8 h-8 flex items-center justify-center"
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
          {secondOptionsMap && (
            <p className="header4 mb-4">
              {step}단계 - {step === 1 ? '권역 선택' : '세부 도시 선택'}
            </p>
          )}
        </div>

        <span className="flex flex-col gap-8 body2 text-nt-neutral-600">
          {firstOptions && currentOptions ? (
            <OptionButtons
              options={currentOptions}
              value={currentValue}
              onChange={setCurrentValue}
            />
          ) : (
            <InputGroup.Wrapper>
              <InputGroup.Input
                type="text"
                value={localInputValue}
                onChange={e => setLocalInputValue(e.target.value)}
                className="w-full border rounded px-3 py-2"
                placeholder="원하는 내용을 입력해주세요"
              />
            </InputGroup.Wrapper>
          )}

          {/* 버튼 영역 */}
          {firstOptions && secondOptionsMap ? (
            step === 1 ? (
              <Button
                disabled={!selectedOption}
                onClick={() => {
                  setStep(2);
                  setSelectedSecond(null);
                }}
                className="bg-nt-secondary hover:bg-nt-secondary-200 active:bg-nt-secondary-600"
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
                  className="w-[152px] border-1 border-nt-secondary-500 bg-nt-neutral-white hover:bg-nt-secondary-200 text-nt-secondary-500 active:bg-nt-secondary-600"
                >
                  뒤로
                </Button>
                <Button
                  disabled={!selectedSecond}
                  onClick={handleSecondStepNext}
                  className="w-[152px] bg-nt-secondary hover:bg-nt-secondary-200 active:bg-nt-secondary-600"
                >
                  다음
                </Button>
              </div>
            )
          ) : firstOptions ? (
            <Button
              disabled={!selectedOption}
              onClick={handleSingleStepNext}
              className="bg-nt-secondary hover:bg-nt-secondary-200 active:bg-nt-secondary-600"
            >
              다음
            </Button>
          ) : (
            <Button
              disabled={!localInputValue}
              onClick={handleInputNext}
              className="bg-nt-secondary hover:bg-nt-secondary-200 active:bg-nt-secondary-600"
            >
              다음
            </Button>
          )}
        </span>
      </div>
    </div>
  );
}
