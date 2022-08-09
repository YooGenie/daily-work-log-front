import React from 'react';
import {Button, Layout} from "antd";
import styles from "./AppLayout.css"
import logo from "../../page/img/logo2.jpg"

function Header() {
    return (
        <Layout.Header>
            <div>
                <b className={styles.antLayoutHeader}> 유지니의 업무일지 </b>
                <img src={logo} style={{width:30}}/>
            </div>
        </Layout.Header>
    );
}

export default Header;
