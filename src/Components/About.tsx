import { Text } from "@fluentui/react";

import { getClassNames } from "./About.classNames";

const PhotoGallery: React.FunctionComponent = () => {
  const { sectionStyles } = getClassNames();
  return (
    <section className={sectionStyles}>
      <Text variant={"mega"} block>
        <span>&#128105;&#127996;&#8205;&#128187;</span> (About)
      </Text>
    </section>
  );
};

export default PhotoGallery;
