import Content from '@/components/common/PhotoCard/Content';
import Overlay from '@/components/common/PhotoCard/Overlay';
import Photo from '@/components/common/PhotoCard/Photo';
import Wrapper from '@/components/common/PhotoCard/Wrapper';

const PhotoCard = {
  Wrapper,
  Photo,
  Overlay,
  Content,
} as const;

export default PhotoCard;
