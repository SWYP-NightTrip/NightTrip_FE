import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/common/Tabs';

interface TabsStoryProps extends React.ComponentProps<typeof Tabs> {
  tabCount?: number;
}

const meta = {
  title: 'design-system/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultTab: {
      control: 'text',
      description: '초기 선택될 탭의 value',
    },
    className: {
      control: 'text',
      description: '컴포넌트에 적용할 추가 클래스',
    },
    tabCount: {
      control: { type: 'range', min: 2, max: 10 },
      description: '탭의 개수',
    },
  },
} satisfies Meta<TabsStoryProps>;

export default meta;
type Story = StoryObj<TabsStoryProps>;

export const Default: Story = {
  args: {
    defaultTab: 'tab1',
    className: 'w-[400px]',
    tabCount: 2,
  },
  render: function Render(args) {
    return (
      <Tabs {...args}>
        <TabsList>
          <TabsTrigger value="tab1">첫번째 탭</TabsTrigger>
          <TabsTrigger value="tab2">두번째 탭</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">첫번째 탭 내용입니다.</TabsContent>
        <TabsContent value="tab2">두번째 탭 내용입니다.</TabsContent>
      </Tabs>
    );
  },
};

export const MultipleTabs: Story = {
  args: {
    defaultTab: 'tab1',
    className: 'w-[600px]',
    tabCount: 3,
  },
  render: function Render(args) {
    const { tabCount = 3, ...tabProps } = args;

    interface TabItem {
      value: string;
      label: string;
      content: string;
    }

    const tabs: TabItem[] = Array.from(
      { length: tabCount },
      (_, i): TabItem => ({
        value: `tab${i + 1}`,
        label: `${i + 1}번째`,
        content: `${i + 1}번째 탭 내용입니다.`,
      }),
    );

    return (
      <Tabs {...tabProps}>
        <TabsList>
          {tabs.map(tab => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map(tab => (
          <TabsContent key={tab.value} value={tab.value}>
            {tab.content}
          </TabsContent>
        ))}
      </Tabs>
    );
  },
};

export const WithRichContent: Story = {
  args: {
    defaultTab: 'account',
    className: 'w-[400px]',
  },
  render: function Render(args) {
    return (
      <Tabs {...args}>
        <TabsList>
          <TabsTrigger value="account">계정</TabsTrigger>
          <TabsTrigger value="settings">설정</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">계정 정보</h3>
            <p>이메일: user@example.com</p>
            <p>가입일: 2024-01-01</p>
          </div>
        </TabsContent>
        <TabsContent value="settings">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">설정</h3>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="notifications" />
              <label htmlFor="notifications">알림 받기</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="marketing" />
              <label htmlFor="marketing">마케팅 수신 동의</label>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    );
  },
};