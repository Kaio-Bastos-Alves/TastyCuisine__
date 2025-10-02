import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Login from './components/Login.tsx'
import Cadastro from './components/Cadastro.tsx'
import Home from './components/Home';
import Header from './components/header.tsx'

import 'bootstrap/dist/css/bootstrap.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
{
  path: "/login",
  element: <Login/>
},
{
  path: "/cadastro",
  element: <Cadastro/>
},
{
  path: "/home",
  element: <Home/>
},
{
  path: "/header",
  element: <Header/>
}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
