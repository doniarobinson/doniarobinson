import { Text } from "@fluentui/react";
import { Gallery } from "react-grid-gallery";
import { france } from "../assets/img/galleries";
import CSS from "csstype";

const PhotoGallery: React.FunctionComponent = () => {
  const sectionStyles: CSS.Properties = {
    backgroundColor: "#BFBCCB",
    padding: "10px 0",
  };

  return (
    <section style={sectionStyles}>
      <Text variant={"mega"} block>
        😍
      </Text>
      <Gallery images={france} maxRows={2} rowHeight={275} />
    </section>
  );
};

export default PhotoGallery;
