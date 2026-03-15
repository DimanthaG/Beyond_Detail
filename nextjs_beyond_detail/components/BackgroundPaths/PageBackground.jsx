import React from "react";
import FloatingPaths from "./FloatingPaths";
import AutomotiveBackground from "./AutomotiveBackground";
import "./PageBackground.scss";
import "./FloatingPaths.scss";
import "./AutomotiveBackground.scss";

export function PageBackground({ children, variant = "default" }) {
  return (
    <div className="page-background">
      <div className="page-background__effects">
        {variant === "automotive" ? (
          <AutomotiveBackground />
        ) : (
          <>
            <FloatingPaths position={1} />
            <FloatingPaths position={-1} />
          </>
        )}
      </div>
      <div className="page-background__content">
        {children}
      </div>
    </div>
  );
}

export default PageBackground;

