import React from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import { useContext } from "react";
import { PostListContext } from "../store/post-list-store";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);
  return (
    <div className="card m-lg-5 bg-black text-white" style={{ width: "30rem" }}>
      <div className="card-body">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          <span className="visually-hidden">unread messages</span>
          <RiCloseLargeLine onClick={() => deletePost(post.id)} />
        </span>
        <h5 className="card-title">{post.title}</h5>
        <hr />
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag, i) =>
          i != 1 ? (
            <span key={i} className="badge text-bg-success m-lg-1">
              {tag}
            </span>
          ) : (
            <span key={i} className="badge text-bg-danger m-lg-1">
              {tag}
            </span>
          )
        )}
        <div className="alert alert-info reactions" role="alert">
          ({post.reactions}) people reacted to this post
        </div>
      </div>
    </div>
  );
};

export default Post;
