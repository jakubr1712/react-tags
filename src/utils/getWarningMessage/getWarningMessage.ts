export const getWarningMessage = (currentTags: number, requiredTags: number): string => {
  const tagsNeeded = requiredTags - currentTags;
  return currentTags < requiredTags
    ? `Zbyt mało tagów. Dodaj jeszcze ${tagsNeeded} aby poprawić widoczność artykułu`
    : "Dobra robota! Masz wystarczająco tagów.";
};