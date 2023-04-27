import { Link } from "react-router-dom";
import "./homepage.css";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";

export default function Homepage() {
  return (
    <>
      <Header />
      <div className="home">
        <Link to="/single" className="link">
          <Posts />
        </Link>

        <Sidebar />
      </div>
    </>
  );
}
