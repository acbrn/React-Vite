import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";

function App() {
  return (
  <>
    <Header />
    <Card />
    <About />
    <Projects name="Intergalactic Voyages" software="HTML, JavaScript, CSS, MongoDB" description="First project completed through boot-camp" link="http://placeholder.com" />
    <Projects name="ProjectAMC" description="Portfolio displaying my information and skill set" link="http://anotherplace.com"/>
    <Contact />
    <Footer />
  </> 
  );

}

export default App
