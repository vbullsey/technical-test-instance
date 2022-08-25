import "../styles/global.css";
import type { AppProps } from "next/app";
import { wrapper } from "@/redux/store";

const MyApp: React.FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  return (
      <Component {...pageProps} />
  );
};

export default wrapper.withRedux(MyApp);
