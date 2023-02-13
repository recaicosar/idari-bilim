import React from "react";
import App from 'next/app';
import type { AppProps, AppContext } from "next/app";
import Script from 'next/script'

 import "bootstrap/dist/css/bootstrap.min.css";

import { Poppins } from "@next/font/google";
const poppins = Poppins({
  subsets:["latin"],
  display:"swap",
  weight: ["100","200","300", "400", "500", "600", "700","800","900"],
});
import "/public/assets/css/style.css";
import "/public/assets/css/responsive.css";
import { AppState } from "store/type";
import Head from "next/head";




function MyApp({ Component, pageProps }: AppProps) {



  React.useEffect(() => {
   if (typeof document !== undefined) {
    require('bootstrap/dist/js/bootstrap') 
  }
  }, [])



  return (
    <>
      {/* 
      <Head>
        <title>{common.features.OrganizationTitle}</title>
      </Head>*/}
    <style jsx global>{`
        :root {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
      </>
  );
}


 MyApp.getInitialProps = async (appContext: AppContext) => {
  // appContext.router.query?.slug || ''
   const appProps = await App.getInitialProps(appContext);

   return { 
    ...appProps,       
   }
 }

export default MyApp;