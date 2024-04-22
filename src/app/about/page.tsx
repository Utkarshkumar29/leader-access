'use client'
import Link from "next/link";
import style from "../../styles/leader.module.css";
import aboutStyle from "../../styles/about.module.css";
import Navbar from "@/components/navbar/page";
import resourceStyle from "../../styles/resource.module.css";
import Footer from "@/components/footer/page";
import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [isHovered,setIsHovered]=useState(false)
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
                <Image src="/images/about/intro_main.svg" alt="Error" className={aboutStyle.introImage} width={1000} height={1000}/>
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
                        <Image src="/images/about/choose.svg" alt="Error" width={50} height={50}/>
                    </div>
                    <div>
                        <p>Unique Approach</p>
                        <p>We go beyond traditional search methods, leveraging cutting-edge technology and industry expertise to deliver unparalleled results.</p>
                    </div>
                </div>
                <div className={aboutStyle.commonBlueCard}>
                    <div className={aboutStyle.chooseImgWrapper}>
                        <Image src="/images/about/choose.svg"alt="Error" width={50} height={50}/>
                    </div>
                    <div>
                        <p>Client Success</p>
                        <p>Our track record speaks for itself. With a proven history of successful placements and satisfied clients, we are the trusted partner you can count on.</p>
                    </div>
                </div>
                <div className={aboutStyle.commonBlueCard}>
                    <div className={aboutStyle.chooseImgWrapper}>
                        <Image src="/images/about/choose.svg"alt="Error" width={50} height={50}/>
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
              <Image src="/images/landing/leftArrow.svg" className="" alt="Error" width={20} height={20}/>
              <Image src="/images/landing/leftArrow.svg" className="" alt="Error" width={20} height={20}/>
              </div>
            </div>
            <div className={style.partnerLogos}>
            <Image src="/images/landing/birla.svg" alt="Error" width={200} height={150}/>
              <Image src="/images/landing/cred.svg" alt="Error" width={200} height={150}/>
              <Image src="/images/landing/paytm.svg" alt="Error" width={200} height={150}/>
              <Image src="/images/landing/payU.svg" alt="Error" width={200} height={150}/>
              <Image src="/images/landing/zopper.svg" alt="Error" width={200} height={150}/>
            </div>
          </div>
        </div>

        {/*Client Testimonials */}
        <div className={style.positionContainer}>
          <div className={style.positionWrapper}>
            <div className={style.partnerHeadings}>
              <p className={style.partnerHeading}>Client Testimonials</p>
              <div className={style.arrowContainer}>
                <Image src="/images/landing/leftArrow.svg" alt="Error" width={20} height={20}/>
                <Image src="/images/landing/RightArrow.svg" alt="Error" width={20} height={20}/>
              </div>
            </div>
            <div className={style.scrollCardWrapper}>
              <div className={isHovered ? style.clientCard : style.commonClientCard} onMouseOver={()=>{setIsHovered(true)}} onMouseLeave={()=>setIsHovered(false)}>
                <div className={style.invertImage}>
                  {isHovered ? <Image src="/images/landing/invertWhite.svg"alt="Error" width={2} height={2} style={{width:"50px"}}/> : <Image src="/images/landing/invertBlue.svg"alt="Error" width={2} height={2} style={{width:"50px"}}/>}
                </div>
                <p className={isHovered ? style.clientDes:style.commonClientDes}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo <span className={isHovered ? style.clientShow : style.commonClientShow}>...Read more</span>
                </p>
                <div className={isHovered ? style.clientDescription : style.commonClientDescription}>
                  <div>Manish Taneja</div>
                  <div>Client</div>
                </div>
              </div>
              <div className={isHovered ? style.clientCard : style.commonClientCard} onMouseOver={()=>{setIsHovered(true)}} onMouseLeave={()=>setIsHovered(false)}>
                <div className={style.invertImage}>
                  <Image src="/images/landing/invertWhite.svg" alt="Error" width={20} height={20} style={{width:"50px"}}/>
                </div>
                <p className={isHovered ? style.clientDes:style.commonClientDes}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo <span className={style.clientShow}>...Read more</span>
                </p>
                <div className={style.clientDescription}>
                  <div>Manish Taneja</div>
                  <div>Client</div>
                </div>
              </div>
              <div className={isHovered ? style.clientCard : style.commonClientCard} onMouseOver={()=>{setIsHovered(true)}} onMouseLeave={()=>setIsHovered(false)}>
                <div className={style.invertImage}>
                  <Image src="/images/landing/invertWhite.svg" alt="Error" width={20} height={20} style={{width:"50px"}}/>
                </div>
                <p className={isHovered ? style.clientDes:style.commonClientDes}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo <span className={style.clientShow}>...Read more</span>
                </p>
                <div className={style.clientDescription}>
                  <div>Manish Taneja</div>
                  <div>Client</div>
                </div>
              </div>
            </div>
            <Link href="/viewAll">
            <div className={style.buttonContainer}>
              <p className={style.positionsView}>View All</p>
            </div>
            </Link>
          </div>
        </div>


        {/*Footer */}
        <Footer/>

      </div>
    </div>
  );
}
