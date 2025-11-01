import React from "react";
import FloatingPaths from "./FloatingPaths";
import "./PageBackground.scss";
import "./FloatingPaths.scss";

export function PageBackground({ children }) {
  return (
    <div className="page-background">
      <div className="page-background__effects">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      <div className="page-background__content">
        {children}
      </div>
    </div>
  );
}

export default PageBackground;

