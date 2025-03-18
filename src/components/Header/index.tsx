import useMenuState from "../../hooks/useMenuState"
import MenuSidebar from "../MenuSidebar"

function Header() {
    const { isMenuOpen, setIsMenuOpen } = useMenuState()

    //task: recriar esse MenuSideBar
    return (
        <header className="w-screen h-16 flex justify-center items-center bg-transparent">
            <MenuSidebar onClick={() => setIsMenuOpen(!isMenuOpen)} />
            <nav className={`${isMenuOpen ? "flex" : "hidden"} max-md:flex max-md:flex-col max-md:absolute max-md:left-0 max-md:top-16 max-md:bottom-auto max-md:h-auto max-md:w-full max-md:bg-[#edede9] max-md:justify-center max-md:items-center max-md:z-40`}>
                <ul className="hidden md:flex md:gap-80 list-none">
                    <li>
                        <a
                            href="#projects"
                            className="no-underline text-white text-[24px] font-poppins hover:hover-text-glow max-md:text-black max-md:text-[30px] hover:hover-text-glow"
                        >
                            Projetos
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="no-underline text-white text-[24px] font-poppins hover:hover-text-glow max-md:text-black max-md:text-[30px] hover:hover-text-glow"
                        >
                            Sobre mim
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="no-underline text-white text-[24px] font-poppins hover:hover-text-glow max-md:text-black max-md:text-[30px] hover:hover-text-glow"
                        >
                            Contato
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
