import CategoryItem from "../Components/CategoryItem";
import Footer from "../Components/Footer";
import Carousel from "./Carousel";
import categories from "../Data/categories";
import CategoryItemHome from "../Components/CategoryItemHome";


function Home() {
  return (
    <div>
     <Carousel />

      <div className="container">
          <div className="display-5 my-4">Categories</div>
          <div className="row">
            <div className="col d-flex">
          <CategoryItemHome name={categories[0].name} description={categories[0].description} imageUrl={categories[0].imageUrl}/>
            </div>
            <div className="col d-flex">
            <CategoryItemHome name={categories[0].name} description={categories[0].description} imageUrl={categories[0].imageUrl}/>
            </div>
            <div className="col">
            <CategoryItemHome name={categories[0].name} description={categories[0].description} imageUrl={categories[0].imageUrl}/>
            </div>
          </div>
          {/* <CategoryItemReversed name={categories[1].name} description={categories[1].description} imageUrl={categories[1].imageUrl}/>
          <CategoryItem name={categories[2].name} description={categories[2].description} imageUrl={categories[2].imageUrl}/>    */}

      </div>

      </div>
  )
}


export default Home;