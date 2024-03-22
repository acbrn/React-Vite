import { Header, Navbar, Footer } from './components';
import { About, Card, Contact, Projects } from './views';


const App = () => {
  return (
    <div className='App'>
      <Header />
      <Navbar />
      <About />
      <Card />
      <Contact />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;