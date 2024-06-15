export interface ITagListProps {
  tags: CommonTypes.ITag[];
  filterText: string;
  toggleTag: (tag: CommonTypes.ITag) => void;
}