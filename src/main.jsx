import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/Root/Root.jsx';
import Eroor from './components/Eroor/Eroor.jsx';
import Home from './components/pages/Home.jsx';
import Recipes from './components/pages/Recipes.jsx';
import About from './components/pages/About.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:Eroor,
    children:[
      {
        index:true,
        path:'/',
        Component:Home
      },
      {
        path:'recipes',
        loader: () => fetch ('fackData.json'),
        Component:Recipes
      },

      {
        path:"about",
        Component:About
      }
    ]
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
