import React from 'react';
import styles from './trader.module.scss';
import Link from 'next/link';

const TraderPage = () => {
    return (
        <div className={styles.pageContainer}>
            <header className={styles.header}>
                <div className={styles.logo}>Finest Trading</div>
                <nav className={styles.nav}>
                    <Link href="/" className={styles.navLink}>
                        Return to Bot
                    </Link>
                </nav>
            </header>

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