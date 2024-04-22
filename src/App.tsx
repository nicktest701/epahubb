import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Analysis from "./pages/Analysis";
import Portal from "./pages/Portal";
import Layout from "./pages/Layout";
import Market from "./pages/Market";
import Statistics from "./pages/Statistics";
import LeaderBoard from "./pages/LeaderBoard";
import Competition from "./pages/Competition";
import Certificates from "./pages/Certificates";
import Billing from "./pages/Billing";
import Downloads from "./pages/Downloads";
import Settings from "./pages/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/leaderboard",
        element: <LeaderBoard />,
      },
      {
        path: "/competition",
        element: <Competition />,
      },
      {
        path: "/certificates",
        element: <Certificates />,
      },
      {
        path: "/billing",
        element: <Billing />,
      },
      {
        path: "/downloads",
        element: <Downloads />,
      },
      {
        path: "/portal",
        element: <Portal />,
      },
      {
        path: "/analysis",
        element: <Analysis />,
      },
      {
        path: "/market",
        element: <Market />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "*",
    element: (
      <div className="w-full h-svh grid place-items-center my-auto">
        <p className="text-5xl text-primary500">Page Not Found</p>
        <Link to="/">Go Back</Link>
      </div>
    ),
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
