import React from "react";
import './Tag.scss';

interface TagProps {
  id: number;
  name: string;
  onRemove: (id: number) => void;
}

const Tag: React.FC<TagProps> = ({ id, name, onRemove }) => (
  <div className="tag">
    {name}
    <button className="tag__remove-button" onClick={() => onRemove(id)}>&times;</button>
  </div>
);

export default Tag;
