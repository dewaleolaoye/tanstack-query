import { useState } from "react";
import { useGetAllPosts, useUpdatePost } from "./posts.hooks";

export const App = () => {
  const { data, isPending, isSuccess } = useGetAllPosts();

  // const { mutate, isPending: mutatePending } = useAddPost();

  const { mutate: updateMutate, isPending: updatePending } = useUpdatePost();

  const [state, setState] = useState({
    userId: 1,
    title: "",
    body: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    // mutate(state);
    updateMutate({
      id: "1",
      _data: {
        body: "We are learning Tanstack query",
        title: "Tasnstack query",
      },
    });
  };

  return (
    <div className='max-w-5xl mx-auto p-4'>
      {isPending && <div>Loading...</div>}

      {isSuccess && (
        <>
          {data?.slice(0, 5).map(({ body, id, title, userId }) => {
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

      <div className='bg-gray-600 mt-8'>
        <input name='title' value={state.title} onChange={handleChange} />
        <br />
        <br />
        <input name='body' value={state.body} onChange={handleChange} />
        <br />
        <br />
        <button onClick={handleSubmit} disabled={updatePending}>
          {updatePending ? "Loading..." : "Add Post"}
        </button>
      </div>
    </div>
  );
};
