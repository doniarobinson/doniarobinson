import { Gallery } from "react-grid-gallery";
import { france } from "../assets/img/galleries";

const PhotoGallery: React.FunctionComponent = () => {
  return (
    <section className="container">
      <h2>😍 🛫</h2>
      <Gallery images={france} maxRows={1} rowHeight={275} />
    </section>
  );
};

export default PhotoGallery;
