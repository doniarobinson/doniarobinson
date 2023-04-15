import logoSrc from "../assets/img/logo.png";

const Nav: React.FunctionComponent = () => {
  return (
    <div className="navbar-fixed">
      <nav className="mywhite-bg" role="navigation">
        <div className="nav-wrapper container">
          <a href="index.html">
            <img id="logo-container" src={logoSrc} alt="logo" />
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="index.html#about">About</a>
            </li>
            <li>
              <a href="galleries.html">Galleries</a>
            </li>
          </ul>

          <ul id="nav-mobile" className="sidenav">
            <li>
              <a href="#">Navbar Link</a>
            </li>
          </ul>
          <a href="#" data-target="nav-mobile" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
