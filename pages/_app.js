import { NextUIProvider } from '@nextui-org/react';
import "react-datepicker/dist/react-datepicker.css";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
