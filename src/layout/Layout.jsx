
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
const Layout = () => {
  return (
    <div className="h-100 overflow-hidden">
      <Navbar></Navbar>
      <div className="">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Layout