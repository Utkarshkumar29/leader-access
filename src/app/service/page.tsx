import Link from "next/link";
import style from "../../styles/leader.module.css";
import aboutStyle from "../../styles/about.module.css";
import Navbar from "@/components/navbar/page";

export default function Service() {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        {/*Navbar */}
        <Navbar/>

        <div className={aboutStyle.aboutContainer}>
        <div className={aboutStyle.aboutIntro}>
          <p>
            Identify, attract, and retain top-tier executives who drive business
            success and innovation.
          </p>
          <p>
            Identify, attract, and retain top-tier executives who drive business
            success and innovation.
          </p>
        </div></div>

        {/*Intro */}
        <div className={aboutStyle.intro}>
          <div className={style.partnerHeadings}></div>
          <div className={aboutStyle.introDescription}>
            <img
              src="/images/about/intro_main.svg"
              alt="Error"
              className={aboutStyle.introImage}
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
        <div className={aboutStyle.intro}>
          <div className={style.partnerHeadings}>
            <p className={style.partnerHeading}>Key Benefits</p>
          </div>
          <div className={aboutStyle.whyChooseUs}>
            <div className={aboutStyle.commonBlueCard}>
              <div className={aboutStyle.chooseImgWrapper}>
                <img src="/images/about/choose.svg" />
              </div>
              <div>
                <p>Unique Approach</p>
                <p>
                  We go beyond traditional search methods, leveraging
                  cutting-edge technology and industry expertise to deliver
                  unparalleled results.
                </p>
              </div>
            </div>
            <div className={aboutStyle.commonBlueCard}>
              <div className={aboutStyle.chooseImgWrapper}>
                <img src="/images/about/choose.svg" />
              </div>
              <div>
                <p>Client Success</p>
                <p>
                  Our track record speaks for itself. With a proven history of
                  successful placements and satisfied clients, we are the
                  trusted partner you can count on.
                </p>
              </div>
            </div>
            <div className={aboutStyle.commonBlueCard}>
              <div className={aboutStyle.chooseImgWrapper}>
                <img src="/images/about/choose.svg" />
              </div>
              <div>
                <p>Unique Approach</p>
                <p>
                  With a vast network spanning across regions and industries, we
                  have the reach to connect you with top talent wherever they
                  may be.
                </p>
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
                <img src="/images/landing/leftArrow.svg" className="" />
                <p>1/12</p>
                <img src="/images/landing/rightArrow.svg" className="" />
              </div>
            </div>
            <div className={style.ourApproachCardWrapper}>
              <div className={style.approachCardOne}>
                <div className={style.frame}>
                  <img src="/images/landing/Frame 1.svg" />
                </div>
                <p className={style.approachCardHeading}>
                  Alignment with Organizational Goals
                </p>
                <ul>
                  <li className={style.commontext}>
                    Ensure understanding of role's contribution.
                  </li>
                  <li className={style.commontext}>
                    Verify alignment with company mission and values.
                  </li>
                </ul>
              </div>
              <div className={style.commonCard}>
                <div className={style.frame2}>
                  <img src="/images/landing/Layer_1.svg" />
                </div>
                <p className={style.commonCardHeading}>
                  Alignment with Organizational Goals
                </p>
                <ul>
                  <li className={style.commontext}>
                    Ensure understanding of role's contribution.
                  </li>
                  <li className={style.commontext}>
                    Verify alignment with company mission and values.
                  </li>
                </ul>
              </div>
              <div className={style.commonCard}>
                <div className={style.frame2}>
                  <img src="/images/landing/Layer_1.svg" />
                </div>
                <p className={style.commonCardHeading}>
                  Alignment with Organizational Goals
                </p>
                <ul>
                  <li className={style.commontext}>
                    Ensure understanding of role's contribution.
                  </li>
                  <li className={style.commontext}>
                    Verify alignment with company mission and values.
                  </li>
                </ul>
              </div>
              <div className={style.commonCard}>
                <div className={style.frame2}>
                  <img src="/images/landing/Layer_1.svg" />
                </div>
                <p className={style.commonCardHeading}>
                  Alignment with Organizational Goals
                </p>
                <ul>
                  <li className={style.commontext}>
                    Ensure understanding of role's contribution.
                  </li>
                  <li className={style.commontext}>
                    Verify alignment with company mission and values.
                  </li>
                </ul>
              </div>
              <div className={style.commonCard}>
                <div className={style.frame2}>
                  <img src="/images/landing/Layer_1.svg" />
                </div>
                <p className={style.commonCardHeading}>
                  Alignment with Organizational Goals
                </p>
                <ul>
                  <li className={style.commontext}>
                    Ensure understanding of role's contribution.
                  </li>
                  <li className={style.commontext}>
                    Verify alignment with company mission and values.
                  </li>
                </ul>
              </div>
              <div className={style.commonCard}>
                <div className={style.frame2}>
                  <img src="/images/landing/Layer_1.svg" />
                </div>
                <p className={style.commonCardHeading}>
                  Alignment with Organizational Goals
                </p>
                <ul>
                  <li className={style.commontext}>
                    Ensure understanding of role's contribution.
                  </li>
                  <li className={style.commontext}>
                    Verify alignment with company mission and values.
                  </li>
                </ul>
              </div>
              <div className={style.commonCard}>
                <div className={style.frame2}>
                  <img src="/images/landing/Layer_1.svg" />
                </div>
                <p className={style.commonCardHeading}>
                  Alignment with Organizational Goals
                </p>
                <ul>
                  <li className={style.commontext}>
                    Ensure understanding of role's contribution.
                  </li>
                  <li className={style.commontext}>
                    Verify alignment with company mission and values.
                  </li>
                </ul>
              </div>
              <div className={style.commonCard}>
                <div className={style.frame2}>
                  <img src="/images/landing/Layer_1.svg" />
                </div>
                <p className={style.commonCardHeading}>
                  Alignment with Organizational Goals
                </p>
                <ul>
                  <li className={style.commontext}>
                    Ensure understanding of role's contribution.
                  </li>
                  <li className={style.commontext}>
                    Verify alignment with company mission and values.
                  </li>
                </ul>
              </div>
              <div className={style.commonCard}>
                <div className={style.frame2}>
                  <img src="/images/landing/Layer_1.svg" />
                </div>
                <p className={style.commonCardHeading}>
                  Alignment with Organizational Goals
                </p>
                <ul>
                  <li className={style.commontext}>
                    Ensure understanding of role's contribution.
                  </li>
                  <li className={style.commontext}>
                    Verify alignment with company mission and values.
                  </li>
                </ul>
              </div>
              <div className={style.commonCard}>
                <div className={style.frame2}>
                  <img src="/images/landing/Layer_1.svg" />
                </div>
                <p className={style.commonCardHeading}>
                  Alignment with Organizational Goals
                </p>
                <ul>
                  <li className={style.commontext}>
                    Ensure understanding of role's contribution.
                  </li>
                  <li className={style.commontext}>
                    Verify alignment with company mission and values.
                  </li>
                </ul>
              </div>
              <div className={style.commonCard}>
                <div className={style.frame2}>
                  <img src="/images/landing/Layer_1.svg" />
                </div>
                <p className={style.commonCardHeading}>
                  Alignment with Organizational Goals
                </p>
                <ul>
                  <li className={style.commontext}>
                    Ensure understanding of role's contribution.
                  </li>
                  <li className={style.commontext}>
                    Verify alignment with company mission and values.
                  </li>
                </ul>
              </div>
              <div className={style.commonCard}>
                <div className={style.frame2}>
                  <img src="/images/landing/Layer_1.svg" />
                </div>
                <p className={style.commonCardHeading}>
                  Alignment with Organizational Goals
                </p>
                <ul>
                  <li className={style.commontext}>
                    Ensure understanding of role's contribution.
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
        <div className={style.footerContainer}>
          <div className={style.footerWrapper}>
            <div className={style.footerContents}>
              <div className={style.whiteContainer}>
                <img src="/images/landing/white_logo.svg" />
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
