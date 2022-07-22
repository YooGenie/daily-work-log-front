import React from "react";
import { Routes, Route} from "react-router-dom";
import Main from "../main";
import Login from "../auth/loginPage";


const PageRouter = () => (
  <>
    <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/login" element={<Login/>} />
    </Routes>
  </>
);

export default PageRouter;
