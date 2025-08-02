import { forwardRef } from 'react';
import InputGroup from '@/components/common/InputGroup';

interface SearchInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(({ onChange }, ref) => {
  const handleReset = () => {
    if (ref && typeof ref === 'object' && ref.current) {
      ref.current.value = '';
    }
  };

  return (
    <InputGroup.Wrapper>
      <InputGroup.Input
        ref={ref}
        className="rounded-full"
        placeholder="여행지, 장소, 맛집, 숙소, 야경"
        onChange={onChange}
      />
      <InputGroup.RightElement>
        <button
          onClick={handleReset}
          className="text-nt-neutral-400 text-sm font-normal leading-[20px] tracking-[0.014px]"
        >
          리셋
        </button>
      </InputGroup.RightElement>
    </InputGroup.Wrapper>
  );
});

SearchInput.displayName = 'SearchInput';

export default SearchInput;
