import React from 'react';
import {
  CenteredContainer,
  Card,
  HorizontalLine,
  HeaderContainer,
  H3,
  SaveButton,
} from './TagInput.styled';
import InputField from '../InputField';
import TagList from '../TagList';
import ActiveTags from '../ActiveTags';
import TagWarning from '../TagWarning';
import { useTags } from 'hooks/useTags';

interface ITag {
  id: number;
  name: string;
  count: number;
  isActive: boolean;
}
interface TagInputProps {
  availableTags: ITag[];
}

const TagInput: React.FC<TagInputProps> = ({ availableTags }) => {
  const {
    tags,
    input,
    isFocusInput,
    setIsFocusInput,
    toggleTag,
    handleKeyDown,
    handleChange,
    handleSave,
    handleClearInput,
    removeTag,
  } = useTags(availableTags);

  const hasActiveTags = tags.some((tag) => tag.isActive);

  return (
    <CenteredContainer>
      <Card>
        <HeaderContainer>
          <H3>Tagi</H3>
        </HeaderContainer>
        <InputField
          input={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onClear={handleClearInput}
          onFocus={() => setIsFocusInput(true)}
        />
        <HorizontalLine />
        {isFocusInput ? (
          <>
            <TagList tags={tags} filterText={input} toggleTag={toggleTag} />
            <SaveButton onClick={handleSave} disabled={!hasActiveTags}>
              Zapisz
            </SaveButton>
          </>
        ) : (
          <>
            <ActiveTags tags={tags} removeTag={removeTag} />
            <HorizontalLine />
            <TagWarning currentTags={tags.filter((tag) => tag.isActive).length} />
          </>
        )}
      </Card>
    </CenteredContainer>
  );
};

export default TagInput;
