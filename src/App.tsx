import React from "react";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import About from "./Components/About";
import PhotoGallery from "./Components/PhotoGallery";
import Footer from "./Components/Footer";

export const App: React.FunctionComponent = () => {
  /*const appStyles: CSS.Properties = {
    backgroundColor: "#B09398",
  };*/

  return (
    <>
      <Nav />
      <Header />
      <About />
      <PhotoGallery />
      <Footer />
    </>
  );
};
