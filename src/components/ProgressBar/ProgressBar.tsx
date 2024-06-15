import React from "react";
import "./ProgressBar.scss";
import { IProgressBarProps } from "./models.d";

const ProgressBar: React.FC<IProgressBarProps> = ({ progress, color }) => {
  const totalDots = 5;
  const activeDots = Math.round((progress / 100) * totalDots);

  const barsAll = Array.from({ length: totalDots }).map((_, index) => (
    <div
      key={index}
      role={
        index < activeDots ? "progressbar-item--active" : "progressbar-item"
      }
      className={`progress-bar__item ${
        index < activeDots ? "progress-bar__item--active" : ""
      }`}
      style={index < activeDots ? { backgroundColor: color } : {}}
    />
  ));

  return <div className="progress-bar__container">{barsAll}</div>;
};

export default ProgressBar;
