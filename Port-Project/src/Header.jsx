// Purpose: This file contains the header of the website. It contains the title of the website and the navigation bar.

import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
//Need to connect navigation bar to the other pages


function Header(){
    return (
        <header>
            <h1>My Portfolio</h1>
            
            <nav>
                <ul>
                    <li><a href={About}>About Me</a></li>
                    <li><a href={Projects}>Projects</a></li>
                    <li><a href={Contact}>Contact</a></li>
                </ul>
                </nav>

                <hr />
                
        </header>
    );
}

export default Header;