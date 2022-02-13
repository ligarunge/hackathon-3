import { useState } from "react";

function MouseColorChange() {
    const [image, setImage] = useState('images/MouseColor1.jpg')

    const showImage1 = () => {
        setImage('images/MouseColor1.jpg')
    }
    const showImage2 = () => {
        setImage('images/MouseColor2.jpg')
    }
    const showImage3 = () => {
        setImage('images/MouseColor3.jpg')
    }


    return (
        <div className="col-8 m-3 p-4 rounded">
            <div className="row align-items-center">
                <div className="col-md-4 rounded" style={{backgroundColor: 'whitesmoke'}}>
                    <button className="btn" onClick={showImage1}><img className="img-fluid" src="/images/ColorChoice1.png"></img></button>
                </div>
                <div className="col-md-4 rounded" style={{backgroundColor: 'whitesmoke'}}>
                    <button className="btn" onClick={showImage2}><img className="img-fluid" src="/images/ColorChoice2.png"></img></button>
                </div>
                <div className="col-md-4 rounded" style={{backgroundColor: 'whitesmoke'}}>
                    <button className="btn" onClick={showImage3}><img className="img-fluid" src="/images/ColorChoice3.png"></img></button>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12">
                    <img className="img-fluid" src={image}></img>

                </div>

            </div>

        </div>
    )
}

export default MouseColorChange;