import React, { FC } from "react";
import { ITagListItemProps } from "components/TagListItem/models.d";

const TagListItem: FC<ITagListItemProps> = ({ tag, index, toggleTag }) => {
  return (
    <label
      key={tag.id}
      htmlFor={"tag-" + tag.id}
      className={`tag-list__item ${
        index === 0 ? "tag-list__item--highlighted" : ""
      }`}
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
  );
};

export default TagListItem;
