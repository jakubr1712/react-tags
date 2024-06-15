import React from "react";
import { WarningContainer, WarningHeader } from "./TagWarning.styled";
import ProgressBar from "../ProgressBar";
import WarningText from "../WarningText";
import { useTagProgress } from "hooks/useTagProgress";

interface TagWarningProps {
  currentTags: number;
}

const TagWarning: React.FC<TagWarningProps> = ({ currentTags }) => {
  const { progress, color, text, message } = useTagProgress(currentTags);

  return (
    <WarningContainer>
      <WarningHeader style={{ color }}>
        {text}
        <ProgressBar progress={progress} color={color} />
      </WarningHeader>
      <WarningText message={message} color={color} />
    </WarningContainer>
  );
};

export default TagWarning;
