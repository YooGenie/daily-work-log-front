import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "../main";
import Login from "../auth/loginPage";


const PageRouter = () => (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Main/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    </>
);

export default PageRouter;
