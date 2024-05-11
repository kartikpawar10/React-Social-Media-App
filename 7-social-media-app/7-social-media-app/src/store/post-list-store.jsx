import { createContext, useReducer } from "react";
export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  console.log(currPostList);
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else {
    newPostList = [...currPostList, action.payload.newItem];
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const addPost = (newItem) => {
    console.log({ newItem });
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        newItem,
      },
    });
  };
  const deletePost = (postId) => {
    console.log("clicked" + postId);
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};
export default PostListProvider;
