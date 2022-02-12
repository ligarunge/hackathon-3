import { Link } from "react-router-dom";
import "./Categories.css"

 

function Categories() {
  return (
    <div>
        <div className="" style={{  
                    backgroundImage: "url(/images/keyboard-present.jpg)",
                    
                    
                    backgroundPosition: 'top',
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat'
}}>
            <div className="container">
                <div className="row justify-content-end display-5">
                    <div className="col-md-4 mt-5">
                        <div className="row justify-content-end">
                        Find the best
                        </div>
                        <div className="row justify-content-end">
                        products for your
                        </div>
                        <div className="row justify-content-end">
                        workspace
                        </div>
                    </div>
                </div>  
            <div className="row">
              <p className="display-3">Categories</p>  
            </div>
            <div className="row rounded" style={{marginTop: '1.1em'}}>
                <div className="col-md-3 p-3 m-3 rounded" style={{backgroundColor: 'whitesmoke'}}>
                        <img  className="img-fluid rounded" src="/images/mouse-category.jpg"/>  
                </div>
                <div className="col-md-8 p-3 m-3 rounded" style={{backgroundColor: 'whitesmoke'}}>
                    <div className="row m-4 display-5">
                    <Link className="link-none" to="/category">Mice</Link>
                    </div>
                    <div className="row m-5" style={{textAlign: 'justify'}}>
                    Shop wireless and wired mice. Choose from the Bluetooth®, performance, ergonomic, business, EDU, travel, compact, and WFH product range. Ultimate versatility, remarkable performance. Meet the compact mouse designed for mobile work—from home office to cafe to airport lounge. 
                    </div>
                </div>
            </div>
            <div className="row rounded" style={{marginTop: '0.9em'}}>
                <div className="col-md-3 p-3 m-3 rounded" style={{backgroundColor: 'whitesmoke'}}>
                        <img  className="img-fluid rounded" src="/images/keyboard-category.jpg"/>  
                </div>
                <div className="col-md-8 p-3 m-3 rounded" style={{backgroundColor: 'whitesmoke'}}>
                    <div className="row m-4 display-5">
                        Keyboards
                    </div>
                    <div className="row m-5" style={{textAlign: 'justify'}}>
                    Shop wired and wireless keyboards. Choose from the mechanical, ergonomic, comfort, portable, Bluetooth®, multi-device, and multi-OS product range. Boost productivity of coders, analysts and creators who need stability, precision and power to work better and truly master what they make. 
                    </div>
                </div>
            </div>
            <div className="row rounded" style={{marginTop: '0.9em'}}>
                <div className="col-md-3 p-3 m-3 rounded" style={{backgroundColor: 'whitesmoke'}}>
                        <img  className="img-fluid rounded" src="/images/headsets-category1.jpg"/>  
                </div>
                <div className="col-md-8 p-3 m-3 rounded" style={{backgroundColor: 'whitesmoke'}}>
                    <div className="row m-4 display-5">
                        Headsets
                    </div>
                    <div className="row m-5" style={{textAlign: 'justify'}}>
                        Shop wired headsets with USB or 3.5 mm connections and is certified to work on popular conferencing apps. Look and sound your best on video calls with Zone Wired Earbuds. Advanced noise-canceling mics on the left earbud clearly capture your every word. In-ear sound is studio quality. Instantly connect your phone1Check device specifications to verify compatibility, tablet1Check device specifications to verify compatibility or computer to create a zone of your own wherever you work.   
                    </div>
                </div>
            </div>
  

        </div>
        </div>
    </div>
  )
}

export default Categories;