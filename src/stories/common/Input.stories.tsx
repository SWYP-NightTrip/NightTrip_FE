import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Input from '@/components/common/Input';
import Icon from '@/components/common/Icon';
import { X, Check, CircleAlert } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/shadcn/utils';

const meta: Meta<typeof Input> = {
  title: 'design-system/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '기본 입력 필드 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    placeholder: '텍스트를 입력하세요',
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: [
        'button',
        'checkbox',
        'color',
        'date',
        'datetime-local',
        'email',
        'file',
        'hidden',
        'image',
        'month',
        'number',
        'password',
        'radio',
        'range',
        'reset',
        'search',
        'submit',
        'tel',
        'text',
        'time',
        'url',
        'week',
      ],
      description: 'Input 컴포넌트의 type입니다.',
    },
    className: {
      control: { type: 'text' },
      description: '추가 CSS 클래스',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// 기본 입력 필드
export const Default: Story = {
  args: {
    placeholder: '텍스트를 입력하세요',
  },
};

// 비활성화된 입력 필드
export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: '비활성화된 입력 필드',
    value: '입력할 수 없습니다',
  },
};

// 크기가 다른 입력 필드들
export const ShapeVariant: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Input className="w-[200px]" placeholder="좁은 너비" />
      <Input className="w-[343px]" placeholder="기본 너비" />
      <Input className="w-[500px]" placeholder="넓은 너비" />
      <Input className="rounded-full" placeholder="rounded-full" />
      <Input className="rounded-none" placeholder="rounded-none" />
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

        <div className="relative">
          <Input
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
            <Icon className="cursor-pointer text-nt-neutral-400" onClick={() => setInputValue('')}>
              <X />
            </Icon>
          )}
          {inputState === 'success' && (
            <Icon>
              <Check className="text-nt-success" />
            </Icon>
          )}
          {inputState === 'error' && (
            <Icon>
              <CircleAlert className="text-nt-error" />
            </Icon>
          )}
        </div>
      </div>
    );
  },
};
