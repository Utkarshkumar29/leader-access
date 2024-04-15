import Link from "next/link";
import style from "../../styles/leader.module.css";
import aboutStyle from "../../styles/about.module.css";
import expertStyle from "../../styles/expertise.module.css";
import Navbar from "@/components/navbar/page";
import Image from "next/image";

export default function Expertise() {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>

        {/*Navbar */}
        <Navbar/>

        <div className={aboutStyle.aboutContainer}>
        <div className={aboutStyle.aboutIntro}>
          <p>
          We Speak Your <br></br> Industry&apos;s Language
          </p>
        </div>
        </div>
        

        {/*Technology */}
        <div className={aboutStyle.intro}>
          <div className={style.partnerHeadings}>
            <p className={style.partnerHeading}>Technology Industry</p>
          </div>
          <div className={expertStyle.expertTechCards}>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error"/>
                <p>Software Services</p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error"/>
                <p>IT Services</p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error"/>
                <p>Hardware, Storage &
                  Peripherals</p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error"/>
                <p>IOT & Embedded Technologies</p>
              </div>
          </div>
        </div>

        {/*Technology */}
        <div className={aboutStyle.intro}>
          <div className={style.partnerHeadings}>
            <p className={style.partnerHeading}>Banking & Financial Institution Industry</p>
          </div>
          <div className={expertStyle.expertTechCards}>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error"/>
                <p>Banks</p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error"/>
                <p>Fin-tech</p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error"/>
                <p>NBFC</p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error"/>
                <p>Insurance</p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error"/>
                <p>Asset Management</p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error"/>
                <p>Capital Markets</p>
              </div>
          </div>
        </div>

        {/*Technology */}
        <div className={aboutStyle.intro}>
          <div className={style.partnerHeadings}>
            <p className={style.partnerHeading}>Consumer & Services Industry</p>
          </div>
          <div className={expertStyle.expertTechCards}>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error"/>
                <p>Logistics & Retail </p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error"/>
                <p>IT Services</p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error"/>
                <p>Hardware, Storage &
                  Peripherals</p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error"/>
                <p>IOT & Embedded Technologies</p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error"/>
                <p>Software Services</p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error"/>
                <p>IT Services</p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error"/>
                <p>Hardware, Storage &
                  Peripherals</p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error"/>
                <p>IOT & Embedded Technologies</p>
              </div>
          </div>
        </div>

        {/*Technology */}
        <div className={aboutStyle.intro}>
          <div className={style.partnerHeadings}>
            <p className={style.partnerHeading}>Manufacturing Industry</p>
          </div>
          <div className={expertStyle.expertTechCards}>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error"/>
                <p>Software Services</p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error"/>
                <p>IT Services</p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error"/>
                <p>Hardware, Storage &
                  Peripherals</p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error"/>
                <p>IOT & Embedded Technologies</p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error"/>
                <p>Hardware, Storage &
                  Peripherals</p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error"/>
                <p>IOT & Embedded Technologies</p>
              </div>
          </div>
        </div>

        {/*Positions*/}
        <div className={style.positionContainer}>
          <div className={style.positionWrapper}>
            <div className={style.partnerHeadings}>
              <p className={style.partnerHeading}>Positions We Are Hiring </p>
              <div className={style.arrowContainer}>
                <Image src="/images/landing/leftArrow.svg" className=""  alt="Error"/>
                <Image src="/images/landing/rightArrow.svg" className=""  alt="Error"/>
              </div>
            </div>
            <div className={style.positions}>
              <Image
                src="/images/landing/posi_manager.svg"
                className={style.positionsImage} alt="Error"
              />
              <Image src="/images/landing/posi_chief.svg" className=""  alt="Error"/>
              <Image src="/images/landing/posi_tech.svg" className=""  alt="Error"/>
            </div>
            <div className={style.buttonContainer}>
              <p className={style.positionsView}>View All</p>
            </div>
          </div>
        </div>

        {/*Footer */}
        <div className={style.footerContainer}>
          <div className={style.footerWrapper}>
              <div className={style.footerContents}>
                <div className={style.whiteContainer}>
                  <Image src="/images/landing/white_logo.svg" alt="Error"/>
                  <p className={style.footerHeading}>Leaders Access</p>
                </div>
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
                  <p className={style.topicsHeading}>Pages</p>
                  <div className={style.topics}>
                    <p>Home</p>
                    <p>About</p>
                    <p>Insights</p>
                    <p>Case Studies</p>
                    <p>Contact</p>
                  </div>
                </div>
              </div>
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


      </div>
    </div>
  );
}
