import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import gif from './assets/gif4.gif'
import { useEffect, useState } from 'react';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
function App() {

  const [showGif, setShowGif] = useState(true);
  useEffect(() => {
    console.log(showGif);
    setTimeout(() => {
      setShowGif(false);
    }, 2000)
  }, [])

  const [showButton, setShowButton] = useState(false);
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (

    <>
      {showGif
        ? <div>
          <img style={{
            display: 'block',
            margin: '200px auto',
            width: 90,
            borderRadius: 20,
            // boxShadow: '0px 0px 15px 9px black',
            border: '1px solid white'
          }} src={gif}></img>
        </div>
        : (<div id='app'>
          <Header />
          <Routes>
            <Route path={'/'} element={<Home />}></Route>
          </Routes>
          <div style={{ position: 'fixed', zIndex: 5, bottom: 40, right: 35 }} >
            {showButton &&
              <button id='topToScrollButton' onClick={scrollToTop}
                style={{ border: 'none', backgroundColor: 'white', borderRadius: 50, boxShadow: '0px 1px 3px 0px lightgray' }}
              ><KeyboardDoubleArrowUpIcon style={{ color: '#007bff',padding:'3px 3px 0px 3px'}} /></button>}
          </div>
          <Footer />
        </div>)
      }
    </>

  );
}

export default App;
