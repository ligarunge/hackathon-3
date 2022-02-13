import { useState } from "react";
import "./MouseColorChange.css"

function MouseColorChange() {
    const [image, setImage] = useState('images/MouseColor1.jpg')
    const [description, setDescription] = useState('Mint, lilac and sunshine yellow combine in a candy aesthetic with a dash of fresh mojito. Chill out with POP Mouse in Daydream.')
    
    

    const showImage1 = () => {
        setImage('images/MouseColor1.jpg')
        setDescription('Mint, lilac and sunshine yellow combine in a candy aesthetic with a dash of fresh mojito. Chill out with POP Mouse in Daydream.')
    }
    const showImage2 = () => {
        setImage('images/MouseColor2.jpg')
        setDescription('Shout your inner retro out loud with a bold combination of black, grey and arcade game yellow. Make a performance with POP Mouse in Blast.')
    }
    const showImage3 = () => {
        setImage('images/MouseColor3.jpg')
        setDescription('Neon corals meet crushed raspberry on a mouse designed for the ones that stand for something. Change the game with POP Mouse in Heartbreaker.')
    }


    return (
        <div className="col-8 m-3 p-4 rounded">
            <div className="row justify-content-between">
                <div className="col-md-3 rounded" style={{backgroundColor: 'whitesmoke'}}>
                    <button className="btn btn-NoBorder" onClick={showImage1}><img className="img-fluid" src="/images/ColorChoice1.png"></img></button>
                </div>
                <div className="col-md-3 rounded" style={{backgroundColor: 'whitesmoke'}}>
                    <button className="btn btn-NoBorder" onClick={showImage2}><img className="img-fluid" src="/images/ColorChoice2.png"></img></button>
                </div>
                <div className="col-md-3 rounded" style={{backgroundColor: 'whitesmoke'}}>
                    <button className="btn btn-NoBorder" onClick={showImage3}><img className="img-fluid" src="/images/ColorChoice3.png"></img></button>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12">
                    <img className="img-fluid" src={image}></img>
                </div>
            </div>
            <div className="row">
                <div className="col-12 m-3 p-4 rounded" style={{backgroundColor:'whitesmoke', textAlign: 'justify'}}>
                    <p>{description}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 m-3 mt-0 p-4 rounded">
                <a className="btn btn-light btn-lilac" href="/cart">Add to cart</a>
                </div>
            </div>
        </div>
    )
}

export default MouseColorChange;