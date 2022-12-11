import "../styles/styles.scss";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CartProvider } from "../context/cart.context";
import { UserProvider } from "../context/user.context";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <CartProvider>
          <UserProvider>
            <Suspense fallback={<p>Loading header</p>}>
              <Header />
            </Suspense>
            {children}
            <Footer />
          </UserProvider>
        </CartProvider>
      </body>
    </html>
  );
}
