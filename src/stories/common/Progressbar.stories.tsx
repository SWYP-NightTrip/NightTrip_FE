import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Progressbar from '@/components/common/Progressbar';

const meta: Meta<typeof Progressbar> = {
  title: 'design-system/Progressbar',
  component: Progressbar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '진행률을 표시하는 프로그레스바 컴포넌트입니다. (그라데이션 색 수정 가능합니다.)',
      },
    },
  },
  argTypes: {
    percent: {
      control: { type: 'range', min: 0, max: 100 },
      description: '진행률 (0-100)',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Progressbar>;

// 기본 프로그레스바
export const Default: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      0% <Progressbar percent={0} />
      20% <Progressbar percent={20} />
      40% <Progressbar percent={40} />
      60% <Progressbar percent={60} />
      80% <Progressbar percent={80} />
      100%
      <Progressbar percent={100} />
    </div>
  ),
};
