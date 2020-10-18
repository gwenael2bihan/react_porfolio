import React, { forwardRef } from 'react'
import styles from './styles.module.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Menu = forwardRef(({ onBackClick }, ref) => {
    return (
        <div ref={ref} className={styles.menuContent}>
            {/* <div  className={styles.menuRef}></div> */}
            <div className={styles.menuTitle}>
                <h1 className={styles.menuName} >Gwenael Bihan</h1>
                <h2 className={styles.menuProfession} >Web Developper</h2>
                <ExpandMoreIcon style={{fontSize: "100px", color: "white", fontWeight: "500", marginTop: "15%"}}/>
            </div>
        </div>
    )
});

export default Menu;