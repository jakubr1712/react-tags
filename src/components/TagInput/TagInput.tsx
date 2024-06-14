import React, { useState } from 'react';
import { InputContainer, Input, TagContainer, TagList, TagItem, CloseButton, SaveButton, SearchIcon, ClearIcon } from './TagInput.styled';
import Tag from '../Tag/Tag';
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
  const [tags, setTags] = useState<ITag[]>(availableTags);
  const [input, setInput] = useState('');
const [isFocusInput, setIsFocusInput] = useState(false);

  const toggleTag = (tagToToggle: ITag) => {
    setTags(tags.map(tag =>
      tag.id === tagToToggle.id ? { ...tag, isActive: !tag.isActive } : tag
    ));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input) {
      const tag = tags.find(tag => tag.name.toLowerCase() === input.toLowerCase());
      if (tag) toggleTag(tag);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSave = () => {
    setIsFocusInput(false);
  };

  const hasActiveTags = tags.some(tag => tag.isActive);

    const handleClearInput = () => {
    setInput('');
    setIsFocusInput(false);

  };

  const removeTag = (tagId: number) => {
     setTags(tags.map(tag =>
      tag.id === tagId ? { ...tag, isActive: !tag.isActive } : tag
    ));
  };

  return (
    <div>
      <CloseButton>&times;</CloseButton>
      <h2>Tagi</h2>
      <InputContainer>
           <SearchIcon>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="black">
            <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8c1.64 0 3.16-.53 4.41-1.41L21.59 22 23 20.59l-7.18-7.18C17.47 13.16 18 11.64 18 10c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
          </svg>
        </SearchIcon>
        <Input
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Szukaj tagów"
        onFocus={() => setIsFocusInput(true)}
        />
        <ClearIcon onClick={handleClearInput}>&times;</ClearIcon>
      </InputContainer>
      {/* <Input
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Szukaj tagów"
        onFocus={() => setIsFocusInput(true)}
        // onBlur={() => setIsFocusInput(false)}
      /> */}
      {isFocusInput?
        <TagList>
        {tags
          .filter(tag => tag.name.toLowerCase().includes(input.toLowerCase()))
          .map((tag) => (
               <TagItem key={tag.id} htmlFor={'tag-' + tag.id}>
              <input
                id={'tag-' + tag.id}
                type="checkbox"
                checked={tag.isActive}
                onChange={() => toggleTag(tag)}
                aria-label={tag.name}
              />
              <span>{tag.name}</span>
              <span>+{tag.count}</span>
            </TagItem>
          ))}
      </TagList>:null}
      {!isFocusInput&&<TagContainer>
        {tags.filter(tag => tag.isActive).map(tag => (
          <Tag key={tag.id} id={tag.id} name={tag.name} onRemove={() => removeTag(tag.id)} />
        ))}
      </TagContainer>}
      <SaveButton onClick={handleSave} disabled={!hasActiveTags}>Zapisz</SaveButton>
    </div>
  );
};

export default TagInput;
