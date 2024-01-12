// files imports
import WebMain from "./topics/Chapter03/WebMain";
import Home from "./topics/Chapter03/router-pages/Link/Home";
import About from "./topics/Chapter03/router-pages/Link/About";
import Contact from "./topics/Chapter03/router-pages/Link/Contact";

// package imports
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WebMain />,
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
]);

export default router;
