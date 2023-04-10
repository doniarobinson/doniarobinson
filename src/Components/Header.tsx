import { getClassNames } from "./Header.classNames";
import bannerImgSrc from "../assets/img/banner.png";

const Header: React.FunctionComponent = () => {
  const { banner, bannerImg } = getClassNames();
  return (
    <section className={banner}>
      <img src={bannerImgSrc} className={bannerImg} alt="Donia Robinson" />
    </section>
  );
};

export default Header;
