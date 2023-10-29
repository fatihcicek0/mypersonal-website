import { Link, NavLink } from 'react-router-dom';
export default function Header() {
    return (
        <header>
            <Link id='name'>CFatih.developer 👋</Link>
            <nav>
                <NavLink to="/">Anasayfa</NavLink>
                <a to="#solution">Hizmetler</a>
            </nav>
        </header>
    )
}