import React from "react";
import ProgressBar from "../ProgressBar";
import WarningText from "../WarningText";
import { useTagProgress } from "hooks/useTagProgress";
import {ITagWarningProps} from './models.d';
import './TagWarning.scss';

const TagWarning: React.FC<ITagWarningProps> = ({ currentTags }) => {
  const { progress, color, text, message } = useTagProgress(currentTags);

  return (
    <div className="tag-warning__container">
      <div className="tag-warning__header" style={{ color }}>
        {text}
        <ProgressBar progress={progress} color={color} />
      </div>
      <WarningText message={message} color={color} />
    </div>
  );
};

export default TagWarning;
