import React from "react";
import Quotes from "../helpers/quotes.json";

const Author = ({ index }) => {
  return (
    <>
      <p>{Quotes[index].author}</p>
    </>
  );
};

export default Author;
