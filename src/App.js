import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div id='app'>
      <Header />
      <Routes>
        <Route path={'/'} element={<Home/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
