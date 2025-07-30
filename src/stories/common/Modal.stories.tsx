import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Modal from '@/components/common/Modal';

const meta: Meta<typeof Modal.Wrapper> = {
  title: 'design-system/Modal',
  component: Modal.Wrapper,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
};
console.log('Modal.Wrapper:', Modal.Wrapper);
console.log('typeof Modal.Wrapper:', typeof Modal.Wrapper);
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Modal.Wrapper>
      <Modal.Trigger>클릭</Modal.Trigger>
      <Modal.Content title="여행 일정 추가하기"></Modal.Content>
    </Modal.Wrapper>
  ),
};

export const CustomContent: Story = {
  parameters: {
    docs: {
      description: {
        story: '사용자 정의 내용을 포함한 모달입니다.',
      },
    },
  },
  render: () => (
    <Modal.Wrapper>
      <Modal.Trigger>클릭</Modal.Trigger>
      <Modal.Content title="여행 일정 추가하기">
        <div className="p-4 flex flex-col gap-4">
          <div className="bg-nt-primary-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">섹션 1</h3>
            <p>커스텀 스타일이 적용된 컨텐츠입니다.</p>
          </div>
          <div className="bg-nt-secondary-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">섹션 2</h3>
            <p>다양한 스타일을 적용할 수 있습니다.</p>
          </div>
        </div>
      </Modal.Content>
    </Modal.Wrapper>
  ),
};
