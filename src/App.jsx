import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import Cart from "./Components/Cart/Cart";
import Product from "./Components/ProductDetails/ProductDetails";
import Contact from "./Components/Contact/Contact";
import CounterContextProvider from "./Context/CounterContext";
import CartContextProvider from "./Context/CartContext";
import Categories from "./Components/Categories/Categories";
import CheckOut from "./Components/CheckOut/CheckOut";
import CategoryProducts from "./Components/CategoryProducts/CategoryProducts";
import NotFound from "./Components/NotFound/NotFound";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import FeaturedProducts from "./Components/FeaturedProducts/FeaturedProducts";
import SingleProduct from "./Components/SingleProduct/SingleProduct";

let routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "categories/:id", element: <Categories /> },
      { path: "categoryproducts/:id", element: <CategoryProducts /> },
      { path: "category/:id", element: <CategoryProducts /> },
      { path: "product/:id", element: <SingleProduct /> },
      { path: "singleProduct", element: <SingleProduct /> },
      { path: "cart", element: <Cart /> },
      { path: "contact", element: <Contact /> },
      { path: "featuredproducts/:id", element: <FeaturedProducts /> },
      { path: "productDetails/:id", element: <ProductDetails /> },
      { path: "checkout", element: <CheckOut /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <div>
      <CartContextProvider>
        <CounterContextProvider>
          <RouterProvider router={routes}></RouterProvider>
        </CounterContextProvider>
      </CartContextProvider>
    </div>
  );
}

export default App;
