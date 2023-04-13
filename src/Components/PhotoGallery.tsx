import { Gallery } from "react-grid-gallery";
import CSS from "csstype";
import { france } from "../assets/img/galleries";

const PhotoGallery: React.FunctionComponent = () => {
  const sectionStyles: CSS.Properties = {
    //backgroundColor: "#BFBCCB",
    padding: "10px 0",
  };

  return (
    <section style={sectionStyles}>
      <h1>😍</h1>
      <Gallery images={france} maxRows={2} rowHeight={275} />
    </section>
  );
};

export default PhotoGallery;
