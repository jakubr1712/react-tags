import React from "react";
import "./ActiveTags.scss";
import Tag from "../Tag";
import { IActiveTagsProps } from "./models.d";

const ActiveTags: React.FC<IActiveTagsProps> = ({ tags, removeTag }) => {
  const tagsAll = tags.map((tag) => (
    <Tag
      key={tag.id}
      id={tag.id}
      name={tag.name}
      onRemove={() => removeTag(tag.id)}
    />
  ));

  return <div className="active-tags">{tagsAll}</div>;
};

export default ActiveTags;
