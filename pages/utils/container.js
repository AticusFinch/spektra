import React from "react";

import cssStyles from "./container.module.css";

const Container = ({ children, styles, className2 }) => {
  return (
    <div
      style={{ ...styles }}
      className={`${cssStyles.container} ${className2}`}
    >
      {children}
    </div>
  );
};

export default Container;
