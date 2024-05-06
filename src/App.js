import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import MyPortfolio from './components/portfolio/MyPortfolio';
import Qualification from './components/qualification/Qualification';
import Testimonials from './components/testimonials/Testimonials';
import Contacts from './components/contact/Contacts';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Loader from './components/loader/Loader';
const App = () =>{
    // loader state
    const [isLoading, setIsLoading] = useState(true);

    // Let create async method to fetch fake data
    useEffect(() => {
      const fakeDataFetch = () => {
        setTimeout(() => {
          setIsLoading(false);
        }, 4000);
      };
  
      fakeDataFetch();
    }, []);
        
    return isLoading ? (
      <Loader />
    ) : (
   <>
   <Header/>

   <main className='main'>

    <Home/>
    <About/>
    <Skills/>
    <Services/>
    <Qualification/>
    <Testimonials/>
    <MyPortfolio/>
    <Contacts/>
    
   </main>

   <Footer/>
   <ScrollUp/>

   </>
  );
}

export default App;
