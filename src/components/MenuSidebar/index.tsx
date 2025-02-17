import menuIcon from '../../assets/menu-icon.png'
import './style.css'

function MenuSidebar( { onClick } : { onClick: () => void }) {
    return (
        <div className='menuSidebar'>
            <img className='menuImage' src={menuIcon} alt="Menu" onClick={onClick} />
        </div>
    )
}

export default MenuSidebar