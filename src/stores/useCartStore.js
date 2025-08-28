import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref([]);

  const addToCart = (item) => {
    const existingItem = cartItems.value.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      cartItems.value.push({ ...item });
    }
  };

  const removeFromCart = (itemId) => {
    cartItems.value = cartItems.value.filter(item => item.id !== itemId);
  };

  const clearCart = () => {
    cartItems.value = [];
  };

  const totalItems = () => {
    return cartItems.value.reduce((total, item) => total + item.quantity, 0);
  };

  const totalPrice = () => {
    return cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice,
  };
});
