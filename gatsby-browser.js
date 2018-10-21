import wrapWithProvider from "./wrap-with-provider";
import ReactGA from "react-ga";
ReactGA.initialize("UA-127866309-1");

export const onRouteUpdate = (state, page, pages) => {
  //   console.log("state", state);
  //   console.log("page", page);
  //   console.log("pages", pages);
  console.log("new pathname", state.location.pathname);
  ReactGA.pageview(state.location.pathname);
};

export const wrapRootElement = wrapWithProvider;
