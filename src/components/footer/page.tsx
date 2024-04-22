import Image from "next/image";
import footerStyle from "../../styles/footer.module.css";
import Link from "next/link";

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
                                <Link href="/" legacyBehavior><p>Home</p></Link>
                                <Link href="/about" legacyBehavior><p>About</p></Link>
                                <Link href="/resources" legacyBehavior><p>Insights</p></Link>
                                <Link href="/caseStudies" legacyBehavior><p>Case Studies</p></Link>
                                <Link href="/contact" legacyBehavior><p>Contact</p></Link>
                            </div>
                        </div>
                        <div className={footerStyle.topicsContainer}>
                            <p className={footerStyle.topicsHeading}>Services</p>
                            <div className={footerStyle.topics}>
                                <Link href="/service" legacyBehavior><p>Executive Search</p></Link>
                                <Link href="/talent" legacyBehavior><p>Talent Advisory</p></Link>
                                <Link href="/recruitment_Process_Outsourcing" legacyBehavior><p>Recruitment Process <br></br> Outsourcing</p></Link>
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
                                <Link href="/jobs" legacyBehavior><p>Browse Jobs</p></Link>
                                <Link href="/jobs/cv" legacyBehavior><p>Submit Your CV</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={footerStyle.whiteLine}></div>
                    <div className={footerStyle.copyRight}>
                    <p>Copyright © <span>{(new Date().getFullYear())}</span> Leaders Access</p>
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