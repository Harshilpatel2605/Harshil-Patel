import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
