import Nav from "./Nav";

export default function Header() {
    return (
        <div>
            <div className="logo-container">
            <h1 class="animate__animated animate__bounce"
            id="logo"> Amiibo Encyclopedia </h1>
            </div>
            <div className="header-nav">
                <Nav />
            </div>
        </div>
    )
}

