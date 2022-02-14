import { Link } from "react-router-dom";
import categories from "../Data/categories";

function CategoryItemHome(props) {
    const name = props.name;
    const description = props.description;
    const imageUrl = props.imageUrl;
    return (
        
             <div className="row rounded align-items-center" style={{marginTop: '1.1em'}}>
                <div className="col-md-4 rounded">
                        <img  className="img-fluid rounded" src={imageUrl}/>  
                </div>
                <div className="col-md-8 rounded">
                    <div className="row mt-3">
                    <Link className="link-none display-6" style={{fontSize: ''}} to="/category">{name}</Link>
                    </div>
                    <div className="row m-1 small">
                    {description} 
                    </div>
                </div>
            </div>
    )

}
export default CategoryItemHome;