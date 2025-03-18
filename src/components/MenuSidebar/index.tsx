import menuIcon from '../../assets/menu-icon.png'

function MenuSidebar( { onClick } : { onClick: () => void }) {
    return (
        <div className='hidden max-[1100px]:flex absolute top-5 left-15 cursor-pointer z-50'>
            <img className='w-[45px] flex ' src={menuIcon} alt="Menu" onClick={onClick} />
        </div>
    )
}

export default MenuSidebar