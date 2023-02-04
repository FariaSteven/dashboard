import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Host from "./pages/host/Host";
import Hosts from "./pages/hosts/Hosts";
import Package from "./pages/package/Package";
import Packages from "./pages/packages/Packages";
import Updates from "./pages/updates/Updates";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/hosts",
    element: <Hosts />,
  },
  {
    path: "/hosts/:id",
    element: <Host />,
  },
  {
    path: "/packages",
    element: <Packages />,
  },
  {
    path: "/packages/:id",
    element: <Package />,
  },
  {
    path: "/updateHistory",
    element: <Updates />,
  },

  {
    path: "/updateHistory/:id",
    element: <Updates />,
  },
]);

export default router;
