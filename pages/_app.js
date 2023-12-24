import { CartProvider } from "@/src/components/Context";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </>
  );
}
