import footerStyle from "../../styles/footer.module.css";
import Image from "next/image";

export default function Footer() {
    return(
        <div className={footerStyle.footerContainer}>
            <div className={footerStyle.footerWrapper}>
                <div className={footerStyle.footerContents}>
                    <div className={footerStyle.whiteContainer}>
                        <Image src="/images/landing/white_logo.svg" alt="Error" width={40} height={40}/>
                        <p className={footerStyle.footerHeading}>Leaders Access</p>
                    </div>
                    <div className={footerStyle.linksWrapper}>
                        <div className={footerStyle.topicsContainer}>
                            <p className={footerStyle.topicsHeading}>Pages</p>
                            <div className={footerStyle.topics}>
                                <p>Home</p>
                                <p>About</p>
                                <p>Insights</p>
                                <p>Case Studies</p>
                                <p>Contact</p>
                            </div>
                        </div>
                        <div className={footerStyle.topicsContainer}>
                            <p className={footerStyle.topicsHeading}>Services</p>
                            <div className={footerStyle.topics}>
                                <p>Executive Search</p>
                                <p>Talent Advisory</p>
                                <p>Recruitment Process</p>
                                <p>Outsourcing</p>
                            </div>
                        </div>
                        <div className={footerStyle.topicsContainer}>
                            <p className={footerStyle.topicsHeading}>Expertise</p>
                            <div className={footerStyle.topics}>
                                <p>Industries</p>
                                <p>Functions</p>
                            </div>
                        </div>
                        <div className={footerStyle.topicsContainer}>
                            <p className={footerStyle.topicsHeading}>Jobs</p>
                            <div className={footerStyle.topics}>
                                <p>Browse Jobs</p>
                                <p>Submit Your CV</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={footerStyle.whiteLine}></div>
                    <div className={footerStyle.copyRight}>
                    <p>Copyright © 2024 Leaders Access</p>
                    <div className={footerStyle.terms}>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                        <p>Disclaimer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}