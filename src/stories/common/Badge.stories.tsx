import Badge from '@/components/common/Badge';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Badge> = {
  title: 'design-system/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '뱃지 컴포넌트입니다. 추가 className을 통해 사이즈 및 색상을 변경할 수 있습니다.',
      },
    },
  },
  argTypes: {
    children: {
      control: { type: 'object' },
      description: 'Badge 내부에 표시될 자식 요소들',
    },
    className: {
      control: { type: 'text' },
      description: '추가 CSS 클래스',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Badge>Lv.4</Badge>
      <Badge className='w-[100px]'>Lv.4</Badge>
    </div>
  ),
};

export const ColorVariant: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Badge>Lv.4</Badge>
      <Badge className="text-nt-neutral-white bg-nt-secondary-500 border-none">Lv.4</Badge>
      <Badge className="text-nt-neutral-white bg-nt-primary border-none">Lv.4</Badge>
      <Badge className="text-nt-neutral-white nt-gradient-primary-to-secondary border-none">
        Lv.5
      </Badge>
    </div>
  ),
};
