import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import gif from './assets/gif4.gif'
import { useEffect, useState } from 'react';

function App() {

  const [showGif, setShowGif] = useState(true);
  useEffect(() => {
    console.log(showGif);
    setTimeout(() => {
      setShowGif(false);
    }, 2000)
  }, [])
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
          <Footer />
        </div>)
      }
    </>

  );
}

export default App;
