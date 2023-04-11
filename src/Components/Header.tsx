import { getClassNames } from "./Header.classNames";
import bannerImgSrc from "../assets/img/banner.png";

const Header: React.FunctionComponent = () => {
  const { bannerImg } = getClassNames();
  return (
    <section>
      <img src={bannerImgSrc} className={bannerImg} alt="Donia Robinson" />
    </section>
  );
};

export default Header;
