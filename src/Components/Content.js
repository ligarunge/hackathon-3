import { Route, Routes } from "react-router-dom";
import Categories from "../Pages/Categories";
import Home from "../Pages/Home";

function Content() {
    return (
        <div>
<Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/" element={<Categories />}/>
    
</Routes>
        </div>
    )
}
export default Content;