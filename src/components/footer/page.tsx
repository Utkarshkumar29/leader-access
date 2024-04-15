import style from "../../styles/footer.module.css";
import Image from "next/image";

export default function Footer(){
    return(
        <div className={style.footerContainer}>
            <div className={style.footerWrapper}>
                <div className={style.footerContents}>
                    <div className={style.whiteContainer}>
                        <Image src="/images/landing/white_logo.svg" alt="Error" width={40} height={40}/>
                        <p className={style.footerHeading}>Leaders Access</p>
                    </div>
                    <div className={style.linksWrapper}>
                        <div className={style.topicsContainer}>
                            <p className={style.topicsHeading}>Pages</p>
                            <div className={style.topics}>
                                <p>Home</p>
                                <p>About</p>
                                <p>Insights</p>
                                <p>Case Studies</p>
                                <p>Contact</p>
                            </div>
                        </div>
                        <div className={style.topicsContainer}>
                            <p className={style.topicsHeading}>Services</p>
                            <div className={style.topics}>
                                <p>Executive Search</p>
                                <p>Talent Advisory</p>
                                <p>Recruitment Process</p>
                                <p>Outsourcing</p>
                            </div>
                        </div>
                        <div className={style.topicsContainer}>
                            <p className={style.topicsHeading}>Expertise</p>
                            <div className={style.topics}>
                                <p>Industries</p>
                                <p>Functions</p>
                            </div>
                        </div>
                        <div className={style.topicsContainer}>
                            <p className={style.topicsHeading}>Jobs</p>
                            <div className={style.topics}>
                                <p>Browse Jobs</p>
                                <p>Submit Your CV</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.whiteLine}></div>
                    <div className={style.copyRight}>
                    <p>Copyright © 2024 Leaders Access</p>
                    <div className={style.terms}>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                        <p>Disclaimer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}