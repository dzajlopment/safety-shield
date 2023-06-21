import axios from "axios";

export const getCurrentLocation = async () => {
  try {
    const response = await axios.get("API_ENDPOINT_URL");
    return response.data;
  } catch (error) {
    console.error("Error fetching location data:", error);
    throw error;
  }
};
