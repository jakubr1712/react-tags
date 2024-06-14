import React from "react";
import {
  WarningContainer,
  WarningText,
  WarningIcon,
  WarningHeader,
  ProgressBar,
  ProgressBarFill,
} from "./TagWarning.styled";

interface TagWarningProps {
  currentTags: number;
}

const TagWarning: React.FC<TagWarningProps> = ({ currentTags }) => {
  const requiredTags = 5;
  currentTags = currentTags >= requiredTags ? requiredTags : currentTags;

  const tagsNeeded = requiredTags - currentTags;
  const progress = (currentTags / requiredTags) * 100;

  const getProgressColor = () => {
    if (currentTags >= 5) {
      return "#4caf50";
    } else if (currentTags >= 4) {
      return "#8bc34a";
    } else if (currentTags >= 3) {
      return "#cddc39";
    } else {
      return "#f44336";
    }
  };

  const getProgressText = () => {
    if (currentTags >= 5) {
      return "Znakomicie";
    } else if (currentTags >= 4) {
      return "Dobrze";
    } else {
      return "Słabo";
    }
  };

  return (
    <WarningContainer>
      <WarningHeader style={{ color: getProgressColor() }}>
        {getProgressText()}
        <ProgressBar>
          <ProgressBarFill
            style={{
              width: `${progress}%`,
              backgroundColor: getProgressColor(),
            }}
          />
        </ProgressBar>
      </WarningHeader>
      <WarningText>
        <WarningIcon>ℹ️</WarningIcon>
        {currentTags < requiredTags
          ? `Zbyt mało tagów. Dodaj jeszcze ${tagsNeeded} aby poprawić widoczność artykułu`
          : "Dobra robota! Masz wystarczająco tagów."}
      </WarningText>
    </WarningContainer>
  );
};

export default TagWarning;
