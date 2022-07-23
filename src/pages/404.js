import React from "react";
import Layout from "../layout/Layout";

const NotFound = (props) => (
  <>
    <Layout theme={props.theme} toggleTheme={props.toggleTheme}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist....😐</p>
    </Layout>
  </>
);

export default NotFound;
