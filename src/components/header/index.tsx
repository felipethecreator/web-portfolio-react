import './style.css'

function Header() {
    return (
        <header className='headerContainer'>
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