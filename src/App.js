import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import React from 'react'
import Header from './components/Header'
import Items from './components/Items'
import CartProvider from './components/store/CartProvider'
import About from './components/pages/About'

const router=createBrowserRouter([
  {path:'/about',element:<About/>},
  
])
const App = () => {
  return (
    
    
    <CartProvider>
    <RouterProvider router={router}/>
      <Header/>
      <Items/>
    </CartProvider>
   
  )
}

export default App