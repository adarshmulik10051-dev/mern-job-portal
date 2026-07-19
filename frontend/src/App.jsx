import { useState } from 'react'
import './App.css'
import Navbar from './components/shared/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import  Login  from './components/auth/Login'
import Signup from './components/auth/Signup'
import { Toaster } from 'sonner'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Login',
    element: <Login />
  },
  {
    path: '/Signup',
    element: <Signup />
  },
])

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
      <Toaster />
    </>
  )
}

export default App