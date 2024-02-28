import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import App from './App.jsx'
import './index.css'
import Inscrir from './pages/Inscrir.jsx'
import Login from './pages/Login.jsx'
import Dashbord from './pages/Dashbord.jsx'
import Reinitial from "./pages/Reinitial.jsx"
import Initial from './pages/Initial.jsx'


const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <App />
    },
    {
      path:"/inscrir",
      element: <Inscrir />
    },
    {
      path:"/login",
      element: <Login />
    },
    {
      path:"/dashboard/:id",
      element:<Dashbord />
    },
    {
      path:"/reinitile_mdp",
      element: <Reinitial />
    },
    {
      path:"initialisation",
      element: <Initial />
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
