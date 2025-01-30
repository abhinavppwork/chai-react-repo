import './App.css'
import RoutLayout from './Router/RoutLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Router/Home'
import Register from './Router/Register'
import Login from './Router/Login'
import Technologies from './Router/Technologies'
function App() {
//routing configuration
const browserRouterObject = createBrowserRouter([
  {
  path: "",
  element:< RoutLayout/>,
  children:[{
    path: '',
    element:< Home />,
  },{
    path:'register',
    element: <Register />
    },
    {
      path:'login',
      element: <Login />
    },
    {
      path:'technologies',
      element: <Technologies />
    }
  ]
},
  
])

  return (
    
    <>
        <RouterProvider  router={browserRouterObject}/>
    </>
  )
}

export default App
