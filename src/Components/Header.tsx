import bannerImgSrc from "../assets/img/bench.png";

const Header: React.FunctionComponent = () => {
  return (
    <div className="parallax-container">
      <div className="section no-pad-bot">
        <div className="container">
          <br />
          <br />
          <h1 className="header center teal-text text-lighten-3">
            Donia Robinson
          </h1>
          <div className="row center">
            <h5 className="header col s12 light">
              Full stack developer before it was cool
            </h5>
          </div>
          {/*<div className="row center">
            <a
              href=""
              id="download-button"
              className="btn-large waves-effect waves-light teal lighten-1"
            >
              Get Started
  </a>
          </div>*/}
          <br />
          <br />
        </div>
      </div>
      <div className="parallax">
        <img src={bannerImgSrc} alt="Donia Robinson" />
      </div>
    </div>
  );
};

export default Header;
