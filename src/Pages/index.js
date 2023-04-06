


import Register from "./Register/Register.jsx"
import Login from "./Login/Login.jsx"
import IndexLayout from "../../src/Layouts/IndexLayout/IndexLayout.jsx"

import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
    // { path: "/",
    // element: <IndexLayout/>,
    // children: [
    //   // {path: "/", element: <Index/>},
     
      { path: "/signup", element: <Register /> },
      { path: "/signin", element: <Login/> },
    //   { path: "/*", element: <NotFound /> },
      


  ]   

)