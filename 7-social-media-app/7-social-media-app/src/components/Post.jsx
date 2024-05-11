import React from "react";
import { RiCloseLargeLine } from "react-icons/ri";
const Post = ({ post }) => {
  return (
    <div className="card m-lg-5" style={{ width: "30rem" }}>
      <div className="card-body">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          <span class="visually-hidden">unread messages</span>
          <RiCloseLargeLine />
        </span>
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag, i) =>
          i != 1 ? (
            <span key={i} class="badge text-bg-success m-lg-1">
              {tag}
            </span>
          ) : (
            <span class="badge text-bg-danger m-lg-1">{tag}</span>
          )
        )}
        <div class="alert alert-info reactions" role="alert">
          ({post.reactions}) reacted people to this post
        </div>
      </div>
    </div>
  );
};

export default Post;
