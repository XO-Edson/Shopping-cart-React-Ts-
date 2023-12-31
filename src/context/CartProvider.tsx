import { ReactNode, createContext, useState } from "react";

export type CartItem = {
  id: number;
  quantity: number;
};

export type CartContext = {
  cartQuantity: (id: number) => number;
  addToCart: (id: number) => void;
  removeCart: (id: number) => void;
  deleteCart: (id: number) => void;
  totalCartQuantity: number;
};

export const shoppingCartContext = createContext({} as CartContext);

type ChildrenProps = {
  children: ReactNode;
};
export const CartContextProvider = ({ children }: ChildrenProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const totalCartQuantity = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  function cartQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function addToCart(id: number) {
    setCartItems((currItems) => {
      const existingItem = currItems.find((item) => item.id === id);

      if (!existingItem) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
    });
  }

  function removeCart(id: number) {
    setCartItems((currItems) => {
      const existingItem = currItems.find((item) => item.id === id);

      if (existingItem && existingItem.quantity > 1) {
        return currItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return currItems.filter((item) => item.id !== id);
      }
    });
  }

  function deleteCart(id: number) {
    setCartItems((currItems) => {
      const filteredItems = currItems.filter((item) => item.id !== id);

      return filteredItems;
    });
  }

  return (
    <shoppingCartContext.Provider
      value={{
        cartQuantity,
        addToCart,
        removeCart,
        deleteCart,
        totalCartQuantity,
      }}
    >
      {children}
    </shoppingCartContext.Provider>
  );
};

export default shoppingCartContext;
