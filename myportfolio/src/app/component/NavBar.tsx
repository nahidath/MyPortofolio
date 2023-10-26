import Link from "next/link";
import {NextPage} from "next";
import styles from "@/app/css/navbar.module.css";
import {FaArrowUpRightFromSquare} from "react-icons/fa6";
import Image from "next/image";




const NavBar:NextPage = () => {
    return (
        <div className={styles.header}>
            <Image className={styles.logoIcon} alt={""} src={"/icons/logo.png"} />
            <div className={styles.navbar}>
                <Link href={"/"} className={styles.navlinkTxt}>
                    Home
                </Link>
                <Link href={"/about"} className={styles.navlinkTxt}>
                   About
                </Link>
                <Link href={"/resume.pdf"} target={"_blank"} className={styles.navlinkTxt}>
                    Resume <FaArrowUpRightFromSquare  size={13} style={{marginLeft: 5}} color={"#fff"}/>
                </Link>
            </div>
        </div>
    )
}

export default NavBar;