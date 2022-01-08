import { Tag, TagLeftIcon, TagLabel } from '@chakra-ui/react';
import { ImageSquare, YoutubeLogo } from 'phosphor-react';

function MediaTypeTag({ mediaType }: { mediaType: 'image' | 'video' }) {
  return (
    <Tag colorScheme={mediaType === `image` ? `purple` : `teal`}>
      <TagLeftIcon
        boxSize="16px"
        as={mediaType === `image` ? ImageSquare : YoutubeLogo}
      />
      <TagLabel textTransform="capitalize" lineHeight="6">
        {mediaType}
      </TagLabel>
    </Tag>
  );
}

export default MediaTypeTag;
