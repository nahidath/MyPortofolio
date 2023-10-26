import styles from '../css/about.module.css'
import {NextPage} from "next";
import DividerV from "@/app/component/DividerV";
import Link from "next/link";
import Image from "next/image";

const Page: NextPage = () => {
    return (
        <div className={styles.about}>
            <div className={styles.aboutsider}>
                <Image className={styles.aboutsiderimg} alt={""} src={"/icons/profileimg.png"}
                width={300}
                height={300}
                />
                <DividerV height={300}/>
                <div className={styles.aboutsidertxt}>
                    <div className={styles.aboutsidertitle}>About me</div>
                    <div className={styles.aboutsidertxt1}>
                        Hi, my name is Nahidath and I am a fullstack web developer.<br/>I have a passion for web development and love to create for web and mobile devices.<br/>
                        I am a fast learner and I am always looking for new challenges.<br/>
                        I am speaking French and English.<br/>
                        I am currently living in Paris, France.<br/>
                    </div>
                    <div className={styles.aboutsidertxt2}>
                        <div className={styles.aboutsidertxt2title}>You can contact me at  <Link className={styles.emailLink} href={"mailto:gassa.nahidath@gmail.com"}>gassa.nahidath@gmail.com</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Page;