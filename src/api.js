export const fetchParse = async (URL) => {
  try {
    const initialFetch = await fetch(URL);
    const response = await initialFetch.json();
    return response;
  } catch (error) {
    console.log(error)
    // throw (new Error(error));
  }
};