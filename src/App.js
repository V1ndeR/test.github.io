import React from 'react';
import {Routes, Route } from "react-router-dom";
import './styles.css';
import HomePage from "./HomePage";

const App = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                {/*<Route path="/portfolio/:id" element={<PortfolioCards to="#project" replace />}/>*/}
                <Route path="*" element={<HomePage replace />}/>
            </Routes>
        </>
    )
};

export default App;
