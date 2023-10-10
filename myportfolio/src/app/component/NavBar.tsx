import Link from "next/link";
import {NextPage} from "next";
import styles from "@/app/css/navbar.module.css";



const NavBar:NextPage = () => {
    return (
        <div className={styles.header}>
            <img className={styles.logoIcon} alt="" src="/icons/logo.png" />
            <div className={styles.navbar}>
                <Link href={"/"} className={styles.navlink}>
                    <div className={styles.navlinkTxt }>Home</div>
                </Link>
                <Link href={"/about"} className={styles.navlink}>
                    <div className={styles.navlinkTxt }>About</div>
                </Link>
                <Link href={"/resume"} className={styles.navlink}>
                    <div className={styles.navlinkTxt }>Resume</div>
                </Link>
            </div>
        </div>
    )
}

export default NavBar;