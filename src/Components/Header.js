import { Link } from "react-router-dom"
import "./Header.css"

function Header() {
    return (
        <div>
            <nav className="navbar navbar-light bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand display-1 text-white" href="#">
                        <img src="/images/logo_noBackground.png" alt="" width="35" height="40" className="d-inline-block pb-1 mx-2 align-text-center" />
                        PearTech
                    </a>
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <Link className="nav-link active text-white" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-secondary" to='/'>Categories</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-secondary" to='/cart'>Cart</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Header;