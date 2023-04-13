import CSS from "csstype";

const PhotoGallery: React.FunctionComponent = () => {
  const sectionStyles: CSS.Properties = {
    padding: "10px 0",
  };

  return (
    <section style={sectionStyles}>
      <h1>
        <span>&#128105;&#127996;&#8205;&#128187;</span>
      </h1>
    </section>
  );
};

export default PhotoGallery;
