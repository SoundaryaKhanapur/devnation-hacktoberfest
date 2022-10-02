import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Contributor from '../Contributors/Contributor';
import './App.css';



const App = () => {
    return (
        <div>
            <HashRouter>
                <div>
            <Routes>
                    <Route path="/" exact element={<Home/>} />
                    <Route path="/contributor" element={<Contributor/>} />
                    </Routes>
                </div>
            </HashRouter>
        </div>
    )
}

export default App;
