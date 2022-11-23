import Layout from "../components/Layout";
import "../styles/globals.css";
Layout;
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    {/* this is the component we are current in */}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
