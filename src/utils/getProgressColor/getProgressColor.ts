export const getProgressColor = (currentTags: number): string => {
  if (currentTags >= 5) {
    return "#4caf50";
  } else if (currentTags >= 4) {
    return "#8bc34a";
  } else if (currentTags >= 3) {
    return "#cddc39";
  } else {
    return "#f44336";
  }
};