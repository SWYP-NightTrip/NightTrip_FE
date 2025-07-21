import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Input from '@/components/common/Input';

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
