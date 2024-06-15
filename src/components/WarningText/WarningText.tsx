import React from "react";
import "./WarningText.scss";
import { IWarningTextProps } from "./models.d";

const WarningText: React.FC<IWarningTextProps> = ({ message }) => {
  return (
    <div className="warning-text" >
      <span className="warning-text__icon">ℹ️</span>
      {message}
    </div>
  );
};

export default WarningText;
