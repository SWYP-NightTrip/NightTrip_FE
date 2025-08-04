import PhotoCard from '@/components/common/PhotoCard';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof PhotoCard.Wrapper> = {
  title: 'design-system/PhotoCard',
  component: PhotoCard.Wrapper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        props: {
          Wrapper: {
            description:
              'PhotoCard를 감싸는 Wrapper컴포넌트입니다. classnames를 통해 추가 스타일링이 가능합니다.',
          },
          Photo: {
            description:
              'PhotoCard의 이미지 컴포넌트입니다. 이미지 크기를 조절하고, 클래스네임을 통해 추가 스타일링이 가능합니다.',
          },
          Overlay: {
            description:
              'PhotoCard의 오버레이 컴포넌트입니다. 반투명 오버레이를 추가하여 텍스트의 가독성을 높입니다.',
          },
          Content: {
            description:
              'PhotoCard의 컨텐츠 컴포넌트입니다. 텍스트 컨텐츠를 추가하고, 클래스네임을 통해 추가 스타일링이 가능합니다. (absolute 위치 조절 가능)',
          },
        },
      },
    },
  },
  render: () => (
    <PhotoCard.Wrapper className="w-[300px] h-[200px] group cursor-pointer">
      <PhotoCard.Photo
        src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        alt="오사카 풍경"
        width={300}
        height={200}
      />
      <PhotoCard.Content className="absolute bottom-4 left-4 z-10 text-white">
        <h3 className="text-lg font-semibold mb-1">내가 본 오사카</h3>
        <p className="text-sm opacity-90">밤에 간 해리포터 집</p>
      </PhotoCard.Content>
    </PhotoCard.Wrapper>
  ),
};

export const WithOverlay: Story = {
  render: () => (
    <PhotoCard.Wrapper className="w-[300px] h-[200px] group cursor-pointer">
      <PhotoCard.Photo
        src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        alt="오사카 풍경"
        width={300}
        height={200}
      />
      <PhotoCard.Overlay />
      <PhotoCard.Content className="absolute bottom-4 left-4 z-10 text-white">
        <h3 className="text-lg font-semibold mb-1">내가 본 오사카</h3>
        <p className="text-sm opacity-90">밤에 간 해리포터 집</p>
      </PhotoCard.Content>
    </PhotoCard.Wrapper>
  ),
};

export const AttractionCard: Story = {
  render: () => (
    <PhotoCard.Wrapper className="w-[300px] overflow-hidden group cursor-pointer">
      <div className="relative">
        <PhotoCard.Photo
          src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
          alt="오사카 풍경"
          width={300}
          height={180}
          className="rounded-t-xl"
        />
      </div>

      <PhotoCard.Content className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">유니버설 스튜디오</h3>
        <p className="text-sm text-gray-600 mb-2">오사카 • 어트랙션</p>

        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">★</span>
            <span>5.0 (10)</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-red-500">♥</span>
            <span>200</span>
          </div>
        </div>
      </PhotoCard.Content>
    </PhotoCard.Wrapper>
  ),
};
