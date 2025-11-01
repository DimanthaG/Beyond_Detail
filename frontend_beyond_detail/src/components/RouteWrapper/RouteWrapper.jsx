import React from "react";
import { useLocation } from "react-router-dom";
import { PageBackground } from "../BackgroundPaths/PageBackground";

/**
 * RouteWrapper component that applies PageBackground to all routes except Home
 * This ensures the dynamic background effect appears on all pages except the home page
 */
export function RouteWrapper({ children }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/home";

  if (isHomePage) {
    // Return children without PageBackground for Home page
    return <>{children}</>;
  }

  // Wrap all other pages with PageBackground
  return <PageBackground>{children}</PageBackground>;
}

/**
 * Higher-order component to wrap pages with RouteWrapper
 * Usage: withRouteWrapper(About)
 */
export function withRouteWrapper(PageComponent) {
  return function WrappedPage(props) {
    return (
      <RouteWrapper>
        <PageComponent {...props} />
      </RouteWrapper>
    );
  };
}

export default RouteWrapper;

