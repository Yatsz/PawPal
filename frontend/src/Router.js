import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './pages/App'
import Home from './pages/Home'

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path = "/home" element={<Home />} />
                    <Route path = "/app" element={<App />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}