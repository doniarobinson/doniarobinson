import { Gallery } from "react-grid-gallery";
import { france } from "../assets/img/galleries";

const PhotoGallery: React.FunctionComponent = () => {
  /*const sectionStyles: CSS.Properties = {
    padding: "10px 0",
  };*/

  return (
    <section>
      <h1>😍</h1>
      <Gallery images={france} maxRows={2} rowHeight={275} />
    </section>
  );
};

export default PhotoGallery;
