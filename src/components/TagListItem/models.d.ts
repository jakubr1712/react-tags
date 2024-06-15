export interface ITagListItemProps {
  tag: CommonTypes.ITag;
  index: number;
  toggleTag: (tag: CommonTypes.ITag) => void;
}
