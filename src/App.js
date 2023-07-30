import {useEffect } from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import Portfolio from "./components/Portfolio";

function App() {

  const fadeinElements = document.querySelectorAll('.fade-left');

  useEffect(() => {
    console.log(fadeinElements)
    const observer = new IntersectionObserver((entries) =>{
      entries.forEach((entry) =>{
        if(entry.isIntersecting) {
          entry.target.classList.add('animate-fade')
        }else{
          entry.target.classList.remove('animate-fade')
        }
      })
    })
    fadeinElements.forEach(el => observer.observe(el));
  },[fadeinElements]);


  return (
    <div>
    <Navbar/>
    <Home/>
    <SocialLinks/>
    <About/>
    <Portfolio/>
    <Experience/>
    </div>
  );
}

export default App;
