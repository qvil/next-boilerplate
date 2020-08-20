import axios from "axios";

export const fetchUsers = async () => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
  return data;
};
