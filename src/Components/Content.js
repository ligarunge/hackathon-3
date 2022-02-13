
import { Route, Routes } from "react-router-dom";
import Categories from "../Pages/Categories";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import Category1 from "../Pages/Category1"
import Product from "../Pages/Product";

function Content() {
    return (
        <div>
<Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/categories" element={<Categories />}/>
    <Route path="/category" element={<Category1 />}/>
    <Route path="/product" element={<Product />}/>
    <Route path="/cart" element={<Cart />}/>

</Routes>
        </div>
    )
}
export default Content;