const BASE_URL = "https://dummyjson.com";

export const fetchWorkplaces = async () => {
  const response = await fetch(`${BASE_URL}/products/category-list`);
  return response.json();
};
