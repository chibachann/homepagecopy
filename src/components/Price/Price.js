import React from "react";
import * as styles from "./Price.module.css";

const Price = () => {
    return (
        <section className={styles.Section}>
            <div className={styles.Grid}>
                <div className={styles.Title}>
                    <h1>PRICE</h1>
                    <h2>お客様に喜ばれる安心の料金設定</h2>
                </div>
                <p>
                制作料金は、ページ数やコンテンツの内容、ご希望の機能などによってお見積りは様々です。
                よくあるお見積り例を4つのプランとしてご紹介しますのでご検討の際の目安にしてください。
                </p>
                <p>
                Web営業会社様や広告代理店様からの業務委託のご依頼も承っております。
                社内で制作業務が追いつかない制作会社様やWebマーケティング担当をお考えの企業様のコーディング・CMS構築など制作の現場をお手伝いさせて頂きます。
                あらかじめ制作の予算が決定している案件に関しましては、内容を確認後にご希望の費用に沿えるようご対応させて頂きますのでお気軽にお問い合わせ下さい。
                </p>
            </div>
        </section>

    )
};

export default Price;
