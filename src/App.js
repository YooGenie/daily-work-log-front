import React, {Component} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Login from "./page/auth/loginPage";
import AppLayout from "./components/layout/AppLayout";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    {/*<Route path={'/'} element={<Main/>}/>*/}
                    <Route path={'/'} element={<AppLayout/>}/>
                    <Route path="/login" element={<Login/>} />

                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
