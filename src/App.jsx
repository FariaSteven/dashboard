import { RouterProvider } from "react-router-dom";
import Menu from "./components/menu/Menu";
import router from "./routes";

import "./styles/global.css";

function App() {
  return (<RouterProvider router={router} />);
}

export default App;
