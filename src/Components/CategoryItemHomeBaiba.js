import { Link } from "react-router-dom";
import categories from "../Data/categories";

function CategoryItemHome(props) {
  const name = props.name;
  const description = props.description;
  const imageUrl = props.imageUrl;

  return (
    <div className="row rounded">
                <div className="col-md-6 sm-4 p-3 rounded" style={{backgroundColor: 'whitesmoke'}}>
                        <img  className="img-fluid rounded" src={imageUrl}/>  
                </div>
                <div className="col-md-5 p-3 ms-1 rounded" style={{backgroundColor: 'whitesmoke'}}>
                    <div className="row m-1 ">
                    <Link className="link-none p-0" to="/category">{name}</Link>
                    </div>
                    <div className="row m-1" style={{textAlign: 'justify', fontSize: '0.7rem'}}>
                    {description} 
                    </div>
                </div>
            </div>
    )

}
      export default CategoryItemHome;