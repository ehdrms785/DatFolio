import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/reset.css";
import type { AppProps } from "next/app";

export default function DatFolio({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
