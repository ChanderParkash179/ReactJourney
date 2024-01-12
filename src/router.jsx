// files imports
import WebMain from "./topics/Chapter03/WebMain";
import Home from "./topics/Chapter03/router-pages/Home";
import About from "./topics/Chapter03/router-pages/About";
import Contact from "./topics/Chapter03/router-pages/Contact";

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
