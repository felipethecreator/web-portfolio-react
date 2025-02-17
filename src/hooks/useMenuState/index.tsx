import { useState } from "react"

const useMenuState = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    return {isMenuOpen, setIsMenuOpen}
}

export default useMenuState