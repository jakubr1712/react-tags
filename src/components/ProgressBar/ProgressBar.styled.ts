import styled from "styled-components";

export const ProgressBarContainer = styled.div`
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
