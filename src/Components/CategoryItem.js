import { Link } from "react-router-dom";
import categories from "../Data/categories";

function CategoryItem(props) {
    const name = props.name;
    const description = props.description;
    const imageUrl = props.imageUrl;
    return (
        
             <div className="row rounded" style={{marginTop: '1.1em'}}>
                <div className="col-md-3 p-3 m-3 rounded" style={{backgroundColor: 'whitesmoke'}}>
                        <img  className="img-fluid rounded" src={imageUrl}/>  
                </div>
                <div className="col-md-8 p-3 m-3 rounded" style={{backgroundColor: 'whitesmoke'}}>
                    <div className="row m-4 display-5">
                    <Link className="link-none" to="/category">{name}</Link>
                    </div>
                    <div className="row m-5" style={{textAlign: 'justify'}}>
                    {description} 
                    </div>
                </div>
            </div>
    )

}
export default CategoryItem;