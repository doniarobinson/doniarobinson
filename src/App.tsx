import React from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import PhotoGallery from "./Components/PhotoGallery";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <About />
      <PhotoGallery />
    </>
  );
};
