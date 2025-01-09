import axios from "axios";

export const payment = async (token) => {
  return await axios.post(
    "https://ecom2024-api-pi.vercel.app/api/user/create-payment-intent",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
