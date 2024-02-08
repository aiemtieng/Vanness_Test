import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserAuthContextProvider } from './context/UserAuthContext.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Register from './component/Register.jsx'
import Login from './component/Login.jsx'
import HomePage from './component/HomePage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: 'signup',
    element: <Register/>
  },
  {
    path: 'login',
    element: <Login/>
  },
  {
    path: 'homepage',
    element: <HomePage/>
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <RouterProvider router={router} />
    </UserAuthContextProvider>
  </React.StrictMode>
);
