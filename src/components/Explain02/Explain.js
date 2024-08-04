import React from "react";
import * as styles from "./Explain.module.css";

const Explain = () => {
    return (
        <section className={styles.Section}>
            <div className={styles.Grid}>
                <div className={styles.Title}>
                    <span/>
                    <h3>Web制作が初めての方へ</h3>
                    <h2>
                        Web制作をご検討中の方は
                        どうぞ参考になさってください。
                    </h2>
                </div>
                <p className={styles.Text}>
                    ホームページ制作を発注しようとする際、ホームページをリニューアルする際に、何から取り組めばよいか迷うことも多いと思います。
                    Web制作会社ならではの視点を交え、効果的なホームページを作るために必要な発注までのステップや押さえておきたいポイントをご紹介します。
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
