export const getProgressText = (currentTags: number): string => {
  if (currentTags >= 5) {
    return "Znakomicie";
  } else if (currentTags >= 4) {
    return "Dobrze";
  } else {
    return "Słabo";
  }
};