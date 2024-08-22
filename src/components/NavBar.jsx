import '../style/navBar.css'

export default function navBar() {
    return (
            <nav id='navBar'>
                <h2>Felipe Rodrigues</h2>
                <ul className='navOptions'>
                    <li>
                        <a href='#'>Sobre mim</a>
                        </li>
                    <li>
                        <a href='#'>Projetos</a>
                        </li>
                    <li>
                        <a href='#'>Contatos</a>
                        </li>
                </ul>
            </nav>
    )
}