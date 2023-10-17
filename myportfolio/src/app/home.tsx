'use client';
import type { NextPage } from "next";
import styles from "./css/home1.module.css";
import Link from "next/link";
import NavBar from "@/app/component/NavBar";


const Home1: NextPage = () => {
    function goToAbout() {
        window.location.href = "/about";
    }

    return (
        <div className={styles.portfolio}>
            <div className={styles.firstblock}>
                {/*<NavBar />*/}
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
                        <button className={`${styles.btnShine} ${styles.aboutMe}`} onClick={goToAbout} >
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
                    <img alt="" src="/icons/Square_1.png" />
                    <div className={styles.tbtxt}>
                        <p className={styles.projects}>projects</p>
                        <p className={styles.thatIMade}>That I made</p>
                    </div>
                    <img alt="" src="/icons/Square_1.png" />
                </div>
                <div className={styles.projectblock}>
                    <div className={styles.container1}>
                        <img className={`${styles.image1Icon} ${styles.imgZoom}`} alt="" src="/image_1.png" />
                        <div className={styles.overlay1}>
                            <div className={styles.description1}>Hello world</div>
                        </div>
                    </div>
                    <img className={`${styles.image2Icon} ${styles.imgZoom}`} alt="" src="/image_2.png" />
                    <img className={`${styles.image3Icon} ${styles.imgZoom}`} alt="" src="/image_3.jpg" />
                    <img className={`${styles.image4Icon} ${styles.imgZoom}`} alt="" src="/image_4.png" />
                </div>
            </div>
            <div className={styles.forthblock}>
                <div className={styles.titleblock}>
                    <img alt="" src="/icons/Square_1.png" />
                    <div className={styles.tbtxt}>
                        <p className={styles.projects}>
                            Languages, ides and Softwares
                        </p>
                        <p className={styles.thatIMade}>
                            That i use for coding and designing as well
                        </p>
                    </div>
                    <img alt="" src="/icons/Square_1.png" />
                </div>
                <div className={styles.iconReactParent}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" height={120} width={120} />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height={120} width={120}/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height={120} width={120} />
                    <img className={styles.iconNodejs} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" height={120} width={120} />
                    <i className="devicon-nextjs-original-wordmark" style={{fontSize:"9rem"}}></i>

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" height={120} width={120} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" height={120} width={120}  />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" height={120} width={120} />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" height={120} width={120} />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg" height={120} width={120}/>

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" height={120} width={120}/>

                </div>
            </div>

        </div>
    );
};


export default Home1;