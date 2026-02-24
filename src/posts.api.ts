import axios from "axios";
import type { PostRO } from "./posts.interface";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchAllPosts = async () => {
  const response = (await axios.get(`${BASE_URL}/posts`)) as { data: PostRO[] };
  return response.data;
};

export const addPost = async (_data: Omit<PostRO, "id">) => {
  try {
    const response = (await axios.post(`${BASE_URL}/posts`, _data)) as {
      data: PostRO;
    };

    return response.data;
  } catch (error) {
    console.error("Error adding post:", error);
    throw error;
  }
};
