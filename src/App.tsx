import React from "react";
import CSS from "csstype";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import Header from "./Components/Header";
import About from "./Components/About";
import PhotoGallery from "./Components/PhotoGallery";

export const App: React.FunctionComponent = () => {
  /*const appStyles: CSS.Properties = {
    backgroundColor: "#B09398",
  };*/

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Header />

      <About />

      <PhotoGallery />
    </>
  );
};
