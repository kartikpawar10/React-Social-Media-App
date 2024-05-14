import React, { useContext, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import Spinner from "./Spinner";
import { useEffect } from "react";
import Loading from "./Loading";
const PostList = () => {
  const { postList, addPosts } = useContext(PostListContext);
  const [isfetching, setFetching] = useState(false);
  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addPosts(data.posts);
        setFetching(false);
      });
  }, []);
  return (
    <>
      {isfetching && <Spinner />}
      {!isfetching && postList.length === 0 && <Loading />}
      {!isfetching &&
        postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
