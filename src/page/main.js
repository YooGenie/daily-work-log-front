import React from 'react';
import {Button, message} from "antd";
import {useNavigate} from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import AppLayout from "../components/layout/AppLayout";

const Main = () => {
    const navigate = useNavigate();
    return (
        <>
        <div>
            <Button  onClick={() => {
                navigate('/login');
                console.log("클릭")
            }}>로그인</Button>
            </div>
        <div>


        </div>

  </>
    );
}

export default Main;