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


const router = createBrowserRouter([{
  element: <Header />,
  children: [
    {
      path: "/",
      element: <h1>profile page</h1> /*<Header />*/
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
      element: <h1>profile page</h1>
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
