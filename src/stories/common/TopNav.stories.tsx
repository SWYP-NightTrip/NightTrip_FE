import TopNav from '@/components/common/TopNav';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof TopNav> = {
  title: 'design-system/TopNav',
  component: TopNav,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '상단 네비게이션 컴포넌트입니다. children 개수에 따라 자동으로 grid-cols가 설정되며, header 태그로 렌더링됩니다.',
      },
    },
  },
  argTypes: {
    children: {
      control: { type: 'object' },
      description: 'TopNav 내부에 표시될 자식 요소들',
    },
    className: {
      control: { type: 'text' },
      description: '추가 CSS 클래스',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TopNav>;

export const Default: Story = {
  render: () => {
    return (
      <TopNav className="w-[400px] h-[200px] bg-white border border-gray-200">
        <div className="w-full h-full header1 flex items-center justify-start pl-4">Headline</div>
        <div className="w-full h-full flex items-center justify-end pr-2">
          <SettingsButton />
        </div>
      </TopNav>
    );
  },
};

export const WithBackButton: Story = {
  render: () => {
    return (
      <TopNav className="w-[400px] h-[200px] bg-white border border-gray-200">
        <div className="w-full h-full flex items-center justify-start">
          <BackButton />
        </div>

        <div className="w-full h-full header1 flex items-center justify-center">Headline</div>

        <div className="w-full h-full flex items-center justify-end">
          <SettingsButton />
        </div>
      </TopNav>
    );
  },
};

function BackButton() {
  return (
    <button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition-colors">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
    </button>
  );
}

function SettingsButton() {
  return (
    <button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition-colors">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    </button>
  );
}
