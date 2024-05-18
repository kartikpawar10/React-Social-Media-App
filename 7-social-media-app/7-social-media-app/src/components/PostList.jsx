import React, { useContext, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import Spinner from "./Spinner";
import { useEffect } from "react";
import Loading from "./Loading";
const PostList = () => {
  const { postList, isFetching } = useContext(PostListContext);

  return (
    <>
      {isFetching && <Spinner />}
      {!isFetching && postList.length === 0 && <Loading />}
      {!isFetching &&
        postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
