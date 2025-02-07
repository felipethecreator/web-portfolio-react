import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "../pages/MainPage"

function RenderRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={MainPage} path='/' />
            </Routes>
        </BrowserRouter>
    )
}

export default RenderRoutes