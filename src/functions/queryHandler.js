export const queryHandler = (word, setQuery) => (
  setQuery(word.toLowerCase().trim())
);
