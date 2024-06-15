import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: relative;
`;

export const H3 = styled.h3`
  font-weight: bold;
  color: #000;
`;

export const Count = styled.span`
  right: 20px;
  position: absolute;
  font-weight: 300;
`;

export const Name = styled.span`
  margin-left: 10px;
`;

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const Card = styled.div`
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
  position: relative;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 32px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 5px;
  border: none;

  &:focus {
    outline: none;
    border: none;
  }
`;

export const HorizontalLine = styled.hr`
  border: 0;
  border-top: 1px solid #ccc;
  margin: 8px 0;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
`;

export const TagListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TagItem = styled.label`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 8px;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 40px;
  position: absolute;
  right: 0;
  top: -20px;
  cursor: pointer;
`;

export const SaveButton = styled.button<{ disabled?: boolean }>`
  background: ${({ disabled }) => (disabled ? '#eee' : '#1E5EF1')};
  color: ${({ disabled }) => (disabled ? '#000' : '#fff')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  border: none;
  padding: 8px 16px;
  margin-top: 16px;
  width: 100%;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border-radius: 10px;
`;

export const SearchIcon = styled.span`
  position: absolute;
  left: 8px;
  top: 28%;
  pointer-events: none;
`;

export const ClearIcon = styled.span`
  position: absolute;
  right: 8px;
  top: 20%;
  cursor: pointer;
  color: #999;
`;
