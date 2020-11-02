// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import App from 'next/app'
import Head from 'next/head'
import userStore from '../stores/userStore'
import {Provider,observer} from 'mobx-react'
import productStore from '../stores/productStore'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider userStore = {userStore} productStore={productStore}>
        <Head>
          {/* <script
            type="text/javascript"
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDnRNlXdpEKgmXveCIyDI9dh-brv_tqiYM&libraries=places"
          ></script> */}
        </Head>
        <Component {...pageProps} />
        {/* <ToastContainer /> */}
      </Provider>
    )
  }
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp