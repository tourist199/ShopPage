import React from "react";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
// import Cart from "./Components/Cart";
import NotFound from "./Components/NotFound";

const routes = [
  {
    path: "/about",
    exact: false,
    main: () => <About />
  },
  {
    path: "/services",
    exact: false,
    main: () => <Services />
  },
  {
    path: "/contact",
    exact: false,
    main: () => <Contact />
  },
  {
    path: "/",
    exact: false,
    main: () => <NotFound />
  }
];

export default routes;
