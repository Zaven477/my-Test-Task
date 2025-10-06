import { BASE_URL } from "../constants";

export const fetchWorkplaces = async () => {
  const response = await fetch(`${BASE_URL}/products/category-list`);
  return response.json();
};
