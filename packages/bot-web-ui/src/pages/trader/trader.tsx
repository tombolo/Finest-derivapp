import React from 'react';
import styles from './trader.module.scss';
import AppWrapper from 'Components/main/main';

const TraderPage = () => {
    return (
        <div>
            <AppWrapper />
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