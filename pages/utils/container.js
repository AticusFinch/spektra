import React from "react";

import cssStyles from "./container.module.css";

const Container = ({ children, styles }) => {
  return (
    <div style={{ ...styles }} className={cssStyles.container}>
      {children}
    </div>
  );
};

export default Container;
