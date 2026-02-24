import { useMutation, useQuery } from "@tanstack/react-query";
import { queryKeys } from "./query-key";
import { addPost, fetchAllPosts, updatePost } from "./posts.api";
import { queryClient } from "./queryClient";

export const useGetAllPosts = () => {
  return useQuery({
    queryKey: [queryKeys.posts],
    queryFn: fetchAllPosts,
  });
};

// POST, PUT, PATCH, DELETE
export const useAddPost = () => {
  return useMutation({
    mutationFn: addPost,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.posts] });
      console.log(data, "SUCCESS");
    },
    onError: () => {},
  });
};

export const useUpdatePost = () => {
  return useMutation({
    mutationFn: updatePost,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.posts] });
      console.log(data, "SUCCESS");
    },
    onError: () => {},
  });
};
