import { useGetAllPosts } from "./posts.hooks";

export const App = () => {
  const { data, isPending, isSuccess } = useGetAllPosts();

  return (
    <div className='max-w-5xl mx-auto p-4'>
      {isPending && <div>Loading...</div>}

      {isSuccess && (
        <>
          {data?.map(({ body, id, title, userId }) => {
            return (
              <div key={id}>
                <h1 className='text-2xl font-bold'>{title}</h1>
                <p className='text-sm'>{body}</p>
                <p className='text-xs'>User ID: {userId}</p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};
