import type { AppProps /*, AppContext */ } from 'next/app'
import {Provider} from "react-redux";
import {store} from "../redux/store";
import 'semantic-ui-css/semantic.min.css'

//global style
import "../styles/global.scss";

export default function App({ Component, pageProps }:AppProps) {
    return <Provider store={store}>
      <div>
        <Component {...pageProps} />
        <span>Static element</span>
      </div>
      </Provider>
  }