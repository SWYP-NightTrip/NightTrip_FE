import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Button from '@/components/common/Button';
import Image from 'next/image';
import icon from '../../../public/images/fallback/partnership_fallback.png';

const meta: Meta<typeof Button> = {
  title: 'design-system/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'className을 통해 확장 가능한 기본 버튼 컴포넌트',
    docs: {
      description: {
        component:
          '기본 높이가 46px인 버튼 컴포넌트입니다. className을 통해 크기와 스타일을 자유롭게 확장할 수 있습니다.',
      },
    },
  },
  decorators: [
    Story => (
      <div className="w-[343px]">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

// 기본 버튼
export const Default: Story = {
  args: {
    children: '기본 버튼',
  },
};

// 상태별 버튼
export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Button>기본</Button>
      <Button isActive>선택됨</Button>
      <Button disabled>비활성화</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '버튼의 기본, 선택됨, 비활성화 상태를 보여줍니다.',
      },
    },
  },
};

// 상호작용 상태
export const InteractionStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Button>Hover 해보세요</Button>
      <Button>클릭 해보세요</Button>
      <Button>포커스 해보세요</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '버튼의 hover, active, focus 상태를 보여줍니다.',
      },
    },
  },
};

// 크기 변형
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Button>기본 크기 (w-full, h-[46px])</Button>
      <Button className="w-[200px]">커스텀 너비</Button>
      <Button className="w-[60px] h-[60px] aspect-square bg-nt-primary-50">
        <Image src={icon} alt="아이콘" width={40} height={40} />
      </Button>
      <Button className="w-[50px] h-[50px] rounded-full bg-nt-primary-50">
        <Image src={icon} alt="아이콘" width={40} height={40} />
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '버튼의 다양한 크기 변형을 보여줍니다. className을 통해 너비와 높이를 자유롭게 조절할 수 있습니다.',
      },
    },
  },
};

// 클릭 이벤트
export const ClickEvent: Story = {
  args: {
    children: '클릭해보세요',
    onClick: () => alert('버튼이 클릭되었습니다!'),
  },
  parameters: {
    docs: {
      description: {
        story: '클릭 이벤트 핸들링을 보여줍니다.',
      },
    },
  },
};
