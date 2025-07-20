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
  },
} satisfies Meta<TabsStoryProps>;

export default meta;
type Story = StoryObj<TabsStoryProps>;

export const Default: Story = {

  render: function Render() {
    return (
      <div className='flex flex-col gap-4'>
        <Tabs defaultTab='tab1' className='w-[400px]'>
          <TabsList>
            <TabsTrigger value="tab1">첫번째 탭</TabsTrigger>
            <TabsTrigger value="tab2">두번째 탭</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">첫번째 탭 내용입니다. (defaultTab = tab1)</TabsContent>
          <TabsContent value="tab2">두번째 탭 내용입니다.</TabsContent>
        </Tabs>
        <Tabs defaultTab='tab2' className='w-[400px]'>
          <TabsList>
            <TabsTrigger value="tab1">첫번째 탭</TabsTrigger>
            <TabsTrigger value="tab2">두번째 탭 </TabsTrigger>
            <TabsTrigger value="tab3">세번째 탭</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">첫번째 탭 내용입니다.</TabsContent>
          <TabsContent value="tab2">두번째 탭 내용입니다. (defaultTab = tab2)</TabsContent>
          <TabsContent value="tab3">세번째 탭 내용입니다.</TabsContent>
        </Tabs>
        <Tabs defaultTab='tab3' className='w-[400px]'>
          <TabsList>
            <TabsTrigger value="tab1">첫번째 탭</TabsTrigger>
            <TabsTrigger value="tab2">두번째 탭</TabsTrigger>
            <TabsTrigger value="tab3">세번째 탭</TabsTrigger>
            <TabsTrigger value="tab4">네번째 탭</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">첫번째 탭 내용입니다.</TabsContent>
          <TabsContent value="tab2">두번째 탭 내용입니다.</TabsContent>
          <TabsContent value="tab3">세번째 탭 내용입니다. (defaultTab = tab3)</TabsContent>
          <TabsContent value="tab4">네번째 탭 내용입니다.</TabsContent>
        </Tabs>
      </div>
    );
  },
};
