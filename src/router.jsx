// files imports
// import WebMain from "./topics/Chapter03/WebMain";

// import Home from "./topics/Chapter03/router-pages/Link/Home";
// import About from "./topics/Chapter03/router-pages/Link/About";
// import Contact from "./topics/Chapter03/router-pages/Link/Contact";

import Home from "./topics/Chapter03/router-pages/NavLink/Home";
import About from "./topics/Chapter03/router-pages/NavLink/About";
import Contact from "./topics/Chapter03/router-pages/NavLink/Contact";
import Main from "./topics/Chapter03/router-pages/NavLink/Main";

// package imports
import { createBrowserRouter } from "react-router-dom";
import Error from "./topics/Chapter03/router-pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // element: <WebMain />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;
