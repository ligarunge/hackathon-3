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
                            <div className="row">
                                <div className="col-6 m-5">
                                    <p className="display-6">Personality that POPS</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8 m-3 p-4 rounded" style={{backgroundColor:'whitesmoke', textAlign: 'justify'}}>
                                    <p>Get to know the playful, wireless POP Mouse, designed to make personality shine on your desktop and beyond. Pick the POP Mouse you love most from our range of designs, and make it your own with fun emoji customization. The top button is where the fun begins. Choose from a menu of emoji for your chats, or assign the button through Pear tech software to send your favorite emoji in a tap. If that’s not up your street, you can always assign the button to other non-emoji shortcuts - like Mic Mute or Snip Screen.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product;