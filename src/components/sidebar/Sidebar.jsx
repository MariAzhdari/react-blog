import "./sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.unsplash.com/photo-1474291102916-622af5ff18bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGdpcmwlMjBiZWhpbmQlMjB3aXRoJTIwd2l0aCUyMGJhY2tncm91bmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <p>
          Marziyeh here! I'm a front-end developer with a solid understanding of
          backend development as well. I have a passion for technology and
          sports, and I love to create new things and explore new ideas. I am
          creative and motivated. I also believe that maintaining a healthy
          lifestyle is essential and I'm passionate about making healthy choices
          when it comes to food and exercise.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
 export default Sidebar;