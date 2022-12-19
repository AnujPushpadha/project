import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RouteArray from "./routes";
import { store } from './redux/store'
import { Provider } from 'react-redux'
const router = createBrowserRouter(RouteArray)
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,


)
