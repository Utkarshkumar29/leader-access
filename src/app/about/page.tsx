import Link from "next/link";
import style from "../../styles/leader.module.css";
import aboutStyle from "../../styles/about.module.css";
import Navbar from "@/components/navbar/page";
import resourceStyle from "../../styles/resource.module.css";
import Footer from "@/components/footer/page";

export default function About() {
  return (
    <div className={style.container}>
        <div className={style.wrapper}>

        {/*Navbar */}
        <Navbar/>

        {/*About Intro */}
        <div className={resourceStyle.container}>
          <div className={resourceStyle.wrapper}>
            <p>Your Trusted Partner in Executive Search and Talent Advisory</p>
            <p>Empowering Organizations with Strategic Talent Solutions</p>
        </div></div>

        {/*Intro */}
        <div className={aboutStyle.intro}>
            <div className={style.partnerHeadings}>
                <p className={style.partnerHeading}>Our Introduction</p>
            </div>
            <div className={aboutStyle.introDescription}>
                <img src="/images/about/intro_main.svg" alt="Error" className={aboutStyle.introImage}/>
                <p className={aboutStyle.description}>Welcome to Leaders Access, where talent meets opportunity. We are a leading executive search and talent advisory firm dedicated to helping organizations identify, attract, and retain top-tier talent that drives business success and innovation. With a commitment to excellence and a client-centric approach, we leverage our expertise, industry insights, and extensive network to deliver tailored solutions that exceed expectations. At Leaders Access, we believe that talent is the cornerstone of organizational success, and we are passionate about helping our clients build high-performing teams that fuel growth and achieve their strategic objectives.
                </p>        
            </div>  
        </div>

        {/*Choose */}
        <div className={aboutStyle.intro}>
            <div className={style.partnerHeadings}>
                <p className={style.partnerHeading}>Why Choose Us</p>
            </div>
            <div className={aboutStyle.whyChooseUs}>
                <div className={aboutStyle.chooseBlueCard}>
                    <div className={aboutStyle.chooseImgWrapper}>
                        <img src="/images/about/choose.svg"/>
                    </div>
                    <div>
                        <p>Unique Approach</p>
                        <p>We go beyond traditional search methods, leveraging cutting-edge technology and industry expertise to deliver unparalleled results.</p>
                    </div>
                </div>
                <div className={aboutStyle.commonBlueCard}>
                    <div className={aboutStyle.chooseImgWrapper}>
                        <img src="/images/about/choose.svg"/>
                    </div>
                    <div>
                        <p>Client Success</p>
                        <p>Our track record speaks for itself. With a proven history of successful placements and satisfied clients, we are the trusted partner you can count on.</p>
                    </div>
                </div>
                <div className={aboutStyle.commonBlueCard}>
                    <div className={aboutStyle.chooseImgWrapper}>
                        <img src="/images/about/choose.svg"/>
                    </div>
                    <div>
                        <p>Unique Approach</p>
                        <p>With a vast network spanning across regions and industries, we have the reach to connect you with top talent wherever they may be.</p>
                    </div>
                </div>
            </div>
        </div>

        {/*Client Success */}
        <div>
            <div className={style.partnerHeadings}>
                <p className={style.partnerHeading}>Client Success Stories</p>
            </div>
        </div>
        
        {/*Partners*/}
        <div className={style.partnerContainer}>
          <div className={style.partnerWrapper}>
            <div className={style.partnerHeadings}>
              <p className={style.partnerHeading}>Our Partners</p>
              <div className={style.arrowContainer}>
                <img src="/images/landing/leftArrow.svg" className="" />
                <img src="/images/landing/rightArrow.svg" className="" />
              </div>
            </div>
            <div className={style.partnerLogos}>
              <img src="/images/landing/birla.svg" alt="" className={style.heroImage}/>
              <img src="/images/landing/cred.svg" alt="" />
              <img src="/images/landing/paytm.svg" alt="" />
              <img src="/images/landing/payU.svg" alt="" />
              <img src="/images/landing/zopper.svg" alt="" />
            </div>
          </div>
        </div>

        {/*Client Testimonials */}
        <div className={style.positionContainer}>
          <div className={style.positionWrapper}>
            <div className={style.partnerHeadings}>
              <p className={style.partnerHeading}>Client Testimonials</p>
              <div className={style.arrowContainer}>
                <img src="/images/landing/leftArrow.svg" className="" />
                <img src="/images/landing/rightArrow.svg" className="" />
              </div>
            </div>
            <div className={style.positions}>
              <div className={style.clientCard}>
                <div className={style.invertImg}>
                  <img src="/images/landing/invertWhite.svg" />
                </div>
                <p className={style.clientDes}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo <span className={style.clientShow}>...Read more</span>
                </p>
                <div className={style.clientDescription}>
                  <p>Manish Taneja</p>
                  <p>Client</p>
                </div>
              </div>
              <div className={style.clientCard}>
                <div className={style.invertImg}>
                  <img src="/images/landing/invertWhite.svg" />
                </div>
                <p className={style.clientDes}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo <span className={style.clientShow}>...Read more</span>
                </p>
                <div className={style.clientDescription}>
                  <p>Manish Taneja</p>
                  <p>Client</p>
                </div>
              </div>
              <div className={style.clientCard}>
                <div className={style.invertImg}>
                  <img src="/images/landing/invertWhite.svg" />
                </div>
                <p className={style.clientDes}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo <span className={style.clientShow}>...Read more</span>
                </p>
                <div className={style.clientDescription}>
                  <p>Manish Taneja</p>
                  <p>Client</p>
                </div>
              </div>
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
