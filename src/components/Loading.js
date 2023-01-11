import React from 'react';
import styles  from '../styles/Loading.module.css';

function Loading() {
    return(
        <div className={styles.loadingContainer}>
            <div className={styles.loader}>
                <div></div>
            </div>
        </div>
    );
}

export { Loading };