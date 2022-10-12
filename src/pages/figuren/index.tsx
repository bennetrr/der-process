import React, { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Page.module.scss";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        void router.push("/figuren/overview");
    });

    return (
        <div className={styles.container}>
            <div className={styles.pageContentGray}>
                <h1>Redirecting...</h1>
            </div>
        </div>
    )
}