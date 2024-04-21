import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Feeds from "../pages/feeds/Feeds";
import News from "../pages/news/News";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Feeds />,
      },
      {
        path: "/news",
        element: <News />,
      },
    ],
  },
]);
