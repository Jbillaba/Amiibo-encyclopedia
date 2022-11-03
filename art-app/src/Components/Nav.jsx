import { Link } from "react-router-dom"
//TO DO: - add about page
export default function Nav() {
    return (
        <ul className="nav-bar">
            <Link to='/'>
                <h2> Home </h2>
            </Link>
        </ul>
    )
}