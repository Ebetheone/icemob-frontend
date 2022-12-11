import type { AppProps } from "next/app";
import { useEffect } from "react";
import { CartProvider, useCartContext } from "../context/cart.context";
function App({ Component, pageProps }: AppProps) {
  const { cartItems } = useCartContext();

  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
export default App;
