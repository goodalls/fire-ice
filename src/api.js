export const fetchParse = async (URL) => {
  const initialFetch = await fetch(URL);
  const response = await initialFetch.json();
  return response;
};