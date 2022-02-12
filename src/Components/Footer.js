import InputHelp from "./InputHelp";

function Footer() {
    return (
        <div className="mt-5"> 
            <footer className="" style={{  
                    backgroundImage: "url(/images/footer-background.jpg)",
                    minHeight: "20rem",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
}}>
    <div className="container">
        <div className="row">
            <div className="col-md-2 navbar-brand display-5 text-white">
                <div className="row mt-4">
                    About us
                </div>
                <div className="row mt-4">
                    Careers
                </div>
                <div className="row mt-4">
                    Social impact
                </div>
            </div>
            <div className="col-md-2 navbar-brand display-5 text-white">
            <div className="row mt-4">
                    Contact
                </div>
                <div className="row mt-4">
                    Blog
                </div>
                <div className="row mt-4">
                    Terms of use
                </div>
            </div>
            <div className="col">
            Social impact
            </div>
        </div>
        <div className="row justify-content-end align-items-center">
            <div className="col-md-3 disabled">
            <InputHelp />
            </div>
            <div className="col-md-2">
            <button className="btn btn-light"><span className="h6">Search</span></button>
            </div>
        </div>
    </div>          
            </footer>
        </div>
    )
}
export default Footer;