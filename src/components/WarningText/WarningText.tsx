import React from "react";
import { WarningTextContainer, WarningIcon } from "./WarningText.styled";

interface WarningTextProps {
  message: string;
  color: string;
}

const WarningText: React.FC<WarningTextProps> = ({ message, color }) => {
  return (
    <WarningTextContainer style={{ color }}>
      <WarningIcon>ℹ️</WarningIcon>
      {message}
    </WarningTextContainer>
  );
};

export default WarningText;
