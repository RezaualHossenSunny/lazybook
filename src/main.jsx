import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './firebaseConfig.jsx';
import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Resistison from './pages/Resistison/Resistison.jsx';
import Login from './pages/Login/Login.jsx';
import Home from './pages/Home/Home.jsx';
import { store } from './Store.jsx'
import { Provider } from 'react-redux'
import PostVeiw from './pages/PostVeiw/PostVeiw.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home> ,
  },
  {
    path: "/resistion",
    element: <Resistison></Resistison> ,
  },
  {
    path: "/login",
    element: <Login></Login> ,
  },
  {
    path: "/home",
    element: <PostVeiw></PostVeiw> ,
  },
 

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<Provider store={store}>
<RouterProvider router={router} />
</Provider>
 

 
  
  </React.StrictMode>,
)
