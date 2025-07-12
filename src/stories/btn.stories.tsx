import { CustomButton } from '@/components/common/CustomButton';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof CustomButton> = {
  title: 'Components/CustomButton',
  component: CustomButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '기본 Button 컴포넌트를 확장한 CustomButton입니다. xl 사이즈 옵션이 추가되었습니다.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon', 'xl'],
      description: '버튼의 크기를 설정합니다. xl은 CustomButton에서 추가된 크기입니다.',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: '버튼의 스타일 변형을 설정합니다.',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '버튼의 비활성화 상태를 설정합니다.',
    },
    children: {
      control: { type: 'text' },
      description: '버튼 내부에 표시될 내용입니다.',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CustomButton>;

// 기본 스토리
export const Default: Story = {
  args: {
    children: '기본 버튼',
  },
};

// 다양한 크기 스토리
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <div className="flex gap-2 items-center">
        <CustomButton size="sm">Small</CustomButton>
        <CustomButton size="default">Default</CustomButton>
        <CustomButton size="lg">Large</CustomButton>
        <CustomButton size="xl">Extra Large</CustomButton>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'CustomButton에서 사용 가능한 모든 크기를 보여줍니다. xl 크기는 CustomButton에서 추가된 옵션입니다.',
      },
    },
  },
};

// 다양한 변형 스토리
export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <CustomButton variant="default">Default</CustomButton>
      <CustomButton variant="destructive">Destructive</CustomButton>
      <CustomButton variant="outline">Outline</CustomButton>
      <CustomButton variant="secondary">Secondary</CustomButton>
      <CustomButton variant="ghost">Ghost</CustomButton>
      <CustomButton variant="link">Link</CustomButton>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '사용 가능한 모든 버튼 변형을 보여줍니다.',
      },
    },
  },
};

// XL 크기 스토리
export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    children: 'Extra Large Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'CustomButton에서 추가된 xl 크기를 보여줍니다.',
      },
    },
  },
};

// 비활성화 상태 스토리
export const Disabled: Story = {
  render: () => (
    <div className="flex gap-2">
      <CustomButton disabled>Disabled</CustomButton>
      <CustomButton disabled size="xl">
        Disabled XL
      </CustomButton>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '비활성화된 버튼의 모습을 보여줍니다.',
      },
    },
  },
};

// 아이콘과 함께 사용하는 스토리
export const WithIcon: Story = {
  render: () => (
    <div className="flex gap-2">
      <CustomButton>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        Add Item
      </CustomButton>
      <CustomButton size="xl">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        Add Item XL
      </CustomButton>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '아이콘과 텍스트가 함께 있는 버튼을 보여줍니다.',
      },
    },
  },
};

// 인터랙션 테스트 스토리
export const Interactive: Story = {
  args: {
    children: '클릭해보세요',
    onClick: () => alert('버튼이 클릭되었습니다!'),
  },
  parameters: {
    docs: {
      description: {
        story: '클릭 이벤트가 작동하는지 테스트할 수 있습니다.',
      },
    },
  },
};
