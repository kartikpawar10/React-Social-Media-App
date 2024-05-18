import { createContext, useEffect, useReducer, useState } from "react";
export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  isFetching: false,
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
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
  const [isFetching, setFetching] = useState(false);
  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addPosts(data.posts);
        setFetching(false);
      });

    return () => {
      console.log("UseEffect Got Killed");
    };
  }, []);
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const addPost = (newItem) => {
    console.log(newItem);
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        newItem,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  const addPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };
  return (
    <PostListContext.Provider
      value={{ postList, addPost, deletePost, isFetching }}
    >
      {children}
    </PostListContext.Provider>
  );
};
export default PostListProvider;
