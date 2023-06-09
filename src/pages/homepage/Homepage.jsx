// import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import "./homepage.css";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";

export default function Homepage() {
   const location = useLocation();
   console.log(location);
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
