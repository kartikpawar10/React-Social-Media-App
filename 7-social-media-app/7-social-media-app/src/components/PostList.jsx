import React, { useContext, useState } from "react";
import Post from "./Post";
import Loading from "./Loading";
import { useLoaderData } from "react-router-dom";
const PostList = () => {
  const postListData = useLoaderData();
  return (
    <>
      {postListData.length === 0 && <Loading />}
      {postListData.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export const postListLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
