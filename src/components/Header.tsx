import React from 'react';
import styles from '$/styles/Header.module.scss';

import MenuEntry from './MenuEntry';
import {faHome, faInfo} from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <nav className={styles.header}>
            <MenuEntry text="Der Process" link="/" icon={faHome}/>
            <MenuEntry text="Biografie" link="/biografie"/>
            <MenuEntry text="Entstehungskontext" link="/entstehungskontext"/>
            <MenuEntry text="Kapitelübersicht" link="/kapiteluebersicht" matchBases={['lesetagebuch']}/>
            <MenuEntry text="Figurentableau" link="/figuren"/>
            <MenuEntry text="Themen" link="/themen"/>
            <MenuEntry text="Textsprache" link="/textsprache"/>
            <MenuEntry text="Interpretationsansätze" link="/interpretationsansaetze"/>

            <div className={styles.leftRightSep}/>
            <MenuEntry link="/about" icon={faInfo}/>
        </nav>
    );
}
