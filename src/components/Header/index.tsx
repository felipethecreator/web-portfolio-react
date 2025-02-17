import useMenuState from "../../hooks/useMenuState"
import MenuSidebar from "../MenuSidebar"
import "./style.css"

function Header() {
    const { isMenuOpen, setIsMenuOpen } = useMenuState()

    console.log("O menu está aberto?", isMenuOpen)

    return (
        <header className="headerContainer">
            <MenuSidebar onClick={() => setIsMenuOpen(!isMenuOpen)} />
            <nav className={isMenuOpen ? "menuOpen" : ""}>
                <ul className="headerTopics">
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#about">Sobre mim</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
