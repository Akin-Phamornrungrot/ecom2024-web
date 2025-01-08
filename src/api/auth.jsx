import axios from "axios";

export const currentUser = async (token) => {
  return await axios.post(
    "https://ecom2024-api-seven.vercel.app/api/current-user",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const currentAdmin = async (token) => {
  return await axios.post(
    "https://ecom2024-api-seven.vercel.app/api/current-admin",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
