 

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
            <div className="row" style={{ marginTop: '0.3em' }}>
              <p className="display-3">Categories</p>  
            </div>
            <div className="row rounded" style={{marginTop: '0.9em'}}>
                <div className="col-md-3 p-3 m-3 rounded" style={{backgroundColor: 'whitesmoke'}}>
                        <img  className="img-fluid rounded" src="/images/mouse-category.jpg"/>  
                </div>
                <div className="col-md-8 p-3 m-3 rounded" style={{backgroundColor: 'whitesmoke'}}>
                    <div className="row m-2 display-5">
                        Mice
                    </div>
                    <div className="row m-2">
                    Shop wireless and wired mice. Choose from the Bluetooth®, performance, ergonomic, business, EDU, travel, compact, and WFH product range. Ultimate versatility, remarkable performance. Meet the compact mouse designed for mobile work—from home office to cafe to airport lounge. 
                    </div>
                </div>
            </div>
            <div className="row rounded" style={{marginTop: '0.9em'}}>
                <div className="col-md-3 p-3 m-3 rounded" style={{backgroundColor: 'whitesmoke'}}>
                        <img  className="img-fluid rounded" src="/images/keyboard-category.jpg"/>  
                </div>
                <div className="col-md-8 p-3 m-3 rounded" style={{backgroundColor: 'whitesmoke'}}>
                    <div className="row m-2 display-5">
                        Keyboards
                    </div>
                    <div className="row m-2">
                    Shop wireless and wired mice. Choose from the Bluetooth®, performance, ergonomic, business, EDU, travel, compact, and WFH product range. Ultimate versatility, remarkable performance. Meet the compact mouse designed for mobile work—from home office to cafe to airport lounge. 
                    </div>
                </div>
            </div>
  

        </div>
        </div>
    </div>
  )
}

export default Categories;