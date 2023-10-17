import styles from '../css/about.module.css'
import {NextPage} from "next";
import DividerV from "@/app/component/DividerV";
import Link from "next/link";

const Page: NextPage = () => {
    return (
        <div className={styles.about}>
            <div className={styles.aboutsider}>
                <img className={styles.aboutsiderimg} alt="" src="/icons/profileimg.png" />
                <DividerV height={300}/>
                <div className={styles.aboutsidertxt}>
                    <div className={styles.aboutsidertitle}>About me</div>
                    <div className={styles.aboutsidertxt1}>
                        Hi, I'm Nahidath and I am a fullstack web developer.<br/>I have a passion for web development and love to create for web and mobile devices.<br/>
                        I am a fast learner and I am always looking for new challenges.<br/>
                        I am currently looking for a job as a fullstack web developer.
                    </div>
                    <div className={styles.aboutsidertxt2}>
                        <div className={styles.aboutsidertxt2title}>Contact me at  <Link className={styles.emailLink} href={"mailto:gassa.nahidath@gmail.com"}>gassa.nahidath@gmail.com</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Page;