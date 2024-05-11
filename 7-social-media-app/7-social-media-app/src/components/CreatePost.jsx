import React, { useReducer, useRef, useContext } from "react";
import { PostListContext } from "../store/post-list-store";
const CreatePost = () => {
  const { addPost } = useContext(PostListContext);
  const [] = useReducer();
  const userId = useRef();
  const postTitle = useRef();
  const postBody = useRef();
  const reactions = useRef();
  const tags = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const tagsArray = tags.current.value.split(" ");
    const newItem = {
      id: userId.current.value,
      title: postTitle.current.value,
      body: postBody.current.value,
      reactions: reactions.current.value,
      tags: tagsArray,
    };
    userId.current.value = "";
    postTitle.current.value = "";
    postBody.current.value = "";
    reactions.current.value = "";
    tags.current.value = "";
    addPost(newItem);
  };
  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="user-id" className="form-label">
          Please Enter Your User ID
        </label>
        <input
          type="text"
          className="form-control"
          id="user-id"
          placeholder="Enter Your User ID?"
          ref={userId}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          ref={postTitle}
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today...?"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          ref={postBody}
          rows={4}
          type="text"
          className="form-control"
          id="body"
          placeholder="Tell us more about it..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          ref={reactions}
          type="text"
          className="form-control"
          id="reactions"
          placeholder="No.of reactions"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          ref={tags}
          type="text"
          className="form-control"
          id="tags"
          placeholder="Please enter text using space"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
