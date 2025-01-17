import React, { useRef, useState } from "react";
import "../styles/portfolio.scss";

export const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio__cols">
        <div className="portfolio__left"></div>
        <div className="portfolio__right">
          <h2>Satori Food</h2>
          <p>
            In in auctor erat. Praesent vitae nisi vitae velit interdum luctus.
            Nullam malesuada venenatis leo, et ultrices neque feugiat sit amet.
            Nulla facilisi. Praesent eu malesuada lectus. Aliquam et dui at eros
            ornare sollicitudin. Donec tincidunt arcu sit amet nibh aliquam, in
            egestas ipsum tincidunt.
          </p>
        </div>
      </div>
    </div>
  );
};
