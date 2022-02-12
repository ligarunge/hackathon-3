import { Route, Routes } from "react-router-dom";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";

function Content() {
    return (
        <div>
<Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/cart" element={<Cart />}/>
    {/* <Route path="/" element={}/> */}
    
</Routes>
        </div>
    )
}
export default Content;