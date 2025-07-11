import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { CustomButton } from '@/components/common/CustomButton';

const meta = {
  title: 'UI/CustomButton',
  component: CustomButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: '버튼의 스타일 변형',
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'xl', 'icon'],
      description: '버튼의 크기',
    },
    disabled: {
      control: 'boolean',
      description: '버튼 비활성화 여부',
    },
    asChild: {
      control: 'boolean',
      description: '자식 요소를 렌더링할지 여부',
    },
    children: {
      control: 'text',
      description: '버튼 내부에 표시될 텍스트 또는 JSX',
    },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof CustomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 버튼
export const Default: Story = {
  args: {
    children: 'Default Button',
    variant: 'default',
    size: 'default',
  },
};

// Destructive 버튼
export const Destructive: Story = {
  args: {
    children: 'Destructive Button',
    variant: 'destructive',
  },
};

// Outline 버튼
export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
};

// Secondary 버튼
export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

// Ghost 버튼
export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
};

// Link 버튼
export const Link: Story = {
  args: {
    children: 'Link Button',
    variant: 'link',
  },
};

// Small 버튼
export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
};

// Large 버튼
export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
  },
};

// XLarge 버튼
export const XLarge: Story = {
  args: {
    children: 'XLarge Button',
    size: 'xl',
  },
};

// Icon 버튼 (예시)
export const IconButton: Story = {
  args: {
    children: 'Icon', // 또는 <YourIconComponent />
    size: 'icon',
  },
};

// Disabled 버튼
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};
