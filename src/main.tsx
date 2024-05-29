import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";
import SignupPage from "./components/authentication/SignupPage.tsx";
import BgContainer from "./components/bg-container.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <BgContainer>
        <App />
      </BgContainer>
    ),
  },
  {
    path: "/signup",

    element: (
      <BgContainer>
        <SignupPage />
      </BgContainer>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
