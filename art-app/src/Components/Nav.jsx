import { Link } from "react-router-dom"
export default function Nav() {
    return (
        <ul className="nav-bar">
            <Link to='/'>
                <h2> Home </h2>
            </Link>
            <Link to='/amiibo'>
                <h2> amiibo </h2>
            </Link>
        </ul>
    )
}