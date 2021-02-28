import Navitem from './Navitem';
import '../styles/Navbar.css';


function Navbar() {
    return (
        <nav className="navbar">
            <h2><span>Quiz</span>Flash</h2>
            <ul className="navlinks-container">
                <Navitem item="Home" link="#"/>
                <Navitem item="New Quiz" link="#"/>
                <Navitem item="About" link="#"/>
            </ul>
        </nav>
    )
}

export default Navbar;