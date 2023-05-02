import "./posts.css"
import Post from "../post/Post";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://images.unsplash.com/photo-1600835396429-159292e46f4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGlyYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
      <Post img="https://images.unsplash.com/photo-1614755431498-0cbc3ba842db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGlyYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
      <Post img="https://images.unsplash.com/photo-1591139308596-9b663fa6d0a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aXJhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
      <Post img="https://images.unsplash.com/photo-1567317255448-8e6c04e22114?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGlyYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
      <Post img="https://images.unsplash.com/photo-1622461481749-548ed289179c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGFtYXZhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
      <Post img="https://images.unsplash.com/photo-1530311583484-ea8bf4c407fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
    </div>
  );
}
