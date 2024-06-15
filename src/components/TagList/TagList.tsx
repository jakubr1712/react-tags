import React from 'react';
import './TagList.scss';

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
    <ul className="tag-list">
      {tags
        .filter((tag) => tag.name.toLowerCase().includes(filterText.toLowerCase()))
        .map((tag) => (
          <label key={tag.id} htmlFor={"tag-" + tag.id} className="tag-list__item">
            <input
              id={"tag-" + tag.id}
              type="checkbox"
              checked={tag.isActive}
              onChange={() => toggleTag(tag)}
              aria-label={tag.name}
            />
            <div>
              <span className="tag-list__name">{tag.name}</span>
              <span className="tag-list__count">+{tag.count}</span>
            </div>
          </label>
        ))}
    </ul>
  );
};

export default TagList;
