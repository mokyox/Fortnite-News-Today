import type { AppProps } from "next/app";
import "../src/styles/styles.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
