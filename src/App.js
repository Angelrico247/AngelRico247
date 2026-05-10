import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Portafolio from './components/portatolio/Portafolio';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';



const App =()=> {
  return (
    <>
    <Header/>
    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Portafolio/>

      
      <Footer/>
    </main>
    </>);
}

export default App;
