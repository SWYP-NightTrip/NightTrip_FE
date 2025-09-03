import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import OptionButtons from '@/components/common/OptionButtons';
import { useState } from 'react';

const meta: Meta<typeof OptionButtons> = {
  title: 'design-system/OptionButtons',
  component: OptionButtons,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '버튼 스타일로 커스텀된 라디오 그룹 컴포넌트입니다. 옵션을 선택할 수 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof OptionButtons>;

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState('two');
    return (
      <OptionButtons
        options={[
          { value: 'one', label: '당일여행' },
          { value: 'two', label: '하룻밤 힐링 (1박 2일)' },
          { value: 'three', label: '이틀 밤 (2박 3일)' },
          { value: 'four', label: '별빛 세 밤 (3박 4일)' },
          { value: 'five', label: '달빛 네 밤 (4박 5일)' },
          { value: 'six', label: '한 주의 밤 (6박 7일)' },
        ]}
        value={selected}
        onChange={setSelected}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: '여행 기간 옵션 버튼을 선택할 수 있습니다.',
      },
    },
  },
};

export const FewOptions: Story = {
  render: () => {
    const [selected, setSelected] = useState('one');
    return (
      <OptionButtons
        options={[
          { value: 'one', label: '옵션1' },
          { value: 'two', label: '옵션2' },
          { value: 'three', label: '옵션3' },
        ]}
        value={selected}
        onChange={setSelected}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: '옵션이 3개인 버튼 그룹 예시입니다.',
      },
    },
  },
};

export const CustomStyle: Story = {
  render: () => {
    const [selected, setSelected] = useState('three');
    return (
      <OptionButtons
        options={[
          { value: 'one', label: 'A' },
          { value: 'two', label: 'B' },
          { value: 'three', label: 'C' },
        ]}
        value={selected}
        onChange={setSelected}
        className="flex-nowrap gap-3"
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: '커스텀 스타일(className) 적용 예시입니다.',
      },
    },
  },
};
