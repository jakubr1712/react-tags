import React from 'react';
import './ActiveTags.scss';
import Tag from '../Tag/Tag';

interface ITag {
  id: number;
  name: string;
  count: number;
  isActive: boolean;
}

interface ActiveTagsProps {
  tags: ITag[];
  removeTag: (tagId: number) => void;
}

const ActiveTags: React.FC<ActiveTagsProps> = ({ tags, removeTag }) => {
  return (
    <div className="active-tags">
      {tags
        .filter((tag) => tag.isActive)
        .map((tag) => (
          <Tag key={tag.id} id={tag.id} name={tag.name} onRemove={() => removeTag(tag.id)} />
        ))}
    </div>
  );
};

export default ActiveTags;
