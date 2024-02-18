import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Root from "../Root";
import About from "./About";
import Home from "./Home";
import MenuComponent from "./MenuComponent";

export default function AppOpt2() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      //loader: rootLoader,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
    {
      path: "/menu/:userId",
      element: <MenuComponent />
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
