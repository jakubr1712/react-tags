import styled from 'styled-components';

export const WarningContainer = styled.div`
  padding: 16px;
  border-radius: 8px;
  margin-top: 16px;
`;

export const WarningHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const ProgressBar = styled.div`
  flex: 1;
  height: 4px;
  background-color: #ccc;
  border-radius: 2px;
  margin-left: 8px;
  position: relative;
`;

export const ProgressBarFill = styled.div`
  height: 100%;
  border-radius: 2px;
  width: 0;
`;

export const WarningText = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

export const WarningIcon = styled.span`
  margin-right: 8px;
  font-size: 18px;
`;
