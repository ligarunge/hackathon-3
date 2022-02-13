import "./Carousel.css"
import ReactPlayer from "react-player";
import FancyBox from "../Components/FancyBox";

function Carousel() {
  return (
    <div>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-interval="false" data-bs-ride="carousel" data-pause="hover">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
            class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
            aria-label="Slide 4"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <ReactPlayer url="https://youtu.be/D5HVFFEDJkw?t=10" muted={true} playing={true}
              loop={true}
              width={"100%"}
              height={900} />
            {/* <div class="card-img-overlay text-white text-center">
              <div class="card-title display-5">Computer Accessories</div>
              <p class="card-text">Selection of the best computer accessories in Europe</p>
              <button className="btn btn-outline-light">Learn more</button>
            </div> */}
          </div>
          <div className="carousel-item">
            <div className="row border-bottom">
              <div className="col align-self-center g-0" >
                <div className="card-body text-center" style={{ width: '50%', margin: 'auto' }}>
                  <div className="display-1"><strong style={{ color: '#fdd600' }}>POP</strong> Mouse</div>
                  <p className="mt-4">Wireless mouse with customizable Emoji</p>
                  <button className="btn btn-warning" style={{ backgroundColor: '#fdd600' }}>Learn more</button>
                </div>
              </div>
              <div className="col g-0">
                <img src="/images/mouse_logitech_yellow.jpg" class="d-block w-100 img-fluid" alt="..." />

              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col g-0">
                <div class="" style={{backgroundColor:"black", height:"900px"}}>
                  {/* <div className="container"> */}
                    <div className="col-md-4 align-self-center">
                            <FancyBox /> 
                            <div className="row m-3 p-3 rounded align-items-center" style={{backgroundColor:'whitesmoke'}}>
                                <div className="col-md-6">
                                <span className="display-6">€29.99</span> 
                                </div>
                                <div className="col-md-6">
                                    <a className="btn btn-light btn-lilac" href="/cart">BUY NOW</a>
                                  
                                </div>
                            
                            </div>
                        </div>
                  {/* </div> */}
                </div>

              </div>
              <div className="col g-0">
              <ReactPlayer url="https://youtu.be/2LCslpHTUME?t=12" muted={true} playing={true}
                loop={true}
                width={"100%"}
                height={900} />

              </div>

            </div>
            {/* <div class="card-img-overlay text-white text-center">
              <div class="card-title display-5">Computer Accessories</div>
              <p class="card-text">Selection of the best computer accessories in Europe</p>
              <button className="btn btn-outline-light">Learn more</button>
            </div> */}
          </div>
          <div className="carousel-item">
            <img src="images/keyboard3.jpg" class="d-block w-100 img-fluid" alt="..." />
            <div class="card-img-overlay text-white text-start m-5 p-5">
              <div class="card-title display-5">Computer Accessories</div>
              <p class="card-text">Selection of the best computer accessories in Europe</p>
              <button className="btn btn-outline-light">Learn more</button>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div >
  )
}
export default Carousel;