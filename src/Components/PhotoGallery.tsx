import { Gallery } from "react-grid-gallery";
import { france } from "../assets/img/galleries";
/*import { getClassNames } from "./Header.classNames";*/

const PhotoGallery: React.FunctionComponent = () => {
  //const { banner, bannerImg } = getClassNames();
  return (
    <section>
      <p>Mixed Photo Gallery</p>
      <Gallery images={france} />
    </section>
  );
};

export default PhotoGallery;
