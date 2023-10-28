import { useEffect, useState, useRef } from "react";

import { RadioGroup } from "@headlessui/react";
import { Rating, LinearProgress, TextField } from "@mui/material";

import ProductReviewCard from "../components/ProductReviewCard/ProductReviewCard";

import ShopCard from "../components/ShopCard/ShopCard";
import { mensKurta } from "../Data/mensKurta";
import { womenSaree } from "../Data/womenSaree";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../../store/productReducer";
import { ToastContainer, toast } from "react-toastify";
import Loading from "../components/Loading/Loading";
import { addToCart, getCart } from "../../../store/cartReducer";
// const product = {
//   name: "Basic Tee 6-Pack",
//   price: "$192",
//   href: "#",
//   breadcrumbs: [
//     { id: 1, name: "Men", href: "#" },
//     { id: 2, name: "Clothing", href: "#" },
//   ],
//   images: [
//     {
//       src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
//       alt: "Two each of gray, white, and black shirts laying flat.",
//     },
//     {
//       src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
//       alt: "Model wearing plain black basic tee.",
//     },
//     {
//       src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
//       alt: "Model wearing plain gray basic tee.",
//     },
//     {
//       src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
//       alt: "Model wearing plain white basic tee.",
//     },
//   ],
//   colors: [
//     { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
//     { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
//     { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
//   ],
//   sizes: [
//     { name: "S", inStock: true },
//     { name: "M", inStock: true },
//     { name: "L", inStock: true },
//     { name: "XL", inStock: true },
//   ],
//   description:
//     'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
//   highlights: [
//     "Hand cut and sewn locally",
//     "Dyed with our proprietary colors",
//     "Pre-washed & pre-shrunk",
//     "Ultra-soft 100% cotton",
//   ],
//   details:
//     'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
// };
const reviews = { href: "#", average: 4, totalCount: 1 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetailPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  //  useSelector for accessing value of redux toolkit
  const { product, isLoading, error } = useSelector((state) => state.product);
  const [selectedSize, setSelectedSize] = useState("");
  // console.log(selectedSize);
  const quantityRef = useRef();

  useEffect(() => {
    dispatch(getProductById(params.productId));
  }, [dispatch, params.productId]);

  const navigateHandler = (e) => {
    e.preventDefault();
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    const quantity = quantityRef.current.value;
    if (!quantity) {
      toast.error("Please enter quantity");
      return;
    }

    const data = { productId: params.productId, size: selectedSize, quantity };
    dispatch(addToCart(data));
    dispatch(getCart());
    navigate("/cart");
  };

  if (error) {
    toast.error(error);
  }

  if (isLoading) {
    return (
      <div className="flex justify-center align-center h-[90vh]">
        <Loading />
      </div>
    );
  }

  return (
    <div className="bg-white w-[90%] mx-auto my-4">
      <ToastContainer position="top-center" autoClose={2000} />
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product?.product?.category?.map((breadcrumb, id) => (
              <li key={id}>
                <div className="flex items-center">
                  <a
                    href={"/"}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name[0].toUpperCase() +
                      breadcrumb.name.slice(1)}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={"/"}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product?.product?.name}
              </a>
            </li>
          </ol>
        </nav>
        <section className="grid grid-cols-1 justify-items-center lg:grid-cols-2 mt-5 lg:justify-items-start ">
          {/* Image gallery */}
          <div className=" lg:flex flex-col items-center px-4">
            <div className="  overflow-hidden rounded-lg lg:block  max-w-[27rem] max-h-[27rem]">
              <img
                src={product?.product?.imageUrl}
                alt={product?.product?.name}
                className="h-full w-full object-cover object-center"
              />
            </div>
            {/* <div className="hidden  lg:flex justify-center gap-x-4 mt-4">
              {product.images.map((image, i) => (
                <div
                  key={i}
                  className=" overflow-hidden rounded-lg max-h-[7rem] max-w-[7rem]"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-cover w-full h-full object-center"
                  />
                </div>
              ))}
            </div> */}
          </div>

          {/* Product info */}
          <div className="  px-4 pb-16 pt-10 sm:px-6    flex flex-col  lg:px-8 lg:pb-24 lg:pt-16 ">
            <div className=" lg:border-r  lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 ">
                {product?.product?.title}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4  lg:mt-2">
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-normal text-gray-900  opacity-60">
                    {product?.product?.description}
                  </p>
                  {/*    prices */}
                  <div className="flex gap-x-2 space-x-5 text-lg font-semibold">
                    <p className="text-semibold">
                      Rs{" "}
                      {product?.product?.price -
                        product?.product?.discountPrice}
                    </p>
                    <p className="line-through opacity-60 ">
                      Rs {product?.product?.price}
                    </p>
                    <p className="text-green-500">
                      {product?.product?.discountPercent}% off
                    </p>
                  </div>
                </div>
              </div>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <Rating name="read-only" value={4} readOnly />
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                  <a
                    href={reviews.href}
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {reviews.totalCount} reviews
                  </a>
                </div>
              </div>

              <form className="mt-10">
                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  </div>

                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a size
                    </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {product?.product?.sizes?.map(
                        (size) =>
                          size.name !== "" && (
                            <RadioGroup.Option
                              key={size.name}
                              value={size.name}
                              disabled={!size.quantity > 0}
                              className={({ active }) =>
                                classNames(
                                  size.quantity > 0
                                    ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                    : "cursor-not-allowed bg-gray-50 text-gray-200",
                                  active ? "ring-2 ring-indigo-500" : "",
                                  "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                                )
                              }
                              // className={
                              //   "ring-2 ring-indigo-500 group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                              // }
                            >
                              {({ active, checked }) => (
                                <>
                                  <RadioGroup.Label as="span">
                                    {size.name}
                                  </RadioGroup.Label>
                                  {size.quantity > 0 ? (
                                    <span
                                      className={classNames(
                                        active ? "border" : "border-2",
                                        checked
                                          ? "border-indigo-500"
                                          : "border-transparent",
                                        "pointer-events-none absolute -inset-px rounded-md"
                                      )}
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <span
                                      aria-hidden="true"
                                      className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                    >
                                      <svg
                                        className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                        viewBox="0 0 100 100"
                                        preserveAspectRatio="none"
                                        stroke="currentColor"
                                      >
                                        <line
                                          x1={0}
                                          y1={100}
                                          x2={100}
                                          y2={0}
                                          vectorEffect="non-scaling-stroke"
                                        />
                                      </svg>
                                    </span>
                                  )}
                                </>
                              )}
                            </RadioGroup.Option>
                          )
                      )}
                    </div>
                  </RadioGroup>
                </div>
                <div className="mt-5">
                  <TextField
                    type="number"
                    label="Quantity"
                    variant="outlined"
                    className="w-[25%]"
                    defaultValue={1}
                    InputProps={{ inputProps: { min: 1 } }}
                    inputRef={quantityRef}
                  />
                </div>
                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-purple-600 px-8 py-3 text-base font-medium text-white hover:bg-pruple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  onClick={navigateHandler}
                >
                  Add to Cart
                </button>
              </form>
            </div>
          </div>
        </section>

        {/*  Review and Ratings */}
        <section className="mt-16 lg:mt-24">
          <h2 className="font-bold text-xl text-gray-900">
            Reviews and Ratings
          </h2>
          <div className="shadow-lg flex  flex-col flex-wrap md:flex-row justify-between my-5 p-7 gap-y-10">
            <div className="flex flex-col gap-3">
              {[1].map((el, i) => (
                <ProductReviewCard key={i} />
              ))}
            </div>
            <div className="flex flex-col gap-3 basis-[400px]">
              <h4 className="font-bold text-lg text-gray-900">
                Product Ratings
              </h4>
              <div className="flex  gap-3">
                <Rating readOnly value={4} />
                <p className="opacity-60 font-semibold">1 Rating</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="basis-[100px]">Excellent</p>
                <LinearProgress
                  value={40}
                  variant="determinate"
                  className="rounded-full"
                  color="success"
                  sx={{
                    width: "100%",
                    height: "7px",
                    backgroundColor: "#D8D9DA",
                  }}
                />
              </div>
              <div className="flex items-center gap-3">
                <p className="basis-[100px]">Very Good</p>
                <LinearProgress
                  value={40}
                  variant="determinate"
                  className="rounded-full"
                  color="secondary"
                  sx={{
                    width: "100%",
                    height: "7px",
                    backgroundColor: "#D8D9DA",
                  }}
                />
              </div>
              <div className="flex items-center gap-3">
                <p className="basis-[100px]">Good</p>
                <LinearProgress
                  value={40}
                  variant="determinate"
                  className="rounded-full"
                  color="primary"
                  sx={{
                    width: "100%",
                    height: "7px",
                    backgroundColor: "#D8D9DA",
                  }}
                />
              </div>
              <div className="flex items-center gap-3">
                <p className="basis-[100px]">Average</p>
                <LinearProgress
                  value={40}
                  variant="determinate"
                  className="rounded-full"
                  sx={{
                    width: "100%",
                    height: "7px",
                    backgroundColor: "#D8D9DA",
                  }}
                  color="warning"
                />
              </div>
              <div className="flex items-center gap-3">
                <p className="basis-[100px]">Poor</p>
                <LinearProgress
                  value={40}
                  variant="determinate"
                  className="rounded-full"
                  color="error"
                  sx={{
                    width: "100%",
                    height: "7px",
                    backgroundColor: "#D8D9DA",
                  }}
                />
              </div>
            </div>
          </div>
        </section>
        {/*  Similar Products */}
        <section className="mt-16 lg:mt-24">
          <h2 className="font-bold text-xl text-gray-900">Similar Products</h2>
          <div className="shadow-lg grid  grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-5 p-7 gap-y-5">
            {/*   If men Category then men products other wise woman */}
            {product?.product?.category[0].name === "men" &&
              mensKurta.map((item, index) => {
                return (
                  <ShopCard
                    key={index}
                    image={item.imageLink}
                    title={item.title}
                    description={item.description}
                  />
                );
              })}
            {product?.product?.category[0].name === "women" &&
              womenSaree.map((item, index) => {
                return (
                  <ShopCard
                    key={index}
                    image={item.imageLink}
                    title={item.title}
                    description={item.description}
                  />
                );
              })}
          </div>
        </section>
      </div>
    </div>
  );
}
