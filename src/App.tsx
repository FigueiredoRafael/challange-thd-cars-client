import Navbar from "./components/Navbar";
import ToasterProvider from "./providers/ToasterProvider";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <ToasterProvider />
      <Outlet />
    </>
  );
}

export default App;
