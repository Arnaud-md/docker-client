import { useState } from 'react'
import './App.css'
import {
  RouterProvider,
  BrowserRouter,
  createBrowserRouter
} from "react-router-dom";
import Formulaire from './Formulaire';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Formulaire />,
    },
    // {
    //   path: "/time",
    //   element: <Time />,
    // },
    {
      path: "/form",
      element: <Formulaire />,
    }
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
