import type { NextPage } from "next";
import styles from "./css/home1.module.css";
import Link from "next/link";


const Home1: NextPage = () => {
    return (
        <div className={styles.portfolio}>
            <div className={styles.firstblock}>
                <div className={styles.header}>
                    <img className={styles.logoIcon} alt="" src="/icons/logo.png" />
                    <div className={styles.navbar}>
                        <Link href={"/"} className={styles.navlink}>
                            <div className={styles.home}>Home</div>
                        </Link>
                        <Link href={"/about"} className={styles.navlink}>
                            <div className={styles.home}>About</div>
                        </Link>
                        <Link href={"/resume"} className={styles.navlink}>
                            <div className={styles.home}>Resume</div>
                        </Link>
                    </div>
                </div>
                <div className={styles.profile}>
                    <img
                        className={styles.profileimgIcon}
                        alt=""
                        src="/icons/profileimg.png"
                    />
                    <div className={styles.profiletxt}>
                        <p className={styles.nahidathGassa}>Nahidath GASSA</p>
                        <p className={styles.fullstackWebDeveloper}>
                            Fullstack web developer
                        </p>
                        <p className={styles.withoutRequirementOr}>
                            without requirement or design, programming is the art of adding
                            bugs to an empty file
                        </p>
                    </div>
                    <div className={styles.btnaboutme}>
                        <button className={`${styles.btnShine} ${styles.aboutMe}`}>
                            <span><b className={styles.aboutMe1}>About me</b></span>
                        </button>
                    </div>
                    <div className={styles.scrollDownAnimated}>
                        <img
                            className={styles.scrollDownIcon}
                            alt=""
                            src="/icons/Scroll_Down.png"
                        />
                    </div>
                </div>
            </div>
            <div className={styles.secondblock}>
                <div className={styles.topskill}>
                    <div className={styles.circleicon}>
                        <div className={styles.circle}>
                            <img
                                className={styles.circleInsideIcon}
                                alt=""
                                src="/icons/Fast_Forward.png"
                            />
                        </div>
                    </div>
                    <div className={styles.icontxt}>
                        <div className={styles.icontitletxt}>
                            <b className={styles.icontitle}>Fast Learner</b>
                            <p className={styles.adaptableAndSwift}>
                                Adaptable and swift, I grasp new concepts swiftly—always
                                evolving to meet the demands of dynamic learning environments.
                            </p>
                        </div>

                    </div>
                </div>
                <div className={styles.topskill}>
                    <div className={styles.circleicon}>
                        <div className={styles.circle}>
                            <img className={styles.circleInsideIcon} alt="" src="/icons/Paint.png" />
                        </div>
                    </div>
                    <div className={styles.icontxt}>
                        <div className={styles.icontitletxt}>
                            <b className={styles.icontitle}>CReative</b>
                            <p className={styles.adaptableAndSwift}>
                                In the realm of creativity, I sculpt imaginative wonders,
                                breathing life into digital realms with innovative designs and
                                boundary-pushing concepts—a visionary crafting a tapestry of
                                limitless possibilities.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.topskill}>
                    <div className={styles.circleicon}>
                        <div className={styles.circle}>
                            <img className={styles.circleInsideIcon} alt="" src="/icons/Diamond.png" />
                        </div>

                    </div>
                    <div className={styles.icontxt}>
                        <div className={styles.icontitletxt}>
                            <b className={styles.icontitle}>attention to details</b>
                            <p className={styles.adaptableAndSwift}>
                                Meticulous in web development, I ensure pixel-perfect precision
                                and flawless harmony in every line of code—a curator of a
                                seamlessly crafted digital world.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.topskill}>
                    <div className={styles.circleicon}>
                        <div className={styles.circle}>
                            <img
                                className={styles.circleInsideIcon}
                                alt=""
                                src="/icons/TestTube.png"
                            />
                        </div>

                    </div>
                    <div className={styles.icontxt}>
                        <div className={styles.icontitletxt}>
                            <b className={styles.icontitle}>innovante</b>
                            <p className={styles.adaptableAndSwift}>
                                Innovating in web development, I sculpt groundbreaking solutions,
                                pushing boundaries to redefine digital landscapes—a pioneer
                                crafting the future of the online realm.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <div className={styles.thirdblock}>
                <div className={styles.titleblock}>
                    <img className={styles.square1Icon} alt="" src="/icons/Square_1.png" />
                    <div className={styles.tbtxt}>
                        <p className={styles.projects}>projects</p>
                        <p className={styles.thatIMade}>That I made</p>
                    </div>
                    <img className={styles.square2Icon} alt="" src="/icons/Square_1.png" />
                </div>
                <div className={styles.projectblock}>
                    <img className={styles.image1Icon} alt="" src="/image_1.png" />
                    <img className={styles.image2Icon} alt="" src="/image_2.png" />
                    <img className={styles.image3Icon} alt="" src="/image_3.jpg" />
                    <img className={styles.image4Icon} alt="" src="/image_4.png" />
                </div>
            </div>
            <div className={styles.forthblock}>
                <div className={styles.titleblock2}>
                    <div className={styles.tbtxt2}>
                        <p className={styles.languagesIdesAndSoftwares}>
                            <b className={styles.languagesIdesAnd}>
                                Languages, ides and Softwares
                            </b>
                        </p>
                        <p className={styles.thatIMade}>
                            That i use for coding and designing as well
                        </p>
                    </div>
                    <img className={styles.square1Icon1} alt="" src="/icons/Square_1.png" />
                    <img className={styles.square2Icon1} alt="" src="/icons/Square_1.png" />
                </div>
                <div className={styles.iconReactParent}>
                    <img className={styles.iconReact} alt="" src="/icons/icon_react.png" />
                    <img
                        className={styles.iconReactNative}
                        alt=""
                        src="/icons/icon_React-native.png"
                    />
                    <img className={styles.iconJs} alt="" src="/icons/icon_JS.png" />
                    <img className={styles.iconJs} alt="" src="/icons/icon_TS.png" />
                    <img className={styles.iconNodejs} alt="" src="/icons/icon_Nodejs.png" />
                    <img className={styles.iconNextjs} alt="" src="/icons/icon_Nextjs.png" />
                    <img className={styles.iconJs} alt="" src="/icons/icon_php.png" />
                    <img className={styles.iconPython} alt="" src="/icons/icon_Python.png" />
                    <img className={styles.iconDocker} alt="" src="/icons/icon_docker.png" />
                    <img className={styles.iconVscode} alt="" src="/icons/icon_vscode.png" />
                    <img className={styles.iconNodejs} alt="" src="/icons/icon_WebStorm.png" />
                    <img className={styles.iconNodejs} alt="" src="/icons/icon_pycharm.png" />
                    <img className={styles.iconFigma} alt="" src="/icons/icon_Figma.png" />
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.github}>
                    <img
                        className={styles.githubLogoIcon}
                        alt=""
                        src="/icons/GitHub_logo.png"
                    />
                    <div className={styles.footericontxt}>Github</div>
                </div>
                <div className={styles.linkedin}>
                    <img
                        className={styles.githubLogoIcon}
                        alt=""
                        src="/icons/linkedin_logo.png"
                    />
                    <div className={styles.footericontxt}>LinkedIn</div>
                </div>
            </div>
        </div>
    );
};


export default Home1;