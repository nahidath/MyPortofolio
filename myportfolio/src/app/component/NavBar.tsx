import Link from "next/link";
import {NextPage} from "next";
import styles from "@/app/css/navbar.module.css";



const NavBar:NextPage = () => {
    return (
        <div className={styles.header}>
            <img className={styles.logoIcon} alt="" src="/icons/logo.png" />
            <div className={styles.navbar}>
                <Link href={"/"} className={styles.navlinkTxt}>
                    Home
                </Link>
                <Link href={"/about"} className={styles.navlinkTxt}>
                   About
                </Link>
                <Link href={"/resume"} className={styles.navlinkTxt}>
                    Resume
                </Link>
            </div>
        </div>
    )
}

export default NavBar;