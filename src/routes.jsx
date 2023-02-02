import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Hosts from "./pages/hosts/Hosts";
import Packages from "./pages/packages/Packages";
import Updates from "./pages/updates/Updates";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/hosts",
    element: <Hosts/>,
  },
  {
    path: "/packages",
    element: <Packages/>,
  },
  {
    path: "/updateHistory",
    element: <Updates/>,
  },
]);

export default router