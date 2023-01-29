import React from "react";
import { client } from "../lib/client.js";
import {
  Footer,
  FooterBanner,
  HeroBanner,
  Navbar,
  Product,
} from "../components/index.js";
const Home = ({ products, bannerData }) => {
  return (
    <div className="">
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {/* {console.log(bannerData)} */}
      <div>
        <h2 className="my-5 text-5xl font-semibold tracking-wider text-center capitalize text-slate-600">
          Top selling products
        </h2>
        <p className="text-2xl font-semibold text-center text-slate-400">
          {" "}
          Recommended products
        </p>
      </div>
      <div className="flex flex-wrap justify-center w-full gap-5 my-5">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    
    </div>
  );
};

// to be able to fetch data from sanity in next.js app we need to define getServerSideProps function so next.js will prerender this page for every request using the data returned by getServerSideprops

export const getServerSideProps = async () => {
  // use qroq to query all product
  const query = '*[_type == "product"]';
  // fetch data from sanity client
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  // whatever getServerSideProps return it populates in our function
  return {
    props: { products, bannerData },
  };
};
export default Home;
