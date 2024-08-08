import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css"
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Sidenav from "./components/small-components/Sidenav";
function App() {

  return (
    <>
     <Navbar/>
     <Home/>
     <About/>
     <Sidenav/>
     <Projects/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App;
