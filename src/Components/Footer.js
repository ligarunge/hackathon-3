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
            <div className="col-md-1 navbar-brand display-5 text-white">
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
            <div className="col-md-3 navbar-brand display-5 text-white">
                <div className="row mt-4">
                    <div className="col-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg> 
                    </div>
                    <div className="col-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
</svg>
                    </div>
                    

                </div>
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