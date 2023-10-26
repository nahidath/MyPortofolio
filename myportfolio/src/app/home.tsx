'use client';
import type { NextPage } from "next";
import styles from "./css/home1.module.css";
import Link from "next/link";
import NavBar from "@/app/component/NavBar";
import Image from "next/image";


const Home1: NextPage = () => {
    function goToAbout() {
        window.location.href = "/about";
    }

    return (
        <div className={styles.portfolio}>
            <div className={styles.firstblock}>
                <div className={styles.profile}>
                    <Image
                        className={styles.profileimgIcon}
                        alt={""}
                        src={"/icons/profileImg.png"}
                        width={186}
                        height={186}
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
                        <Image
                            className={styles.scrollDownIcon}
                            alt={""}
                            src={"/icons/Scroll_Down.png"}
                            width={84}
                            height={84}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.secondblock}>
                <div className={styles.topskill}>
                    <div className={styles.circleicon}>
                        <div className={styles.circle}>
                            <Image
                                className={styles.circleInsideIcon}
                                alt={""}
                                src={"/icons/Fast_Forward.png"}
                                width={82.4}
                                height={82.4}

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
                            <Image className={styles.circleInsideIcon} alt={""} src={"/icons/Paint.png"}
                            width={82}
                            height={82}
                            />
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
                            <Image className={styles.circleInsideIcon} alt={""} src={"/icons/Diamond.png"}
                            width={82}
                            height={82}
                            />
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
                            <Image
                                className={styles.circleInsideIcon}
                                alt={""}
                                src={"/icons/TestTube.png"}
                                width={82}
                                height={82}
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
                    <Image alt={""} src={"/icons/Square_1.png"}
                    width={91}
                    height={91}
                    />
                    <div className={styles.tbtxt}>
                        <p className={styles.projects}>projects</p>
                        <p className={styles.thatIMade}>That I made</p>
                    </div>
                    <Image alt={""} src={"/icons/Square_1.png"}
                    width={91}
                    height={91}
                    />
                </div>
                <div className={styles.projectblock}>
                    <div className={styles.container1}>
                        <Image className={`${styles.image1Icon} ${styles.imgZoom}`} alt={""} src={"/image_1.png"}
                        width={731.96}
                        height={348.96}

                        />
                        <div className={styles.middle}>
                            <div className={styles.description1}>
                                <div className={styles.titleDesc}>Find your game (F.Y.G)</div>
                                <div className={styles.subDesc}>A web application that allows users to find games that they might like based on their preferences. Users can search for games by genre and platform. Users can also create an account to save games to their favorites list. <br/>
                                <Link href={"https://github.com/nahidath/fyg"} target={"_blank"} className={styles.linkDesc} >Github</Link>  -  <Link href={"https://fyg-three.vercel.app/"} target={"_blank"} className={styles.linkDesc} >Website</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.container1}>
                        <Image className={`${styles.image2Icon} ${styles.imgZoom}`}alt={""} src={"/image_2.png"}
                        width={644.96}
                        height={348.96}
                        />
                        <div className={styles.middle}>
                            <div className={styles.description1}>
                                <div className={styles.titleDesc}>Blind Test</div>
                                <div className={styles.subDesc}>A simple blind test made with ReactJS and Deezer API. This project was bootstrapped with Create React App.<br/>
                                <Link href={"https://github.com/nahidath/Blind-Test"} target={"_blank"} className={styles.linkDesc} >Github</Link>  -  <Link href={"https://quiz-react-mu-liart.vercel.app/"} target={"_blank"} className={styles.linkDesc} >Website</Link>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={styles.container1}>
                        <Image className={`${styles.image3Icon} ${styles.imgZoom}`}alt={""} src={"/image_3.jpg"}
                               width={308} height={662.08}
                        />
                        <div className={styles.middle}>
                            <div className={styles.description1}>
                                <div className={styles.titleDesc}>MyRecipeApp</div>
                                <div className={styles.subDesc}>A mobile app that allows you to search for recipes and see the ingredients and instructions. You can also save your favorite recipes.<br/>
                                    <Link href={"https://github.com/nahidath/MyRecipeApp"} target={"_blank"} className={styles.linkDesc}>Github</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.container1}>
                        <Image className={`${styles.image4Icon} ${styles.imgZoom}`}alt={""} src={"/image_4.png"}
                        width={824} height={512.96}
                        />
                        <div className={styles.middle}>
                            <div className={styles.description1}>
                                <div className={styles.titleDesc}>Fast Typing Game (F.T.G)</div>
                                <div className={styles.subDesc}>A simple funny typing game made with ReactJS. This project was bootstrapped with Create React App.<br/>
                                    <Link href={"https://github.com/nahidath/fast-typing-game"} target={"_blank"} className={styles.linkDesc} >Github</Link>  -  <Link href={"https://fast-typing-game.vercel.app/"} target={"_blank"} className={styles.linkDesc} >Website</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className={styles.forthblock}>
                <div className={styles.titleblock}>
                    <Image alt={""} src={"/icons/Square_1.png"}
                    width={91} height={91}/>
                    <div className={styles.tbtxt}>
                        <p className={styles.projects}>
                            Languages, ides and Softwares
                        </p>
                        <p className={styles.thatIMade}>
                            That i use for coding and designing as well
                        </p>
                    </div>
                    <Image alt={""} src={"/icons/Square_1.png"}
                    width={91} height={91}/>
                </div>
                <div className={styles.iconLanguages}>
                    <Link href={"https://reactjs.org/"} target={"_blank"} className={styles.linkLanguages} ><Image alt={""} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"} height={120} width={120} /></Link>
                    <Link href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"} target={"_blank"} className={styles.linkLanguages}> <Image alt={""} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"} height={120} width={120}/></Link>
                    <Link href={"https://www.typescriptlang.org/"} target={"_blank"} className={styles.linkLanguages}> <Image alt={""} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"} height={120} width={120} /></Link>
                    <Link href={"https://nodejs.org/en"} target={"_blank"} className={styles.linkLanguages}><Image alt={""} className={styles.iconNodejs} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"} height={120} width={120} /></Link>
                    
                    <Link href={"https://nextjs.org/"} target={"_blank"} className={styles.linkLanguages}><i className="devicon-nextjs-original-wordmark" style={{fontSize:"9rem", color:"#fff"}}></i></Link>

                    <Link href={"https://www.php.net/manual/en/intro-whatis.php"} target={"_blank"} className={styles.linkLanguages}><Image alt={""} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"} height={120} width={120} /></Link>
                    <Link href={"https://www.python.org/"} target={"_blank"} className={styles.linkLanguages}><Image alt={""} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"} height={120} width={120}  /></Link>
                    <Link href={"https://www.docker.com/"} target={"_blank"} className={styles.linkLanguages}><Image alt="docker" src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg"} height={120} width={120} /></Link>

                    <Link href={"https://code.visualstudio.com/"} target={"_blank"} className={styles.linkLanguages}><Image alt={""} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg"} height={120} width={120} /></Link>

                    <Link href={"https://www.jetbrains.com/products/#type=ide"} target={"_blank"} className={styles.linkLanguages}><Image alt={""} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg"} height={120} width={120}/></Link>

                    <Link href={"https://www.figma.com/fr/"} target={"_blank"} className={styles.linkLanguages}> <Image alt={""} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"} height={120} width={120}/></Link>

                </div>
            </div>

        </div>
    );
};


export default Home1;