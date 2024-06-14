import { toogleCompleted } from "./toogleCompleted";

const mockData = [
  {
    userId: 1,
    id: 1,
    title: "title1",
    completed: true,
  },
  {
    userId: 2,
    id: 2,
    title: "title2",
    completed: false,
  },
];

describe("toogleCompleted function", () => {
  it("should change true on false", () => {
    const updatedMock = toogleCompleted(mockData, 1);

    expect(updatedMock[0].completed).toBeFalsy();
  });

  it("should change false on true", () => {
    const updatedMock = toogleCompleted(mockData, 2);

    expect(updatedMock[1].completed).toBeTruthy();
  });
});
