import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NewProduct from "../pages/NewProduct";
import NewUser from "../pages/NewUser";
import Product from "../pages/Product";
import ProductList from "../pages/ProductList";
import User from "../pages/User";
import UserList from "../pages/UserList";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="users" element={<UserList />} />
      <Route path="users/:id" element={<User />} />
      <Route path="users/create" element={<NewUser />} />
      <Route path="products" element={<ProductList />} />
      <Route path="products/:id" element={<Product />} />
      <Route path="products/create" element={<NewProduct />} />

    </Routes>
  );
};

export default AllRoutes;
