import { createContext, useReducer } from "react";
export const PostListContext = createContext({
  postList: [],
  addItem: () => {},
  deleteItem: () => {},
});
const postListReducer = (action, currPostList) => {
  return currPostList;
};
const PostListProvider = ({ children }) => {
  const addPost = () => {};
  const deletePost = () => {};
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Real Madrid",
    body: "Yeah we are going to Saintiago Bernabeu",
    reactions: "12",
    tags: ["Matter", "Big-Match", "Ronaldo"],
  },
  {
    id: "2",
    title: "Barcelona",
    body: "Yeah we are coming to Saintiago Bernabeu",
    reactions: "23",
    tags: ["El-Classico", "Big-Match", "Messi"],
  },
  {
    id: "3",
    title: "Arsenal",
    body: "Going to Win PL 2024 ?",
    reactions: "40",
    tags: ["Premeire League", "Question", "Saka"],
  },
];
export default PostListProvider;
