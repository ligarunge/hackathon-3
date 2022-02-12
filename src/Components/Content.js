import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Category1 from "../Pages/Category1"
 
function Content() {
    return (
        <div>
<Routes>
    <Route path="/" element={<Home />}/>
    {/* <Route path="/" element={}/> */}
   
    <Route path="/category" element={<Category1 />}/>
</Routes>
        </div>
    )
}
export default Content;