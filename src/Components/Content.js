
import { Route, Routes } from "react-router-dom";
import Categories from "../Pages/Categories";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import Category1 from "../Pages/Category1"

function Content() {
    return (
        <div>
<Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/categories" element={<Categories />}/>
    
    <Route path="/category" element={<Category1 />}/>
    <Route path="/cart" element={<Cart />}/>

</Routes>
        </div>
    )
}
export default Content;