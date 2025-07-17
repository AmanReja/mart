import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./Components/Home.jsx";
import Contactus from "./Components/Contactus.jsx";

import Aboutus from "./Components/Aboutus.jsx";
import Services from "./Components/Services.jsx";
import Section1 from "./Components/Section1.jsx";
import Terms from "./Components/Terms.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="/" index element={<Home></Home>} />
      <Route path="/contactus" element={<Contactus />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/services" element={<Services />} />
      <Route path="/terms" element={<Terms />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
