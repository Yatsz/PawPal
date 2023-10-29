import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import App from './pages/App'
import Home from './pages/Home'
import Tahoe from './pages/Tahoe'
import Palm from './pages/Palm'
import Hawaii from './pages/Hawaii'



function Main() {

    function ScrollToTop() {
        const { pathname } = useLocation();
        
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);
    
        return null;
    }
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/app" element={<App />} />
                <Route path="/tahoe" element={<Tahoe />} />
                <Route path="/palm" element={<Palm />} />
                <Route path="/hawaii" element={<Hawaii />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Main;