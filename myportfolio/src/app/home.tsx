import type { NextPage } from "next";
import styles from "./css/home1.module.css";

const Home1: NextPage = () => {
    return (
        <div className={styles.portfolio}>
            <div className={styles.firstblock}>
                <div className={styles.header}>
                    <img className={styles.logoIcon} alt="" src="/icons/logo.png" />
                    <div className={styles.navbar}>
                        <div className={styles.home}>Home</div>
                        <div className={styles.home}>About</div>
                        <div className={styles.home}>Resume</div>
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
              {/*          <div className={styles.btn} />*/}
              {/*          <div className={styles.aboutMe}>*/}
              {/*<span className={styles.aboutMeTxtContainer}>*/}
              {/*  <b className={styles.aboutMe1}>About me</b>*/}
              {/*  <span className={styles.span}>{` `}</span>*/}
              {/*</span>*/}
              {/*          </div>*/}
                        <button className="btn-shine button">
                            <span>Shine</span>
                        </button>
                    </div>
                    <img
                        className={styles.scrollDownIcon}
                        alt=""
                        src="/icons/Scroll_Down.png"
                    />
                </div>
            </div>
            <div className={styles.secondblock}>
                <div className={styles.topskill}>
                    <div className={styles.circleicon}>
                        <div className={styles.circle} />
                        <img
                            className={styles.fastForwardIcon}
                            alt=""
                            src="/icons/Fast_Forward.png"
                        />
                    </div>
                    <div className={styles.icontxt}>
                        <div className={styles.icontitletxt}>
              <span className={styles.aboutMeTxtContainer}>
                <p className={styles.adaptableAndSwift}>
                  Adaptable and swift, I grasp new concepts swiftly—always
                  evolving to meet the demands of dynamic learning environments.
                </p>
                <p className={styles.blankLine}>&nbsp;</p>
              </span>
                        </div>
                        <b className={styles.icontitle}>Fast Learner</b>
                    </div>
                </div>
                <div className={styles.topskill1}>
                    <div className={styles.circleicon}>
                        <div className={styles.circle} />
                        <img className={styles.paintIcon} alt="" src="/icons/Paint.png" />
                    </div>
                    <div className={styles.icontxt1}>
                        <div className={styles.icontitletxt1}>
              <span className={styles.aboutMeTxtContainer}>
                <p className={styles.adaptableAndSwift}>&nbsp;</p>
                <p className={styles.adaptableAndSwift}>&nbsp;</p>
                <p className={styles.blankLine}>
                  In the realm of creativity, I sculpt imaginative wonders,
                  breathing life into digital realms with innovative designs and
                  boundary-pushing concepts—a visionary crafting a tapestry of
                  limitless possibilities.
                </p>
              </span>
                        </div>
                        <b className={styles.icontitle1}>CReative</b>
                    </div>
                </div>
                <div className={styles.topskill2}>
                    <div className={styles.circleicon}>
                        <div className={styles.circle} />
                        <img className={styles.diamondIcon} alt="" src="/icons/Diamond.png" />
                    </div>
                    <div className={styles.icontxt2}>
                        <div className={styles.icontitletxt2}>
                            Meticulous in web development, I ensure pixel-perfect precision
                            and flawless harmony in every line of code—a curator of a
                            seamlessly crafted digital world.
                        </div>
                        <b className={styles.icontitle2}>attention to details</b>
                    </div>
                </div>
                <div className={styles.topskill3}>
                    <div className={styles.circleicon}>
                        <div className={styles.circle} />
                        <img
                            className={styles.testTubeIcon}
                            alt=""
                            src="/icons/Test_Tube.png"
                        />
                    </div>
                    <div className={styles.icontxt3}>
                        <div className={styles.icontitletxt3}>
                            Innovating in web development, I sculpt groundbreaking solutions,
                            pushing boundaries to redefine digital landscapes—a pioneer
                            crafting the future of the online realm.
                        </div>
                        <b className={styles.icontitle3}>innovante</b>
                    </div>
                </div>
            </div>
            <div className={styles.thirdblock}>
                <div className={styles.titleblock}>
                    <img className={styles.square1Icon} alt="" src="/icons/Square_1.png" />
                    <img className={styles.square2Icon} alt="" src="/icons/Square_1.png" />
                    <div className={styles.tbtxt}>
                        <p className={styles.projects}>
                            <b className={styles.languagesIdesAnd}>projects</b>
                        </p>
                        <p className={styles.thatIMade}>That I made</p>
                    </div>
                </div>
                <div className={styles.projectblock}>
                    <img className={styles.image1Icon} alt="" src="/icons/image_1.png" />
                    <img className={styles.image2Icon} alt="" src="/icons/image_2.png" />
                    <img className={styles.image3Icon} alt="" src="/icons/image_3.png" />
                    <img className={styles.image4Icon} alt="" src="/icons/image_4.png" />
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