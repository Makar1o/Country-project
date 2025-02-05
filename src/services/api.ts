import axios from "axios";

const API_URL = "https://restcountries.com/v3.1";

export const getAllCountries = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/all?fields=name,flags,region,population,capital`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching countries:", error);
    return [];
  }
};

export const getCountryByName = async (name: string) => {
  try {
    const response = await axios.get(`${API_URL}/name/${name}?fullText=true`);
    return response.data[0];
  } catch (error) {
    console.error("Error fetching country:", error);
    return null;
  }
};
