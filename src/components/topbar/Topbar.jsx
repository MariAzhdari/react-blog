import { Link } from "react-router-dom";
import React from "react";
import "./topbar.css";
export default function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link to="/write" className="link">
              {" "}
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/login" className="link">
              {" "}
              LOGIN
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://avatars.githubusercontent.com/u/80781901?v=4"
          alt=""
        />
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/register">REGISTER</Link>
          </li>
          <li className="topListItem"></li>
        </ul>
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
