import Nav from '@/components/layout/Nav';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Nav> = {
  title: 'design-system/Nav',
  component: Nav,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Polymorphic Nav 컴포넌트입니다. children 개수에 따라 자동으로 grid-cols가 설정되며, 다양한 HTML 요소로 렌더링할 수 있습니다.',
      },
    },
  },
  argTypes: {
    tag: {
      control: { type: 'select' },
      options: ['nav', 'header', 'footer', 'div', 'section'],
      description: '렌더링할 HTML 요소',
    },
    children: {
      control: { type: 'object' },
      description: 'Nav 내부에 표시될 자식 요소들',
    },
    className: {
      control: { type: 'text' },
      description: '추가 CSS 클래스',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Nav>;

// 2개
export const TwoItems: Story = {
  render: () => (
    <Nav className="w-[500px] h-[200px] gap-x-2">
      <div className="w-full h-full flex items-center justify-center bg-blue-200">01</div>
      <div className="w-full h-full flex items-center justify-center bg-blue-200">02</div>
    </Nav>
  ),
};

// 5개
export const FiveItems: Story = {
  render: () => (
    <Nav className="w-[500px] h-[200px] gap-x-2">
      <div className="w-full h-full flex items-center justify-center bg-blue-200">01</div>
      <div className="w-full h-full flex items-center justify-center bg-blue-200">02</div>
      <div className="w-full h-full flex items-center justify-center bg-blue-200">03</div>
      <div className="w-full h-full flex items-center justify-center bg-blue-200">04</div>
      <div className="w-full h-full flex items-center justify-center bg-blue-200">05</div>
    </Nav>
  ),
};

// 12개
export const TwelveItems: Story = {
  render: () => (
    <Nav className="w-[500px] h-[200px] gap-x-2">
      <div className="w-full h-full flex items-center justify-center bg-blue-200">02</div>
      <div className="w-full h-full flex items-center justify-center bg-blue-200">03</div>
      <div className="w-full h-full flex items-center justify-center bg-blue-200">04</div>
      <div className="w-full h-full flex items-center justify-center bg-blue-200">05</div>
      <div className="w-full h-full flex items-center justify-center bg-blue-200">06</div>
      <div className="w-full h-full flex items-center justify-center bg-blue-200">07</div>
      <div className="w-full h-full flex items-center justify-center bg-blue-200">08</div>
      <div className="w-full h-full flex items-center justify-center bg-blue-200">09</div>
      <div className="w-full h-full flex items-center justify-center bg-blue-200">10</div>
      <div className="w-full h-full flex items-center justify-center bg-blue-200">11</div>
      <div className="w-full h-full flex items-center justify-center bg-blue-200">12</div>
    </Nav>
  ),
};

// header
export const Header: Story = {
  render: () => (
    <Nav as="header" className="w-[500px] h-[200px] border-2 border-red-500">
      <div className="w-full h-full flex items-center justify-start">01</div>
      <div className="w-full h-full flex items-center justify-end">02</div>
    </Nav>
  ),
};
