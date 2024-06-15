import React from "react";
import "./TagList.scss";
import { ITagListProps } from "./models.d";

const TagList: React.FC<ITagListProps> = ({ tags, filterText, toggleTag }) => {
  const tagLists=tags
        .filter((tag) =>
          tag.name.toLowerCase().includes(filterText.toLowerCase())
        )
        .map((tag,index) => (
          <label
            key={tag.id}
            htmlFor={"tag-" + tag.id}
             className={`tag-list__item ${index === 0 ? 'tag-list__item--highlighted' : ''}`}
          >
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
        ))
  return (
    <ul className="tag-list">
      {tagLists}
    </ul>
  );
};

export default TagList;
