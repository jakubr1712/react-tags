export interface IActiveTagsProps {
  tags: CommonTypes.ITag[];
  removeTag: (tagId: number) => void;
}