import React from "react";
import "./ProgressBar.scss";
import { IProgressBarProps } from "./models.d";

const ProgressBar: React.FC<IProgressBarProps> = ({ progress, color }) => {
  const totalDots = 5;
  const activeDots = Math.round((progress / 100) * totalDots);

  return (
    <div className="progress-bar__container">
      {Array.from({ length: totalDots }).map((_, index) => (
        <div
          key={index}
          className={`progress-bar__item ${index < activeDots ? 'progress-bar__item--active' : ''}`}
          style={index < activeDots ? { backgroundColor: color } : {}}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
