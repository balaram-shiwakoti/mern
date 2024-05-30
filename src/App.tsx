import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./components/Homepage";
import BgContainer from "./components/bg-container";
import SignupPage from "./components/authentication/SignupPage";
import DashboardPage from "./components/DashboardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <BgContainer>
        <Homepage />
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
  {
    path: "/dashboard",
    element: (
      <BgContainer>
        <DashboardPage />
      </BgContainer>
    ),
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
