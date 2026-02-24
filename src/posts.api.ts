import axios from "axios";
import type { PostRO } from "./posts.interface";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchAllPosts = async () => {
  const response = (await axios.get(`${BASE_URL}/posts`)) as { data: PostRO[] };
  return response.data;
};
