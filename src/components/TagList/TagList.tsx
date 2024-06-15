import React, { FC } from "react";
import "./TagList.scss";
import { ITagListProps } from "./models.d";
import TagListItem from "../TagListItem";

const TagList: FC<ITagListProps> = ({ tags, filterText, toggleTag }) => {
  const tagLists = tags
    .filter((tag) => tag.name.toLowerCase().includes(filterText.toLowerCase()))
    .map((tag, index) => (
      <TagListItem tag={tag} index={index} toggleTag={toggleTag} />
    ));
  return <ul className="tag-list">{tagLists}</ul>;
};

export default TagList;
