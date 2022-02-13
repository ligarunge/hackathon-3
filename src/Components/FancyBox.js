function FancyBox() {
    return (
        <div className="m-3 p-3 rounded" style={{backgroundColor:'whitesmoke'}}>
            <div className="row">
                
                <div className="col-12">
                <a href="/images/PopMouse7.jpg" data-fancybox="galleryMousePop">
                <img src="/images/PopMouse7.jpg" className="img-fluid rounded"></img>
                </a>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-4 rounded">
                    <a href="/images/PopMouse1.jpg" data-fancybox="galleryMousePop">
                    <img src="/images/PopMouse1.jpg" className="img-fluid rounded"></img>
                    </a>
                </div>
                <div className="col-md-4 rounded">
                    <a href="/images/PopMouse2.jpg" data-fancybox="galleryMousePop">
                    <img src="/images/PopMouse2.jpg" className="img-fluid rounded"></img>
                    </a>
                </div>
                <div className="col-md-4 rounded" style={{border: '1px'}}>
                    <a href="/images/PopMouse3.jpg" data-fancybox="galleryMousePop">
                    <img src="/images/PopMouse3.jpg" className="img-fluid rounded"></img>
                    </a>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-4 rounded">
                    <a href="/images/PopMouse4.jpg" data-fancybox="galleryMousePop">
                    <img src="/images/PopMouse4.jpg" className="img-fluid rounded"></img>
                    </a>
                </div>
                <div className="col-md-4 rounded">
                    <a href="/images/PopMouse5.jpg" data-fancybox="galleryMousePop">
                    <img src="/images/PopMouse5.jpg" className="img-fluid rounded"></img>
                    </a>
                </div>
                <div className="col-md-4 rounded">
                    <a href="/images/PopMouse6.jpg" data-fancybox="galleryMousePop">
                    <img src="/images/PopMouse6.jpg" className="img-fluid rounded"></img>
                    </a>
                </div>
            </div>

        </div>  
        
    )
}
export default FancyBox;