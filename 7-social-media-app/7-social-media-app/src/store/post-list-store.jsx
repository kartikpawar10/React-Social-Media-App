import { createContext, useReducer } from "react";
export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  addPosts: () => {},
  deletePost: () => {},
});
const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  console.log(currPostList);
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload.newItem, ...currPostList];
  } else if (action.type == "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
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
  const addPosts = (posts) => {
    console.log("Clicked" + "Once");
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };
  return (
    <PostListContext.Provider
      value={{ postList, addPost, deletePost, addPosts }}
    >
      {children}
    </PostListContext.Provider>
  );
};
export default PostListProvider;
