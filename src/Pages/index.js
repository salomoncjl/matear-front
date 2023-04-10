import Register from "./Register/Register.jsx"
import Login from "./Login/Login.jsx"
import IndexLayout from "../../src/Layouts/IndexLayout/IndexLayout.jsx"
import MainLayout from "../Layouts/MainLayout.jsx"
import Shop from "./Shop/Shop.jsx"
import Details from "./Details/Details.jsx"
import Cart from "./Cart/Cart.jsx"
import Profile from "./Profile/Profile.jsx"

import { createBrowserRouter } from "react-router-dom"
import Home from "./Home/Home.jsx"
import Index from "./Index/Index.jsx"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexLayout />,
    children: [
      { path: '/', element: <Index /> },
      // { path: '/', element: <Home /> },
      { path: "/signup", element: <Register /> },
      { path: "/signin", element: <Login /> },
    ]
  },

  {
    path: '/',
    element: <MainLayout />,
    children: [

      { path: '/home', element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/details/:id", element: <Details /> },
      { path: "/shoppingcart", element: <Cart /> },
      { path: "/profile", element: <Profile/>},
      //   { path: "/*", element: <NotFound /> },
    ]
  }

])