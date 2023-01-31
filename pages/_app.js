import Layout from "../components/Layout";
import "../styles/globals.css";

import { StateContext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";
function MyApp({ Component, pageProps }) {
  return (
    //through wrap with StateContext we can pass data/state to every children component
    <StateContext>
      <Layout>
        <Toaster />
        {/* this is the component we are current in */}
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
