import React from "react";
import './WarningText.scss';

interface WarningTextProps {
  message: string;
  color: string;
}

const WarningText: React.FC<WarningTextProps> = ({ message, color }) => {
  return (
    <div className="warning-text" style={{ color }}>
      <span className="warning-text__icon">ℹ️</span>
      {message}
    </div>
  );
};

export default WarningText;
