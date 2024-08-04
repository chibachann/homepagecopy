import React from "react";
import * as styles from "./Explain.module.css";

const Explain = () => {
    return (
        <section className={styles.Section}>
            <div className={styles.Grid}>
                <div className={styles.Title}>
                    <span/>
                    <h3>Solve the problem</h3>
                    <h2>様々な課題解決サポートを<br/>ご用意しています</h2>
                </div>
                <p className={styles.Text}>
                    ホームページ制作とWebマーケティングのノウハウをもとに、
                    飲食店様に特化した課題解決サポートをご提供しています。
                    新規顧客の獲得からリピーターの獲得まで、お店の集客にお困りの方はお気軽にご相談ください。<br/>
                    お客様の売り上げアップに貢献できる新しい価値を創造し、
                    妥協をしない成果物を納品することをお約束いたします。
                </p>
                <div className={styles.TextCards}>
                    <p>新しくホームページを立ち上げたい</p>
                    <p>新しくホームページを立ち上げたい</p>
                    <p>新しくホームページを立ち上げたい</p>
                    <p>新しくホームページを立ち上げたい</p>
                </div>
            </div>
        </section>
    )
}

export default Explain;
