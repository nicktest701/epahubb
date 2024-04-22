import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SidebarProvider from "../context/SidebarProvider";

function Layout() {
  return (
    <SidebarProvider>
      <div className="wrapper flex justify-center items-start gap-4 overflow-x-clip">
        <Sidebar />

        <main className="w-full mx-auto md:px-4">
          <Header />
          <div className="px-4">
            <Outlet />
          </div>
          <div className="text-center flex justify-center gap-2 py-2">
            <p>Copyright &copy; {new Date().getFullYear()}</p>|
            <p className="text-primary500">Owusu Ansah Kwasi</p>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}

export default Layout;
