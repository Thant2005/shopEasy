import { Outlet } from "react-router";
import Navbar from "../Navbar";

function Layout() {
  return (
    <div className="min-h-screen overflow-hidden bg-mauve-300/15">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
