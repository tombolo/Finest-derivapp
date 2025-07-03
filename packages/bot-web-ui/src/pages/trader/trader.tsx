import React from 'react';
import styles from './trader.module.scss';


const TraderPage = () => {
    return (
        <div className={styles.pageContainer}>
            

            <div className={styles.container}>
                <iframe
                    src="https://finest-derivapp.vercel.app/dtrader"
                    title="Finest Analysis"
                    className={styles.iframe}
                    allowFullScreen
                />
            </div>
        </div>
    );
};

export default TraderPage;