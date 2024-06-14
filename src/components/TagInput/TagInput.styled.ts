import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 32px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 16px;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
`;

export const TagList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TagItem = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #ccc;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
`;

export const SaveButton = styled.button<{ disabled?: boolean }>`
  background: ${({ disabled }) => (disabled ? '#eee' : '#ccc')};
  border: none;
  padding: 8px 16px;
  margin-top: 16px;
  width: 100%;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

export const SearchIcon = styled.span`
  position: absolute;
  left: 8px;
  top: 20%;
  pointer-events: none;
`;

export const ClearIcon = styled.span`
  position: absolute;
  right: 8px;
  top: 20%;
  cursor: pointer;
  color: #999;
`;
