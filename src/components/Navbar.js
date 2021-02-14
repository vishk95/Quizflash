import Navitem from './Navitem';

function Navbar() {
    return (
        <nav className="navbar">
            <h3><span>Quiz</span>Flash</h3>
            <ul className="navlinks-container">
                <Navitem item="Home" link="#"/>
                <Navitem item="New Quiz" link="#"/>
                <Navitem item="About" link="#"/>
            </ul>
        </nav>
    )
}

export default Navbar;