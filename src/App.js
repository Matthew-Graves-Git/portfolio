import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
    <Navbar/>
    <Home/>
    <SocialLinks/>
    <About/>
    <Experience/>
    </div>
  );
}

export default App;
