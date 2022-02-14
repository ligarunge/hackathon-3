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
              height={750} />
            {/* <div class="card-img-overlay text-start text-wrap m-5 p-5 ">
              <div class="card-title display-5">Computer Accessories</div>
              <p class="card-text">Selection of the best computer accessories in Europe</p>
              {/* <button className="btn btn-outline-light">Learn more</button> */}
            {/* </div> */} */}
          </div>
          <div className="carousel-item">
            <div className="row border-bottom bg-dark" style={{height: '750px'}}>
              <div className="col align-self-center g-0" >
                <div className="card-body text-center" style={{ width: '50%', margin: 'auto' }}>
                  <div className="display-1 text-white"><strong style={{ color: '#fdd600' }}>POP</strong> Mouse</div>
                  <p className="mt-4 text-white">Wireless mouse with customizable Emoji</p>
                  <button className="btn btn-warning" style={{ backgroundColor: '#fdd600' }}>Learn more</button>
                </div>
              </div>
              <div className="col g-0">
                <div className="row">
                  <h1>Why not</h1>
                </div>
                <div className="row">
                <img src="/images/pop-mouse-noBG.png" class="p-5 w-100 img-fluid" alt="..." />

                </div>

              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col g-0">
                <div class="" style={{ backgroundColor: "black", height: "750px" }}>
                <div className="card-body text-center" style={{ width: '50%', position: 'relative', top: '30%', left: '40%'  }}>
                  <div className="display-1 text-white"><strong style={{ color: 'rgb(200, 173, 224)' }}>POP</strong> Mouse</div>
                  <p className="mt-4 text-white">Wireless mouse with customizable Emoji</p>
                  <button className="btn btn-warning" style={{ backgroundColor: 'rgb(200, 173, 224)' }}>Learn more</button>
                </div>
                </div>

              </div>
              <div className="col g-0">
                <ReactPlayer url="https://youtu.be/2LCslpHTUME?t=12" muted={true} playing={true}
                  loop={true}
                  width={"100%"}
                  height={750} />

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