import React from "react";
import ReactDOMClient from "react-dom/client";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";
import "./set-public-path";

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Root,
  errorBoundary() {
    return <div className="error">Error loading navbar</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
