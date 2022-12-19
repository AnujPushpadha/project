import Cart from "./Pages/Cart";
import Thali from "./Pages/Thali";
import React from 'react'
const RouteArray = [

    {
        path: "/",
        element: <Thali />,
    },
    {
        path: "/cart",
        element: <Cart />,
    },




]


export default RouteArray;