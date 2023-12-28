import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import gif from './assets/gif3.gif'
import { useEffect, useState } from 'react';



function App() {

  const [showGif, setShowGif] = useState(true);
  useEffect(() => {
    console.log(showGif);
    setTimeout(() => {
      setShowGif(false);
    }, 1500)
  }, [])
  return (
    <div id='app'>
      {showGif
        ? <img style={{ display: 'block', margin: '200px auto', width: 40 }} src={gif}></img>
        : (<>
          <Header />
          <Routes>
            <Route path={'/'} element={<Home />}></Route>
          </Routes>
          <Footer />
        </>)
      }
    </div>
  );
}

export default App;
