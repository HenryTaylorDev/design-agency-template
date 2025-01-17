import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "../styles/services.scss";
import Image from "../assets/cafe-2.jpg";

export const Services = () => {
  //   useLayoutEffect(() => {

  //   });

  //   return () => ctx.revert();
  // }, []);

  return (
    <div className="services padding">
      <div className="services__cols">
        <div className="services__col">
          <div className="services__header">
            <h2 className="white">Graphic Design .</h2>
            <h2 className="white">× Coding </h2>
            <h2 className="white"> = Creative Dev.</h2>
          </div>
        </div>
        <div className="services__col">
          <div className="services__row">
            <h4 className="white"># Design</h4>
            <p className="white">
              Nullam semper volutpat accumsan. Interdum et malesuada fames ac
              ante ipsum primis in faucibus. Praesent mattis ipsum et porta
              congue. Quisque condimentum id ipsum a porta. Mauris fermentum
              mauris at egestas lacinia. Nunc pharetra lectus vitae tincidunt
              lacinia. Donec sed ipsum id ex rhoncus vehicula.
            </p>
          </div>
          <div className="services__row">
            <h4 className="white"># Build</h4>
            <p className="white">
              Phasellus interdum feugiat metus ut fringilla. Nam commodo
              convallis fermentum. Nullam semper volutpat accumsan. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Praesent mattis
              ipsum et porta congue. Quisque condimentum id ipsum a porta.
              Mauris fermentum mauris at egestas lacinia. Nunc pharetra lectus
              vitae tincidunt lacinia.
            </p>
          </div>
          <div className="services__row">
            <h4 className="white"># Deploy</h4>
            <p className="white">
              Quisque condimentum id ipsum a porta. Mauris fermentum mauris at
              egestas lacinia. Nunc pharetra lectus vitae tincidunt lacinia.
              Donec sed ipsum id ex rhoncus vehicula. Nulla augue purus, mattis
              in dolor nec, placerat eleifend tellus. Nunc laoreet id purus vel
              sollicitudin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
