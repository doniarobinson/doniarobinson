import { Text } from "@fluentui/react";
import CSS from "csstype";

const PhotoGallery: React.FunctionComponent = () => {
  const sectionStyles: CSS.Properties = {
    padding: "10px 0",
  };

  return (
    <section style={sectionStyles}>
      <Text variant={"mega"} block>
        <span>&#128105;&#127996;&#8205;&#128187;</span> (About)
      </Text>
    </section>
  );
};

export default PhotoGallery;
