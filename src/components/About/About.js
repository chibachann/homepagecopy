import React from "react";
import * as styles from "./About.module.css";

const About = () => {
    return (
        <section className={styles.Section}>
            <div className={styles.Grid}>
                <div className={styles.Title}>
                    <h1>ABOUT</h1>
                    <h2>飲食店に特化したWeb制作 </h2>
                </div>
                
                <img src="/images/About02.jpg" alt="About" className={styles.Image}/>
                <div className={styles.Text}>
                    <p>ここに意味のある事なんて書いてないよ.
                    ここに意味のある事なんて書いてないよ.
                    ここに意味のある事なんて書いてないよ.
                    ここに意味のある事なんて書いてないよ.
                    ここに意味のある事なんて書いてないよ.
                    </p>
                    <p>ここに意味のある事なんて書いてないよ.
                    ここに意味のある事なんて書いてないよ.
                    ここに意味のある事なんて書いてないよ.
                    ここに意味のある事なんて書いてないよ.
                    ここに意味のある事なんて書いてないよ.
                    </p>
                    <p>ここに意味のある事なんて書いてないよ.
                    ここに意味のある事なんて書いてないよ.
                    ここに意味のある事なんて書いてないよ.
                    ここに意味のある事なんて書いてないよ.
                    ここに意味のある事なんて書いてないよ.
                    ここに意味のある事なんて書いてないよ.
                    ここに意味のある事なんて書いてないよ.
                    </p>
                </div>
                
            </div>
        </section>
    )
}

export default About;
