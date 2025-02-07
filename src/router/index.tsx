import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Contacts } from "../pages/Contacts";


export const RoutesMain = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contacts />} />
            </Routes>
        </Router>
    );
};