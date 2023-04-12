import { Text } from "@fluentui/react";
import { Gallery } from "react-grid-gallery";
import { france } from "../assets/img/galleries";
import { getClassNames } from "./PhotoGallery.classNames";

const PhotoGallery: React.FunctionComponent = () => {
  const { sectionStyles } = getClassNames();
  return (
    <section className={sectionStyles}>
      <Text variant={"mega"} block>
        😍
      </Text>
      <Gallery images={france} maxRows={2} rowHeight={275} />
    </section>
  );
};

export default PhotoGallery;
