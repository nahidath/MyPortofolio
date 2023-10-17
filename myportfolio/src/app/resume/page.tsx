import styles from "@/app/css/resume.module.css";


const Page = () => {
    return (
        //page to display pdf resume
           <div className={styles.resumePage}>
               <div className={styles.resumeTitle}>My resume</div>
               <iframe src="/resume.pdf" width="55%" height="100%" />
                {/*<embed src="/resume.pdf" width="100%" height="1000px" />*/}
           </div>

    )
}

export default Page;