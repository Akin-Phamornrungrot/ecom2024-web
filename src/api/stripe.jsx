import axios from "axios";

export const payment = async (token) => {
  return await axios.post(
    "https://ecom2024-api-seven.vercel.app/api/user/create-payment-intent",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
