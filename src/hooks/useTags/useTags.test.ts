import { renderHook, act } from "@testing-library/react-hooks";
import { useTags } from "./useTags";

const initialTags = [
  { id: 1, name: "Tag1", count: 10, isActive: false },
  { id: 2, name: "Tag2", count: 20, isActive: true },
  { id: 3, name: "Tag3", count: 30, isActive: false },
];

describe("useTags", () => {
  it("initializes with the correct state", () => {
    const { result } = renderHook(() => useTags(initialTags));
    expect(result.current.tags).toEqual(initialTags);
    expect(result.current.activeTags).toEqual([initialTags[1]]);
    expect(result.current.input).toBe("");
    expect(result.current.isFocusInput).toBe(false);
  });

  it("toggles a tag correctly", () => {
    const { result } = renderHook(() => useTags(initialTags));

    act(() => {
      result.current.toggleTag(initialTags[0]);
    });

    expect(result.current.tags[0].isActive).toBe(true);

    act(() => {
      result.current.toggleTag(initialTags[0]);
    });

    expect(result.current.tags[0].isActive).toBe(false);
  });

  it("handles input change correctly", () => {
    const { result } = renderHook(() => useTags(initialTags));

    act(() => {
      result.current.handleChange({
        target: { value: "Tag2" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.input).toBe("Tag2");
  });

  it("clears input correctly", () => {
    const { result } = renderHook(() => useTags(initialTags));

    act(() => {
      result.current.handleChange({
        target: { value: "Tag2" },
      } as React.ChangeEvent<HTMLInputElement>);
      result.current.handleClearInput();
    });

    expect(result.current.input).toBe("");
    expect(result.current.isFocusInput).toBe(false);
  });

  it("removes a tag correctly", () => {
    const { result } = renderHook(() => useTags(initialTags));

    act(() => {
      result.current.removeTag(2);
    });

    expect(result.current.activeTags).toEqual([]);
  });
});
