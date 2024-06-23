
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="h-full overflow-hidden">
      <div className="">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Layout