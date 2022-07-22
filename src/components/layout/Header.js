import React from 'react';
import {Button, Layout, message} from "antd";
import styles from "./AppLayout.css"


function Header() {
    return (
        <Layout.Header>
            <b className={styles.antLayoutHeader}> 유지니의 업무일지 </b>
            <Button style={{float: "right" , marginTop: 100}} onClick={() => {
                message.success("로그아웃되었습니다")
            }}>로그아웃</Button>
        </Layout.Header>
    );
}

export default Header;
