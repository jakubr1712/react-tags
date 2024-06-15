import { useState } from 'react';


export const useTags = (initialTags: CommonTypes.ITag[]) => {
  const [tags, setTags] = useState<CommonTypes.ITag[]>(initialTags);
  const [input, setInput] = useState('');
  const [isFocusInput, setIsFocusInput] = useState(false);

  const toggleTag = (tagToToggle: CommonTypes.ITag) => {
    setTags(
      tags.map((tag) =>
        tag.id === tagToToggle.id ? { ...tag, isActive: !tag.isActive } : tag
      )
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input) {
      const tag = tags.find((tag) => tag.name.toLowerCase() === input.toLowerCase());
      if (tag) toggleTag(tag);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSave = () => {
    setIsFocusInput(false);
  };

  const handleClearInput = () => {
    setInput('');
    setIsFocusInput(false);
  };

  const removeTag = (tagId: number) => {
    setTags(
      tags.map((tag) =>
        tag.id === tagId ? { ...tag, isActive: !tag.isActive } : tag
      )
    );
  };

  return {
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
  };
};
