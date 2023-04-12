import CSS from "csstype";
import bannerImgSrc from "../assets/img/banner.png";

const Header: React.FunctionComponent = () => {
  const bannerImg: CSS.Properties = {
    maxWidth: "100%",
    maxHeight: "150px",
  };

  return (
    <section>
      <img src={bannerImgSrc} style={bannerImg} alt="Donia Robinson" />
    </section>
  );
};

export default Header;
