import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta = {
  title: 'design-system/typography',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <h1 className="header1">H1 Header1 Font 프리텐다드 24px Semibold line height 32 0</h1>
      <h2 className="header2">H2 Header2 Font 프리텐다드 20px Semibold line height 28 0</h2>
      <h3 className="header3">H3 Header3 Font 프리텐다드 18px Semibold line height 26 0</h3>
      <p className="body1">B1 Body1 Font 프리텐다드 16px Regular line height 24 0</p>
      <p className="body2">B2 Body2 Font 프리텐다드 14px Regular line height 20 0.1%</p>
      <p className="body3">B3 Body3 Font 프리텐다드 12px Regular line height 16 0.5%</p>
    </div>
  ),
};
