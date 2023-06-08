export const fetchSearchResults = async (searchText) => {
    const response = await fetch(`/api/search?text=${searchText}`);
    const data = await response.json();
    return data.results;
  };
  