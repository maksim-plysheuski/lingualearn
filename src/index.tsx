import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "app/store";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { Register } from "features/auth/Register/Register";
import { Login } from "features/auth/Login/Login";
import { Header } from "common/components/Header/Header";
import { ProfilePage } from "features/auth/Profile/ProfilePage";


const router = createBrowserRouter([{
  element: <Header />,
  children: [
    {
      path: "/",
      element: <h1>Hello</h1>
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/registration",
      element: <Register />
    },
    {
      path: "/profile",
      element: <ProfilePage />
    }]
}
]);

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);


reportWebVitals();
