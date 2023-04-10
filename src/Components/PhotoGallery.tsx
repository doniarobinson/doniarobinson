import { Gallery } from "react-grid-gallery";
import { france } from "../assets/img/galleries";
/*import { getClassNames } from "./Header.classNames";*/

const PhotoGallery: React.FunctionComponent = () => {
  //const { banner, bannerImg } = getClassNames();
  return (
    <section>
      <Gallery images={france} rowHeight={300} />
    </section>
  );
};

export default PhotoGallery;
