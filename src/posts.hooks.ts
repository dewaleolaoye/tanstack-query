import { useMutation, useQuery } from "@tanstack/react-query";
import { queryKeys } from "./query-key";
import { addPost, fetchAllPosts } from "./posts.api";
import { queryClient } from "./queryClient";

export const useGetAllPosts = () => {
  return useQuery({
    queryKey: [queryKeys.posts],
    queryFn: fetchAllPosts,
  });
};

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
