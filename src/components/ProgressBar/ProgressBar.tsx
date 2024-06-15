import React from "react";
import './ProgressBar.scss';

interface ProgressBarProps {
  progress: number;
  color: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, color }) => {
  return (
    <div className="progress-bar__container">
      <div
        className="progress-bar__fill"
        style={{ width: `${progress}%`, backgroundColor: color }}
      />
    </div>
  );
};

export default ProgressBar;
