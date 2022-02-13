import FancyBox from "../Components/FancyBox";
import MouseColorChange from "../Components/MouseColorChange";
import "./Product.css"

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
                            <div className="row m-3 p-3 rounded align-items-center" style={{backgroundColor:'whitesmoke'}}>
                                <div className="col-md-6">
                                <span className="display-6">€29.99</span> 
                                </div>
                                <div className="col-md-6">
                                    <a className="btn btn-light btn-lilac" href="/cart">BUY NOW</a>
                                  
                                </div>
                            
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-6 m-5">
                                    <p className="display-6">Personality that POPS</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8 m-3 p-4 rounded" style={{backgroundColor:'whitesmoke', textAlign: 'justify'}}>
                                    <p>Get to know the playful, wireless POP Mouse, designed to make personality shine on your desktop and beyond. Pick the POP Mouse you love most from our range of designs, and make it your own with fun emoji customization. The top button is where the fun begins. Choose from a menu of emoji for your chats, or assign the button through PearTech software to send your favorite emoji in a tap. If that's not up your street, you can always assign the button to other non-emoji shortcuts - like Mic Mute or Snip Screen. As if reading your mind, the POP Mouse SmartWheel shifts from high-precision to speed scroll mode - helping you whizz through long pages with a flick of the wheel.</p>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-8 m-3 p-4 rounded" style={{backgroundColor:'whitesmoke'}}>
                                    <p className="display-6">Choose your aesthetic</p>
                                </div>
                            </div>
                            <div className="row">
                              <MouseColorChange />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product;