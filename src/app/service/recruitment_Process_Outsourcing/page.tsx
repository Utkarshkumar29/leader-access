import Link from "next/link";
import style from "../../../styles/leader.module.css";
import aboutStyle from "../../../styles/about.module.css";
import Navbar from "@/components/navbar/page";
import resourceStyle from "../../../styles/resource.module.css";
import Image from "next/image";
import Footer from "@/components/footer/page";

export default function Service() {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        {/*Navbar */}
        <Navbar/>

        <div className={resourceStyle.container}>
          <div className={resourceStyle.wrapper}>
          <p>Recruitment Process Outsourcing</p>
          <p>
          Accelerate hiring with our RPO service. We handle sourcing, screening, and onboarding, freeing your team for strategic tasks.
          </p>
          </div>
        </div>

        {/*Intro */}
        <div className={aboutStyle.intro}>
          <div className={style.partnerHeadings}></div>
          <div className={aboutStyle.introDescription}>
            <Image
              src="/images/about/intro_main.svg"
              alt="Error"
              className={aboutStyle.introImage}
              layout="responsive"
              width={500}
              height={500}
            />
            <p className={aboutStyle.description}>
              Welcome to Leaders Access, where talent meets opportunity. We are
              a leading executive search and talent advisory firm dedicated to
              helping organizations identify, attract, and retain top-tier
              talent that drives business success and innovation. With a
              commitment to excellence and a client-centric approach, we
              leverage our expertise, industry insights, and extensive network
              to deliver tailored solutions that exceed expectations. At Leaders
              Access, we believe that talent is the cornerstone of
              organizational success, and we are passionate about helping our
              clients build high-performing teams that fuel growth and achieve
              their strategic objectives.
            </p>
          </div>
        </div>

        {/*Choose */}
        <div className={aboutStyle.chooseContainer}>
          <div className={aboutStyle.chooseWrapper}>
            <div className={style.partnerHeadings}>
            <p className={style.partnerHeading}>Key Benefits</p>
          </div>
          <div className={aboutStyle.whyChooseUs}>
            <div className={aboutStyle.commonBlueCard}>
              <div className={aboutStyle.chooseImageWrapper}>
                <Image src="/images/about/choose.svg" alt="Error" width={50} height={50}/>
              </div>
              <div>
                <p>Unlock Elite Executive Talent Network</p>
                <p>
                Access top-tier executive talent via our vast network for organizational growth.
                </p>
              </div>
            </div>
            <div className={aboutStyle.commonBlueCard}>
              <div className={aboutStyle.chooseImageWrapper}>
                <Image src="/images/about/choose.svg" alt="Error" width={50} height={50}/>
              </div>
              <div>
                <p>Thorough Candidate Screening</p>
                <p>
                Beyond resumes, our process delves deep into backgrounds and competencies, ensuring the right fit.
                </p>
              </div>
            </div>
            <div className={aboutStyle.commonBlueCard}>
              <div className={aboutStyle.chooseImageWrapper}>
                <Image src="/images/about/choose.svg" alt="Error" width={50} height={50}/>
              </div>
              <div>
                <p>Smooth Onboarding</p>
                <p>
                  Ensure executive success with seamless integration support.
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>

        {/*Our Approach */}
        <div className={style.approachContainer}>
          <div className={style.approachWrapper}>
            <div className={style.partnerHeadings}>
              <p className={style.partnerHeading}>Our Search Process</p>
              <div className={style.arrowContainer}>
                <Image src="/images/landing/leftArrow.svg" className="" alt="Error" width={20} height={20}/>
                <p>1/12</p>
                <Image src="/images/landing/rightArrow.svg" className="" alt="Error" width={20} height={20}/>
              </div>
            </div>
            <div className={style.ourApproachCardWrapper}>
              <div className={style.approachCardOne}>
                <div className={style.frame}>
                  <Image src="/images/landing/Frame 1.svg" alt="Error" width={50} height={50}/>
                </div>
                <p className={style.approachCardHeading}>
                  Alignment with Organizational Goals
                </p>
                <ul>
                  <li className={style.commontext}>
                    Ensure understanding of role&apos;s contribution.
                  </li>
                  <li className={style.commontext}>
                    Verify alignment with company mission and values.
                  </li>
                </ul>
              </div>
              <div className={style.commonCard}>
                <div className={style.frame2}>
                  <Image src="/images/landing/Layer_1.svg" alt="Error" width={50} height={50}/>
                </div>
                <p className={style.commonCardHeading}>
                  Alignment with Organizational Goals
                </p>
                <ul>
                  <li className={style.commontext}>
                    Ensure understanding of role&apos;s contribution.
                  </li>
                  <li className={style.commontext}>
                    Verify alignment with company mission and values.
                  </li>
                </ul>
              </div>
              <div className={style.commonCard}>
                <div className={style.frame2}>
                  <Image src="/images/landing/Layer_1.svg" alt="Error" width={50} height={50}/>
                </div>
                <p className={style.commonCardHeading}>
                  Alignment with Organizational Goals
                </p>
                <ul>
                  <li className={style.commontext}>
                    Ensure understanding of role&apos;s contribution.
                  </li>
                  <li className={style.commontext}>
                    Verify alignment with company mission and values.
                  </li>
                </ul>
              </div>
              <div className={style.commonCard}>
                <div className={style.frame2}>
                  <Image src="/images/landing/Layer_1.svg" alt="Error" width={50} height={50}/>
                </div>
                <p className={style.commonCardHeading}>
                  Alignment with Organizational Goals
                </p>
                <ul>
                  <li className={style.commontext}>
                    Ensure understanding of role&apos;s contribution.
                  </li>
                  <li className={style.commontext}>
                    Verify alignment with company mission and values.
                  </li>
                </ul>
              </div>
              <div className={style.commonCard}>
                <div className={style.frame2}>
                  <Image src="/images/landing/Layer_1.svg" alt="Error" width={50} height={50}/>
                </div>
                <p className={style.commonCardHeading}>
                  Alignment with Organizational Goals
                </p>
                <ul>
                  <li className={style.commontext}>
                    Ensure understanding of role&apos;s contribution.
                  </li>
                  <li className={style.commontext}>
                    Verify alignment with company mission and values.
                  </li>
                </ul>
              </div>
              <div className={style.commonCard}>
                <div className={style.frame2}>
                  <Image src="/images/landing/Layer_1.svg" alt="Error" width={50} height={50}/>
                </div>
                <p className={style.commonCardHeading}>
                  Alignment with Organizational Goals
                </p>
                <ul>
                  <li className={style.commontext}>
                    Ensure understanding of role&apos;s contribution.
                  </li>
                  <li className={style.commontext}>
                    Verify alignment with company mission and values.
                  </li>
                </ul>
              </div>
              <div className={style.commonCard}>
                <div className={style.frame2}>
                  <Image src="/images/landing/Layer_1.svg" alt="Error" width={50} height={50}/>
                </div>
                <p className={style.commonCardHeading}>
                  Alignment with Organizational Goals
                </p>
                <ul>
                  <li className={style.commontext}>
                    Ensure understanding of role&apos;s contribution.
                  </li>
                  <li className={style.commontext}>
                    Verify alignment with company mission and values.
                  </li>
                </ul>
              </div>
              <div className={style.commonCard}>
                <div className={style.frame2}>
                  <Image src="/images/landing/Layer_1.svg" alt="Error" width={50} height={50} />
                </div>
                <p className={style.commonCardHeading}>
                  Alignment with Organizational Goals
                </p>
                <ul>
                  <li className={style.commontext}>
                    Ensure understanding of role&apos;s contribution.
                  </li>
                  <li className={style.commontext}>
                    Verify alignment with company mission and values.
                  </li>
                </ul>
              </div>
              <div className={style.commonCard}>
                <div className={style.frame2}>
                  <Image src="/images/landing/Layer_1.svg" alt="Error" width={50} height={50}/>
                </div>
                <p className={style.commonCardHeading}>
                  Alignment with Organizational Goals
                </p>
                <ul>
                  <li className={style.commontext}>
                    Ensure understanding of role&apos;s contribution.
                  </li>
                  <li className={style.commontext}>
                    Verify alignment with company mission and values.
                  </li>
                </ul>
              </div>
              <div className={style.commonCard}>
                <div className={style.frame2}>
                  <Image src="/images/landing/Layer_1.svg" alt="Error" width={50} height={50}/>
                </div>
                <p className={style.commonCardHeading}>
                  Alignment with Organizational Goals
                </p>
                <ul>
                  <li className={style.commontext}>
                    Ensure understanding of role&apos;s contribution.
                  </li>
                  <li className={style.commontext}>
                    Verify alignment with company mission and values.
                  </li>
                </ul>
              </div>
              <div className={style.commonCard}>
                <div className={style.frame2}>
                  <Image src="/images/landing/Layer_1.svg" alt="Error" width={50} height={50}/>
                </div>
                <p className={style.commonCardHeading}>
                  Alignment with Organizational Goals
                </p>
                <ul>
                  <li className={style.commontext}>
                    Ensure understanding of role&apos;s contribution.
                  </li>
                  <li className={style.commontext}>
                    Verify alignment with company mission and values.
                  </li>
                </ul>
              </div>
              <div className={style.commonCard}>
                <div className={style.frame2}>
                  <Image src="/images/landing/Layer_1.svg" alt="Error" width={50} height={50}/>
                </div>
                <p className={style.commonCardHeading}>
                  Alignment with Organizational Goals
                </p>
                <ul>
                  <li className={style.commontext}>
                    Ensure understanding of role&apos;s contribution.
                  </li>
                  <li className={style.commontext}>
                    Verify alignment with company mission and values.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/*Footer */}
        <Footer/>
      </div>
    </div>
  );
}
