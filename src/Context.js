import React, { useState, useContext, useEffect, useReducer } from 'react'
import { useCallback } from 'react'
import { storeProducts, detailProduct } from './components/data'
import reducer from './components/reducer'
const AppContext = React.createContext()




const initialState = {
  products: storeProducts,
  detail: detailProduct,
  cart: [],
  modalOpen: false,
  modalDetails: [],
  cartSubTotal: 0,
  cartTotal: 0,
  cartTax:0
}

const AppProvider = ({ children }) => {

const [state,dispatch] = useReducer(reducer,initialState)
const {products,detail,cart,modalOpen,modalDetails,cartSubTotal,cartTotal,cartTax} = state

  // const [products,setProducts]  = useState(storeProducts)
  // const [detail,setDetail]  = useState(detailProduct)
  // const [cart, setCart] = useState([])
  // const [modalOpen, setModalOpen] = useState(false)
  // const [modalDetails,setModalDetails] = useState([])
  // const [cartSubTotal,setCartSubTotal] = useState(0)
  // const [cartTotal,setCartTotal] = useState(0)
  // const [cartTax,setCartTax] = useState(0)

 
  const addToCart = (id) => {
    const temp = [...products]
    const index = temp.indexOf(products.find(item => item.id === id))
    const product = temp[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    dispatch({type:'addToCart',payLoad1:[...temp],payLoad2:[ ...cart,product],payLoad3:{ ...product }})
    // setProducts([...temp])
    // setCart([ ...cart,product])
    // setDetail({ ...product })
  }
  

  const handleDetails = (id) => {
    dispatch({type:'handleDetail',payLoad:products.find(item => item.id === id)})
    //setDetail(products.find(item => item.id === id))
  }
  const openModal = (id) => {
    //setModalOpen(true)
   // const product = products.find(item => item.id === id)
    //setModalDetails(product)
    dispatch({type:'openModal',payLoad:products.find(item => item.id === id)})
    
  }
  
  const closeModal = () => {
    //setModalOpen(false)
    dispatch({type:'closeModal'})
    
  }

  const increment = (id) => {
    
    // setCart(cart.map(item => {
    //   if (item.id === id) {
    //     item.count += 1
    //     item.total = item.count*item.price
    //     return {...item}
    //   }
    //   return item
    // }))
    dispatch({type:'increment',payLoad:cart.map(item => {
      if (item.id === id) {
        item.count += 1
        item.total = item.count*item.price
        return {...item}
      }
      return item
    })})

    
    
  }
  const decrement = (id) => {
    
    // setCart(cart.map(item => {
    //   if (item.id === id) {
    //     item.count -= 1
    //     item.total = item.count * item.price
          
    //     return { ...item }
        
       
    //   }
    //   return item
      
    // }))
    dispatch({type:'decrement',payLoad:cart.map(item => {
      if (item.id === id) {
        item.count -= 1
        item.total = item.count * item.price
          
        return { ...item }
        
       
      }
      return item
      
    })})
  }
  const removeItem = (id) => {
    const temp = [...products]
    const cartFilter = cart.filter(item => item.id !== id)
    const product = products.find(item => item.id === id)
    product.inCart = false;
    product.count = 0;
    product.total = 0;
    //setCart(cartFilter)
    //setProducts([...temp])
    dispatch({type:'removeItem',payLoad1:cartFilter,payLoad2:[...temp]})
  }
  const clearCart = () => {
    
    // setCart([])
    // setProducts(storeProducts.map(product => {
    //   product.inCart = false;
    //   product.count = 0;
    //   product.total = 0;
    //   return (
    //     product
    //     )
    //   }))
      dispatch({type:'clearCart',payLoad1:[],payLoad2:storeProducts.map(product => {
        product.inCart = false;
        product.count = 0;
        product.total = 0;
        return (
          product
          )
        })})
  }

  const addTotal = () => {
    let subtotal = 0;
    cart.map(item=>subtotal+=item.total)
    const tax = parseFloat((subtotal * 0.1).toFixed(2))
    const total = subtotal + tax;
    dispatch({type:'addTotal',payLoad1:subtotal,payLoad2:tax,payLoad3:total})
    // setCartSubTotal(subtotal)
    // setCartTax(tax)
    // setCartTotal(total)
  }

  useEffect(() => {
    addTotal()
  },[products,cart])

  return <AppContext.Provider value={{
    products,
    detail,
    cart,
    modalOpen,
    modalDetails,
    cartSubTotal,
    cartTax,
    cartTotal,
    handleDetails,
    addToCart,
    openModal,
    closeModal,
    increment,
    decrement,
    removeItem,
    clearCart,
    addTotal
  }}>
    {children}
  </AppContext.Provider>
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }