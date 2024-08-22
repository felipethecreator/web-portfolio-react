import '../style/navBar.css'

export default function navBar() {
    return (
            <nav id='navBar'>
                <h2>Felipe</h2>
                <ul className='navOptions'>
                    <li><p>Sobre mim</p></li>
                    <li><p>Projetos</p></li>
                    <li><p>Contatos</p></li>
                </ul>
            </nav>
    )
}