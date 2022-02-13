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
            <a className="btn btn-secondary" href="/category">Search</a>
            </div>
        </div>
        <div className="row justify-content-end navbar-brand display-1 text-white">
                <div className="col-md-4 mt-5">
                <img src="/images/logo_noBackground.png" alt="" width="35" height="40" className="" />
            ©2022 PearTech. All right reserved
                </div>
        </div>
    </div>          
            </footer>
        </div>
    )
}
export default Footer;