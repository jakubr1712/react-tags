import React from "react";
import { TagWrapper, RemoveButton } from "./Tag.styled";

interface TagProps {
  id: number;
  name: string;
  onRemove: (id: number) => void;
}

const Tag: React.FC<TagProps> = ({ id, name, onRemove }) => (
  <TagWrapper>
    {name}
    <RemoveButton onClick={() => onRemove(id)}>&times;</RemoveButton>
  </TagWrapper>
);

export default Tag;
