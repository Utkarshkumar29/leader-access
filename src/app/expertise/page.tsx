import Link from "next/link";
import style from "../../styles/leader.module.css";
import aboutStyle from "../../styles/about.module.css";
import expertStyle from "../../styles/expertise.module.css";
import Navbar from "@/components/navbar/page";
import Image from "next/image";
import resourceStyle from "../../styles/resource.module.css";
import Footer from "@/components/footer/page";

export default function Expertise() {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>

        {/*Navbar */}
        <Navbar/>

        <div className={resourceStyle.container}>
          <div className={resourceStyle.wrapper}>
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
                <Image src="/images/landing/next.svg" alt="Error" width={400} height={300}/>
                <p>Software Services</p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error" width={400} height={300}/>
                <p>IT Services</p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error" width={400} height={300}/>
                <p>Hardware, Storage &
                  Peripherals</p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error" width={400} height={300}/>
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
                <Image src="/images/landing/next.svg" alt="Error" width={400} height={300}/>
                <p>Banks</p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error" width={400} height={300}/>
                <p>Fin-tech</p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error" width={400} height={300}/>
                <p>NBFC</p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error" width={400} height={300}/>
                <p>Insurance</p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error" width={400} height={300}/>
                <p>Asset Management</p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error" width={400} height={300}/>
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
                <Image src="/images/landing/next.svg" alt="Error" width={400} height={300}/>
                <p>Logistics & Retail </p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error" width={400} height={300}/>
                <p>IT Services</p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error" width={400} height={300}/>
                <p>Hardware, Storage &
                  Peripherals</p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error" width={400} height={300}/>
                <p>IOT & Embedded Technologies</p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error" width={400} height={300}/>
                <p>Software Services</p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error" width={400} height={300}/>
                <p>IT Services</p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error" width={400} height={300}/>
                <p>Hardware, Storage &
                  Peripherals</p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error" width={400} height={300}/>
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
                <Image src="/images/landing/next.svg" alt="Error" width={400} height={300}/>
                <p>Software Services</p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error" width={400} height={300}/>
                <p>IT Services</p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error" width={400} height={300}/>
                <p>Hardware, Storage &
                  Peripherals</p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error" width={400} height={300}/>
                <p>IOT & Embedded Technologies</p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error" width={400} height={300}/>
                <p>Hardware, Storage &
                  Peripherals</p>
              </div>
              <div className={expertStyle.expertTechCard}>
                <Image src="/images/landing/next.svg" alt="Error" width={400} height={300}/>
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
                <Image src="/images/landing/leftArrow.svg" className=""  alt="Error" width={20} height={20}/>
                <Image src="/images/landing/rightArrow.svg" className=""  alt="Error" width={20} height={20}/>
              </div>
            </div>
            <div className={style.positions}>
              <Image
                src="/images/landing/posi_manager.svg"
                className={style.positionsImage} alt="Error"
                width={400} height={300}
              />
              <Image src="/images/landing/posi_chief.svg" className=""  alt="Error"width={400} height={300}/>
              <Image src="/images/landing/posi_tech.svg" className=""  alt="Error"width={400} height={300}/>
            </div>
            <div className={style.buttonContainer}>
              <p className={style.positionsView}>View All</p>
            </div>
          </div>
        </div>

        {/*Footer */}
        <Footer/>


      </div>
    </div>
  );
}
