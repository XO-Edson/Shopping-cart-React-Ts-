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
};

export const shoppingCartContext = createContext({} as CartContext);

const [cartItems, setCartItems] = useState<CartItem[]>([]);

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

    if (existingItem?.quantity) {
      return [...currItems, { id, quantity: existingItem.quantity - 1 }];
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

type ChildrenProps = {
  children: ReactNode;
};
export const CartContextProvider = ({ children }: ChildrenProps) => {
  return (
    <shoppingCartContext.Provider
      value={{ cartQuantity, addToCart, removeCart, deleteCart }}
    >
      {children}
    </shoppingCartContext.Provider>
  );
};

export default shoppingCartContext;
