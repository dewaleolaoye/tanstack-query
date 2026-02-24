import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "./query-key";
import { fetchAllPosts } from "./posts.api";

export const useGetAllPosts = () => {
  return useQuery({
    queryKey: [queryKeys.posts],
    queryFn: fetchAllPosts,
  });
};
