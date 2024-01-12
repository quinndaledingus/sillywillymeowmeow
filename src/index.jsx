import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutMe from "./AboutMe"

import ReactDOM from 'react-dom/client'
import App from './App'
import Consp1 from './Consp1'
import Consp2 from './Consp2'
import Consp3 from "./Consp3"
import Secret from "./Secret"
import Goodbye from "./Goodbye"

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
  },
  {
    path:"/AboutMe",
    element: <AboutMe/>,
  },
  {
    path:"/Consp1",
    element:<Consp1 />,
  },
  {
    path:"/Consp2",
    element:<Consp2/>,
  },
  {
    path:"Consp3",
    element:<Consp3/>,
  },
  {
    path:"Secret",
    element:<Secret/>,
  },
  {
    path:"Goodbye",
    element:<Goodbye />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);