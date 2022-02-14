import { Link } from "react-router-dom";
import CategoryItem from "../Components/CategoryItem";
import "./Categories.css"
import categories from "../Data/categories";
import CategoryItemReversed from "../Components/CategoryItemReversed";
import CategoryItemHome from "../Components/CategoryItemHome";


 

function Categories() {
  return (
    <div>
        <div className="" style={{  
                    backgroundImage: "url(/images/keyboard-present.jpg)",               
                    backgroundPosition: 'top',
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat'
        }}>
            <div className="container">
                <div className="row pt-1">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a className="link-none" href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Categories</li>
                        </ol>
                    </nav>
                </div>
                <div className="row justify-content-end display-5">
                    <div className="col-md-4 mt-1">
                        <div className="row justify-content-end">
                        Find the best
                        </div>
                        <div className="row justify-content-end">
                        products for your
                        </div>
                        <div className="row justify-content-end">
                        workspace
                        </div>
                    </div>
                </div>  
            <div className="row">
              <p className="display-3">Categories</p>  
            </div>
            <CategoryItem name={categories[0].name} description={categories[0].description} imageUrl={categories[0].imageUrl}/>
            <CategoryItemReversed name={categories[1].name} description={categories[1].description} imageUrl={categories[1].imageUrl}/>
            <CategoryItem name={categories[2].name} description={categories[2].description} imageUrl={categories[2].imageUrl}/>   
            
            <div className="row">
                <div className="col-md-4">
                <CategoryItemHome name={categories[0].name} description={categories[0].description} imageUrl={categories[0].imageUrl}/>
                </div>
                <div className="col-md-4">
                <CategoryItemHome name={categories[1].name} description={categories[1].description} imageUrl={categories[1].imageUrl}/>    
                </div>
                <div className="col-md-4">
                <CategoryItemHome name={categories[2].name} description={categories[2].description} imageUrl={categories[2].imageUrl}/> 
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Categories;