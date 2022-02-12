import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";

function Content() {
    return (
        <div>
<Routes>
    <Route path="/" element={<Home />}/>
    {/* <Route path="/" element={}/> */}
    
</Routes>
        </div>
    )
}
export default Content;