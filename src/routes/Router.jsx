import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
]);

export default Router;
