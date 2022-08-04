import React from 'react';
import {Button} from "antd";
import {useNavigate} from "react-router-dom";


const Main = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <Button onClick={() => navigate("/login")}>로그인</Button>
            </div>
        </>
    );
}

export default Main;