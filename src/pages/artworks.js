import React from "react";
import Layout from "../layout/Layout";
import Artworks from "../components/artworks/Artworks";

const Artwork = (props) => {
  return (
    <>
      <Layout theme={props.theme} toggleTheme={props.toggleTheme}>
        <Artworks />
      </Layout>
    </>
  );
};

export default Artwork;
