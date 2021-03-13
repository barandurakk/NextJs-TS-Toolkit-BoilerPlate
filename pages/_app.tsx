import type { AppProps /*, AppContext */ } from 'next/app'
import {Provider} from "react-redux";
import {store} from "../redux/store";

//global style
import "../styles/global.scss";

export default function App({ Component, pageProps }:AppProps) {
    return <Provider store={store}><Component {...pageProps} /></Provider>
  }