
import Footer from "../Components/Footer";
import Carousel from "../Components/Carousel";
import categories from "../Data/categories";
import CategoryItemHome from "../Components/CategoryItemHome";


function Home() {
  return (
    <div>
     <Carousel />

      <div className="container">
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
  )
}


export default Home;