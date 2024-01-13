import { RouterProvider, createBrowserRouter } from "react-router-dom"

// library imports
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// layouts and pages
import { Main } from "./layout"
import { Dashboard } from "./pages"

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      errorElement: '',
      children: [
        {
          index: true,
          element: <Dashboard/>
        }
      ]
    }
  ])
  
  return (
    <>
      <RouterProvider router={router}/>
      <ToastContainer/>
    </>
  )
}

export default App
