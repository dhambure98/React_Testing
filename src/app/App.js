import React from "react";
import HomePage from "../pages/Home";
import Login from "../pages/session/Login";
import {Routes, Route} from "react-router-dom";
import NotFound from "../pages/session/NotFound";
import FlexBoxLayout from "../pages/Layouts/FlexBox";


function App() {
    return (
        <Routes>
            <Route exact path='/' element={<HomePage/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path='flex-layout' element={<FlexBoxLayout/>}/>
        </Routes>
    );
}

export default App;