import React from "react";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineMinusSquare,
  AiOutlinePlusSquare,
} from "react-icons/ai";
import Product from "../../components/Product";
import { urlFor, client } from "../../lib/client";
import { useStateContext } from "../../context/StateContext";
const ProductDetails = ({ product, products }) => {
  // destructure the parameter from the product
  const { image, name, price, details } = product;
  console.log(product);
  //destructure the global states we create at stateContext.js
  const {
    decreaseQuantity,
    increaseQuantity,
    quantity,
    handleAdd,
    setShowCart,
  } = useStateContext();

  const handleShopNow = () => {
    setShowCart(true);
  };
  return (
    <div>
      <div className="flex gap-8 m-8 text-lightCyan">
        <div id="image-container">
          <img
            src={urlFor(image && image[0])}
            alt="product-image"
            className="w-[400px] rounded-md cursor-pointer border-4 border-[#edeaea] hover:border-slate-500 shadow-xl lg:w-[500px]"
          />
        </div>
        <div className="ml-8">
          <h1 className="mb-1 text-6xl uppercase">{name}</h1>
          <div>
            <div className="flex items-center gap-1 my-2 text-xl">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <p>(25)</p>
            </div>
          </div>
          <div className="my-3">
            <h3 className="text-xl font-bold">Details:</h3>
            <p>{details}</p>
            <p className="text-xl font-semibold text-red">{price} SEK</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Quantity: </h3>
            <p className="flex items-center gap-2 my-3 ">
              <span
                id="minus"
                className="cursor-pointer"
                onClick={decreaseQuantity}
              >
                <AiOutlineMinusSquare size="2.5rem" />
              </span>
              <span id="quantity" className="text-[24px] font-bold">
                {quantity}
              </span>
              <span onClick={increaseQuantity}>
                <AiOutlinePlusSquare size="2.5rem" />
              </span>
            </p>
            <div id="buttons" className="flex flex-col gap-4 my-16 md:flex-row">
              <button
                className="p-3 text-lg text-white ease-out bg-black rounded-md shadow-lg cursor-pointer transition-scale md:px-4 lg:px-5 md:py-3 lg:py-4 hover:scale-105"
                type="button"
                onClick={() => handleAdd(product, quantity)}
              >
                Add to Cart
              </button>
              <button
                className="p-3 text-lg text-white ease-in-out rounded-md shadow-lg cursor-pointer transition-scale bg-red hover:scale-105"
                type="button"
                onClick={handleShopNow}
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="similar-products" className="mt-28">
        <h2 className="pt-8 text-4xl font-semibold text-center text-lightCyan">
          You may also like{" "}
        </h2>
        <div id="marquee" className="">
          <div className="flex flex-wrap justify-center gap-5 my-5">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  //   that will give all product and return the current slug property of product
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

// we use get StatisProps function to make API call to get product details information. This specific function help that the page is prerender at build time so it is ready for user before the request. Additionally we can use params parameter when we are destructure so we can get actual slug

export const getStaticProps = async ({ params: { slug } }) => {
  // we can make query dynamic so we can get the specific product with slug
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  //we can also fetch all similar products
  const productsQuery = '*[_type == "product"]';

  // fetch data from sanity client
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);
  console.log(product);
  // whatever getServerSideProps return it populates in our function
  return {
    props: { product, products },
  };
};

export default ProductDetails;
