import { useState } from 'react'
import './App.css'
import Navbar from './components/shared/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import  Login  from './components/auth/Login'
import Signup from './components/auth/Signup'
import { Toaster } from 'sonner'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'

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
   {
    path: '/Jobs',
    element: <Jobs   />
  },
  {
    path: '/description/:id',
    element: <JobDescription   />
  },
  {
    path: '/browse',
    element: <Browse/>
  },
  {
    path: '/Profile',
    element: <Profile/>
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