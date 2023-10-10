import styles from "@/app/css/footer.module.css";
import {NextPage} from "next";


const Footer: NextPage = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerIcon}>
                <i className="devicon-github-original" style={{fontSize:"4.25rem", color:"#fff"}}></i>

                <div className={styles.footericontxt}>Github</div>
            </div>
            <div className={styles.footerIcon}>
                <i className="devicon-linkedin-plain" style={{fontSize:"4.25rem", color:"#fff"}}></i>
                <div className={styles.footericontxt}>LinkedIn</div>
            </div>
        </div>
    )
}

export default Footer;