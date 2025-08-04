import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { X, Check, CircleAlert } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/shadcn/utils';

import InputGroup from '@/components/common/InputGroup';

const meta: Meta<typeof InputGroup> = {
  title: 'design-system/InputGroup',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## InputGroup 컴포넌트

InputGroup은 입력 필드와 오른쪽 아이콘을 조합한 컴포넌트입니다. Chakra UI의 InputGroup 패턴을 참고하여 설계되었습니다.

### InputGroup.Wrapper
- **역할**: Input과 RightElement를 감싸는 컨테이너
- **특징**: 
  - \`position: relative\`로 설정되어 내부 요소들의 절대 위치 지정 가능
  - \`display: flex\`로 설정되어 Input과 RightElement를 가로로 배치
- **Props**: 모든 div 요소의 기본 props 지원

### InputGroup.Input
- **역할**: 실제 입력 필드를 담당하는 컴포넌트
- **특징**:
  - 기본 Input 컴포넌트를 확장
  - \`pr-[56px]\` 클래스로 오른쪽 아이콘 공간 확보
  - 상태별 스타일링 지원 (default, success, error)
- **Props**: Input 컴포넌트의 모든 props 지원

### InputGroup.RightElement
- **역할**: 입력 필드 오른쪽에 위치하는 아이콘 요소
- **특징**:
  - \`position: absolute\`로 오른쪽에 고정
  - \`right: 0\`, \`top: 50%\`, \`transform: translateY(-50%)\`로 중앙 정렬
  - 클릭 이벤트 지원 (X 아이콘으로 입력값 지우기 등)
  - 상태별 아이콘 표시 (Check, CircleAlert 등)
- **Props**: 
  - 모든 div 요소의 기본 props 지원
  - \`onClick\` 이벤트 핸들러 지원
  - \`className\`으로 스타일 커스터마이징 가능

### 사용 예시
\`\`\`tsx
<InputGroup.Wrapper>
  <InputGroup.Input placeholder="검색어를 입력하세요" />
  <InputGroup.RightElement onClick={handleClear}>
    <X />
  </InputGroup.RightElement>
</InputGroup.Wrapper>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

// 기본 입력 필드
export const Default: Story = {
  render: () => {
    return (
      <InputGroup.Wrapper>
        <InputGroup.Input placeholder="텍스트를 입력하세요" />
      </InputGroup.Wrapper>
    );
  },
};

// 비활성화된 입력 필드
export const Disabled: Story = {
  render: () => {
    return (
      <InputGroup.Wrapper>
        <InputGroup.Input
          disabled
          placeholder="텍스트를 입력하세요"
          value={'입력할 수 없습니다.'}
        />
      </InputGroup.Wrapper>
    );
  },
};

// 크기가 다른 입력 필드들
export const ShapeVariant: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <InputGroup.Wrapper>
        <InputGroup.Input placeholder="좁은 너비" className="w-[200px]" />
      </InputGroup.Wrapper>
      <InputGroup.Wrapper>
        <InputGroup.Input placeholder="기본 너비" className="w-[343px]" />
      </InputGroup.Wrapper>
      <InputGroup.Wrapper>
        <InputGroup.Input placeholder="넓은 너비" className="w-[500px]" />
      </InputGroup.Wrapper>
      <InputGroup.Wrapper>
        <InputGroup.Input className="rounded-full" />
      </InputGroup.Wrapper>
      <InputGroup.Wrapper>
        <InputGroup.Input className="rounded-none" />
      </InputGroup.Wrapper>
    </div>
  ),
};

export const StatesWithIcon: Story = {
  render: () => {
    const [inputValue, setInputValue] = useState('');
    const [inputState, setInputState] = useState<'default' | 'success' | 'error'>('default');

    // 상태 변경을 위한 버튼 클릭 핸들러
    const handleStateChange = (state: 'default' | 'success' | 'error') => {
      setInputState(state);
    };

    return (
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <button
            onClick={() => handleStateChange('default')}
            className={cn('px-4 py-2 border rounded', inputState === 'default' && 'bg-gray-100')}
          >
            Default
          </button>
          <button
            onClick={() => handleStateChange('success')}
            className={cn('px-4 py-2 border rounded', inputState === 'success' && 'bg-gray-100')}
          >
            Success
          </button>
          <button
            onClick={() => handleStateChange('error')}
            className={cn('px-4 py-2 border rounded', inputState === 'error' && 'bg-gray-100')}
          >
            Error
          </button>
        </div>

        <InputGroup.Wrapper>
          <InputGroup.Input
            placeholder="텍스트를 입력하세요."
            className={cn(
              'pr-[56px]',
              inputState === 'success' && 'border-nt-success focus-visible:border-nt-success',
              inputState === 'error' && 'border-nt-error focus-visible:border-nt-error',
            )}
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          {inputValue && inputState === 'default' && (
            <InputGroup.RightElement
              className="cursor-pointer text-nt-neutral-400"
              onClick={() => setInputValue('')}
            >
              <X />
            </InputGroup.RightElement>
          )}
          {inputState === 'success' && (
            <InputGroup.RightElement>
              <Check className="text-nt-success" />
            </InputGroup.RightElement>
          )}
          {inputState === 'error' && (
            <InputGroup.RightElement>
              <CircleAlert className="text-nt-error" />
            </InputGroup.RightElement>
          )}
        </InputGroup.Wrapper>
      </div>
    );
  },
};
