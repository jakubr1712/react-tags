import { useState, useEffect } from "react";
import { getProgressColor } from "utils/getProgressColor";
import { getProgressText } from "utils/getProgressText";
import { getWarningMessage } from "utils/getWarningMessage";

export const useTagProgress = (currentTags: number) => {
  const requiredTags = 5;
  currentTags = currentTags >= requiredTags ? requiredTags : currentTags;

  const [progress, setProgress] = useState(0);
  const [color, setColor] = useState("#f44336");
  const [text, setText] = useState("Słabo");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const progressValue = (currentTags / requiredTags) * 100;
    setProgress(progressValue);
    setColor(getProgressColor(currentTags));
    setText(getProgressText(currentTags));
    setMessage(getWarningMessage(currentTags, requiredTags));
  }, [currentTags]);

  return { progress, color, text, message };
};
