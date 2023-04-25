import Header from "../components/header/Header";
import "./homepage.css";
import Posts from "../components/posts/Posts";
import Sidebar from "../components/sidebar/Sidebar";

export default function Homepage() {
  
  return (
    <>
     <Header />
      <div className="home">
     <Posts />
     <Sidebar />
        
      </div>
    </>
  );
}
