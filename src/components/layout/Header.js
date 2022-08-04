import React from 'react';
import {Layout} from "antd";
import styles from "./AppLayout.css"


function Header() {
    return (
        <Layout.Header>
            <b className={styles.antLayoutHeader}> 유지니의 업무일지 </b>
        </Layout.Header>
    );
}

export default Header;
