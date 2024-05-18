import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import PostListProvider from "./store/post-list-store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [show, setShow] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar show={show} setShow={setShow} />
        <div className="content">
          <Header />
          {show === "Home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
