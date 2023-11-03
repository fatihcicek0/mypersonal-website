import { Link, NavLink } from 'react-router-dom';
export default function Header() {
    const clickBurger = () => {
        const burger = document.querySelector('#burger-menu');
        const nav = document.querySelector('.nav');
        burger.classList.toggle('close');
        nav.classList.toggle('open');
    }
    return (
        <header>
            <Link id='name'>CFatih.developer 👋</Link>
            <nav className='nav'>
                <NavLink to="/">Anasayfa</NavLink>
                <a to="#solution">Hizmetler</a>
            </nav>
            <div id="burger-menu" onClick={() => clickBurger()}>
                <div className="line" id='line1'></div>
                <div className="line" id='line2'></div>
                <div className="line" id='line3'></div>
            </div>
        </header>
    )
}