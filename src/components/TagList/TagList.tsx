import React from 'react';
import { TagListContainer, TagItem, Name, Count } from '../TagInput/TagInput.styled';

interface ITag {
  id: number;
  name: string;
  count: number;
  isActive: boolean;
}

interface TagListProps {
  tags: ITag[];
  filterText: string;
  toggleTag: (tag: ITag) => void;
}

const TagList: React.FC<TagListProps> = ({ tags, filterText, toggleTag }) => {
  return (
    <TagListContainer>
      {tags
        .filter((tag) => tag.name.toLowerCase().includes(filterText.toLowerCase()))
        .map((tag) => (
          <TagItem key={tag.id} htmlFor={"tag-" + tag.id}>
            <input
              id={"tag-" + tag.id}
              type="checkbox"
              checked={tag.isActive}
              onChange={() => toggleTag(tag)}
              aria-label={tag.name}
            />
            <div>
              <Name>{tag.name}</Name>
              <Count>+{tag.count}</Count>
            </div>
          </TagItem>
        ))}
    </TagListContainer>
  );
};

export default TagList;
