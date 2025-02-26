import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

export const router = createBrowserRouter([
   {
      path:"/",
      element:<App/>,
      children:[
         {
            path:"/",
            element:<Home/>,
         },
         {
            path:"/cart",
            element:<Cart/>,
         }
      ]
   }
])

