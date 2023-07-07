import React from 'react'

import { useRoutes } from 'react-router-dom'

import Home from '../layout/Applayout/Home'
import Product from '../layout/Applayout/Product'
import Cart from '../pages/cart'



import Login from '../pages/Login'
import Signup from '../pages/Signup'

const Approutes = () => {
    const elements = useRoutes([
        {
            children:[{
                element:<Login/>,
                path:'/'

            },
            {
                element:<Signup/>,
                path:'/signup'
            }
        ],
        
      
        },
        {
           element:<Home/>,
           path:'/home'
        },
        {
            element:<Product/>,
            path:'/product/:uid'
        },

        {
            element:<Cart/>,
            path:'/cart'
        }
    ])
  return elements
}


export default Approutes