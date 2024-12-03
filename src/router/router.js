import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from '../views/home/home';



export const AppRouters = () => {
    return (
        <Router>
            <Routes>
                <Route path={'/'} element={<Home />} />
            </Routes>
        </Router>
    )
}