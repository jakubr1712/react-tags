import React from "react";
import './ProgressBar.scss';
import {IProgressBarProps} from './models.d';


const ProgressBar: React.FC<IProgressBarProps> = ({ progress, color }) => {
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
