import React from "react";
import { Helmet } from "react-helmet";

function Head({ title }) {
  return (
    <Helmet title={title} htmlAttributes={{ lang: "en" }}>
      <meta name="description" content="Spotify stuff" />
      <meta name="author" content="Thao Bui" />
    </Helmet>
  );
}

export default Head;
