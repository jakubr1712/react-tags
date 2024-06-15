import React from "react";
import "./Tag.scss";
import { ITagProps } from "./models.d";

const Tag: React.FC<ITagProps> = ({ id, name, onRemove }) => (
  <div className="tag">
    {name}
    <button className="tag__remove-button" onClick={() => onRemove(id)}>
      &times;
    </button>
  </div>
);

export default Tag;
