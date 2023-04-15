import bannerImgSrc from "../assets/img/bench.png";

const Header: React.FunctionComponent = () => {
  return (
    <div className="parallax-container">
      <div className="parallax">
        <img src={bannerImgSrc} alt="bench looking out over English Channel" />
      </div>
      <div className="section no-pad-bot">
        <div className="container">
          <br />
          <br />
          <div className="row center shadowed">
            <h1 className="header center">Donia Robinson</h1>
            <h5 className="header col s12 light">
              Full stack developer before it was cool
            </h5>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Header;
