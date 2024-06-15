import React from "react";
import "./TagApp.scss";
import InputField from "../InputField";
import TagList from "../TagList";
import ActiveTags from "../ActiveTags";
import TagWarning from "../TagWarning";
import { useTags } from "hooks/useTags";
import { ITagAppProps } from "./models";

const TagApp: React.FC<ITagAppProps> = ({ data }) => {
  const {
    tags,
    activeTags,
    input,
    isFocusInput,
    setIsFocusInput,
    toggleTag,
    handleChange,
    handleSave,
    handleClearInput,
    removeTag,
  } = useTags(data);

  const hasActiveTags = tags.some((tag) => tag.isActive);

  return (
    <div className="tag-input__container">
      <div className="tag-input__card">
        <div className="tag-input__header-container">
          <h3 className="tag-input__header">Tagi</h3>
        </div>
        <InputField
          input={input}
          onChange={handleChange}
          onClear={handleClearInput}
          onFocus={() => setIsFocusInput(true)}
        />
        <hr className="tag-input__horizontal-line" />
        {isFocusInput ? (
          <>
            <TagList tags={tags} filterText={input} toggleTag={toggleTag} />
            <button
              className={`tag-input__save-button${
                !hasActiveTags ? " tag-input__save-button--disabled" : ""
              }`}
              onClick={handleSave}
              disabled={!hasActiveTags}
            >
              Zapisz
            </button>
          </>
        ) : (
          <>
            <ActiveTags tags={activeTags} removeTag={removeTag} />
            <hr className="tag-input__horizontal-line" />
            <TagWarning currentTags={activeTags.length} />
          </>
        )}
      </div>
    </div>
  );
};

export default TagApp;
