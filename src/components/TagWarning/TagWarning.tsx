import React from "react";
import './TagWarning.scss';
import ProgressBar from "../ProgressBar";
import WarningText from "../WarningText";
import { useTagProgress } from "hooks/useTagProgress";

interface TagWarningProps {
  currentTags: number;
}

const TagWarning: React.FC<TagWarningProps> = ({ currentTags }) => {
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
