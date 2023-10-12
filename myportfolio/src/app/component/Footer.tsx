import styles from "@/app/css/footer.module.css";
import {NextPage} from "next";
import Link from "next/link";


const Footer: NextPage = () => {
    return (
        <div className={styles.footer}>
            <Link href={"https://github.com/nahidath"} target={"_blank"} className={styles.footerIcon}>
                <i className="devicon-github-original" style={{fontSize:"4.25rem", color:"#fff"}}></i>
                <div className={styles.footericontxt}>Github</div>
            </Link>
            <Link href={"https://www.linkedin.com/in/nahidath-gassa-1640b6198/"} target={"_blank"} className={styles.footerIcon}>
                <i className="devicon-linkedin-plain" style={{fontSize:"4.25rem", color:"#fff"}}></i>
                <div className={styles.footericontxt}>LinkedIn</div>
            </Link>
        </div>
    )
}

export default Footer;