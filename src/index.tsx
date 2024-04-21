import { TourProvider } from "@reactour/tour";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { Router } from "./router/router";

const steps = [
  {
    selector: "#sidebarCollapse",
    content: "You can update your feed preferences here.",
  },
];

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <TourProvider
    steps={steps}
    defaultOpen={!localStorage.getItem("tour")}
    afterOpen={() => localStorage.setItem("tour", "true")}
  >
    <RouterProvider router={Router} />
  </TourProvider>
);
