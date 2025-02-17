import useMenuState from '../../hooks/isMenuOpen'
import MenuSidebar from '../MenuSidebar'
import './style.css'

function Header() {
    const { isMenuOpen, setIsMenuOpen } = useMenuState()

    return (
        <header className='headerContainer'>
            <MenuSidebar onClick={() => setIsMenuOpen(!isMenuOpen)}/>
            <nav>
                <ul className='headerTopics'>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#about">Sobre mim</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header