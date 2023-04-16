import logoSrc from "../assets/img/logo.png";

const Nav: React.FunctionComponent = () => {
  return (
    <>
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
                <a href="galleries.html">Travel</a>
              </li>
              <li>
                <a href="gardening.html">Gardening</a>
              </li>
            </ul>

            <a
              href="#"
              data-target="nav-mobile"
              className="sidenav-trigger mobile-menu"
            >
              <i className="material-icons">menu</i>
            </a>
          </div>
        </nav>
      </div>

      <ul id="nav-mobile" className="sidenav">
        <li>
          <a href="index.html#about">About</a>
        </li>
        <li>
          <a href="galleries.html">Travel</a>
        </li>
        <li>
          <a href="gardening.html">Gardening</a>
        </li>
      </ul>
    </>
  );
};

export default Nav;
