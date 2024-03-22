import './navbar.css';

//Option for dark mode or light mode
//Need click event to scroll to the section of the page
//Need to have a click event to show the dropdown menu
//Need to have a click event to hide the dropdown menu
//Need to have a version set for mobile and desktop
const Navbar = () => {
    return (
        
        <div className="navbar">
        <div className="navbar__container">
            <div className="navbar__logo">
                <a href="#home">Portfolio</a>
            </div>
            <div className="navbar__menu">
            <ul>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </ul>
            </div>
            <div className="navbar__toggle">
            <i className="fas fa-bars"></i>
            </div>
        </div>
        </div>
    );
}

export default Navbar;