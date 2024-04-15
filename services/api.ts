import { ProductType, ProductResponse } from "@/types/Product"

export const getProducts = async () => {
  const res = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC')

  if (res.ok) {
    const data: ProductResponse = await res.json()
    return data
  }
}

const cartItems: ProductType[] = []

export const getCartItems = async () => {
  return cartItems
}

export const updateMockCart = async (product: ProductType) => {
    const productIndex = cartItems.findIndex(item => item.id === product.id);
    if (productIndex !== -1) {
      cartItems[productIndex] = {...cartItems[productIndex]};
      if (cartItems[productIndex].quantity === 0) {
        cartItems.splice(productIndex, 1)
      }
    }
    return cartItems;
}

export const mockCart = async (product: ProductType) => {
  const productIndex = cartItems.findIndex(item => item.id === product.id);
  if (productIndex !== -1) {
    cartItems[productIndex] = {...cartItems[productIndex], quantity: cartItems[productIndex].quantity + 1};
  } else {
    return cartItems.push({...product, quantity: 1})
  }
}