import menuIcon from '../../assets/menu-icon.png'
import './style.css'

function MenuSidebar(onClick : { onClick: () => void }) {
    return (
        <div className='menuSidebar'>
            <img src={menuIcon} alt="Menu" />
        </div>
    )
}

export default MenuSidebar