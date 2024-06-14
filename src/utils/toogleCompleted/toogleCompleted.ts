import { IToDoItem } from "components/ToDos/models.d";

export const toogleCompleted = (data: IToDoItem[], id: number): IToDoItem[] => {
  return data.map((item) => {
    return item.id === id ? { ...item, completed: !item.completed } : item;
  });
};
