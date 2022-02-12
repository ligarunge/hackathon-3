import FancyBox from "../Components/FancyBox";

function Product() {
    return (
        <div>
            <div className="" style={{  
                    backgroundImage: "url(/images/mousePop-background.jpg)",
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat',
                    
            }}>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-12 mt-5">
                            <p className="display-1">POP mouse</p>
                        </div>
                        <div className="col-md-4">
                            <FancyBox /> 
                        </div>
                        <div className="col-md-8">
                            Description
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product;