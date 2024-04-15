import React from "react";
import style from "../styles/leader.module.css";
import Navbar from "@/components/navbar/page";
import Image from "next/image";
import Footer from "@/components/footer/page";

export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        {/*Navbar */}
        <Navbar />

        {/*Hero Section */}
        <div className={style.heroImageContainer}>
          <div className={style.imageWrapper}>
            <Image
              src="/images/landing/hero_section.svg"
              alt="Error"
              className={style.heroImage}
              width={1084}
              height={720}
            />
          </div>
        </div>

        {/*Partners*/}
        <div className={style.partnerContainer}>
          <div className={style.partnerWrapper}>
            <div className={style.partnerHeadings}>
              <p className={style.partnerHeading}>Our Partners</p>
              <div className={style.arrowContainer}>
                <Image src="/images/landing/leftArrow.svg" alt="Error" width={10} height={10}/>
                <Image src="/images/landing/RightArrow.svg" alt="Error" width={10} height={10}/>
              </div>
            </div>
            <div className={style.partnerLogos}>
              <Image src="/images/landing/birla.svg" alt="Error" width={200} height={200}/>
              <Image src="/images/landing/cred.svg" alt="Error" width={200} height={200}/>
              <Image src="/images/landing/paytm.svg" alt="Error" width={200} height={200}/>
              <Image src="/images/landing/payU.svg" alt="Error" width={200} height={200}/>
              <Image src="/images/landing/zopper.svg" alt="Error" width={200} height={200}/>
            </div>
          </div>
        </div>

        {/*Positions*/}
        <div className={style.positionContainer}>
          <div className={style.positionWrapper}>
            <div className={style.partnerHeadings}>
              <p className={style.partnerHeading}>Positions We Are Hiring </p>
              <div className={style.arrowContainer}>
              <Image src="/images/landing/leftArrow.svg" alt="Error" width={20} height={20}/>
              <Image src="/images/landing/RightArrow.svg" alt="Error" width={20} height={20}/>
              </div>
            </div>
            <div className={style.positions}>
              <Image src="/images/landing/posi_manager.svg" alt="error" width={400} height={300}/>
              <Image src="/images/landing/posi_chief.svg" alt="Errro" width={400} height={300}/>
              <Image src="/images/landing/posi_tech.svg" alt="Error" width={400} height={300}/>
            </div>
            <div className={style.buttonContainer}>
              <p className={style.positionsView}>View All</p>
            </div>
          </div>
        </div>

        {/*Service*/}
        <div className={style.serviceContainer}>
          <div className={style.serviceWrapper}>
            <p className={style.partnerHeading}>Our Services</p>
            <div className={style.serviceCardContainer}>
              <div
                className={style.serviceCard}
              >
                <Image src="/images/landing/service1.svg" alt="Error" width={400} height={300}/>
                <p className={style.serviceCardHeading}>Executive Search</p>
                <p className={style.serviceCardDescription}>
                  Identify, attract, and retain top-tier executives who drive
                  business success and innovation.
                </p>
              </div>
              <div className={style.serviceCard}>
                <Image src="/images/landing/service2.svg" alt="Error" width={400} height={300}/>
                <p className={style.serviceCardHeading}>Executive Search</p>
                <p className={style.serviceCardDescription}>
                  Identify, attract, and retain top-tier executives who drive
                  business success and innovation.
                </p>
                {isHovered && <p className={style.positionsView}>View All</p>}
              </div>
              <div className={style.serviceCard}>
                <Image src="/images/landing/service3.svg" alt="Error" width={400} height={300}/>
                <p className={style.serviceCardHeading}>Executive Search</p>
                <p className={style.serviceCardDescription}>
                  Identify, attract, and retain top-tier executives who drive
                  business success and innovation.
                </p>
                {isHovered && <p className={style.positionsView}>View All</p>}
              </div>
            </div>
          </div>
        </div>

        {/*Industries WE server */}
        <div className={style.industryContainer}>
          <div className={style.industryWrapper}>
            <p className={style.partnerHeading}>Industries We Serve</p>
            <div className={style.industriesCards}>
              <div className={style.box}>
                <Image src="/images/landing/smiling.svg" alt="Error" width={315} height={500}/>
                <div className={style.industriesCount}>
                  <p>30+ Industries</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div className={style.lineSeparator}>
                <Image src="/images/landing/industry2.svg" alt="Error" width={400} height={300}/>
                <Image src="/images/landing/industry3.svg" alt="Error" width={400} height={300}/>
              </div>
              <div className={style.industryScroll}>
                <p className={style.scrollHeading}>Software Services</p>
                <p>IT Services</p>
                <p>Hardware, Storage & Peripherals</p>
                <p>IOT & Embedded Technologies</p>
                <p>Banks</p>
                <p>Fin-tech</p>
                <p>NBFC</p>
                <p>Insurance</p>
                <p>Insurance</p>
                <p>Insurance</p>
                <p>Insurance</p>
                <p>Insurance</p>
                <p>Insurance</p>
              </div>
            </div>
          </div>
        </div>

        {/*Our Approach */}
        <div className={style.approachContainer}>
          <div className={style.approachWrapper}>
            <div className={style.partnerHeadings}>
              <p className={style.partnerHeading}>Our Unique Approach</p>
              <div className={style.arrowContainer}>
              <Image src="/images/landing/leftArrow.svg" alt="Error" width={20} height={20}/>
                <p>1/12</p>
                <Image src="/images/landing/RightArrow.svg" alt="Error" width={20} height={20}/>
              </div>
            </div>
            <div className={style.ourApproachCardWrapper}>
              <div className={style.approachCardOne}>
                <div className={style.frame}>
                  <Image src="/images/landing/Frame 1.svg" alt="Error" width={50} height={50} className={style.image}/>
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
              <div className={style.clientCard}>
                <div className={style.invertImage}>
                  <Image src="/images/landing/invertWhite.svg"alt="Error" width={2} height={2} style={{width:"50px"}}/>
                </div>
                <p className={style.clientDes}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo <span className={style.clientShow}>...Read more</span>
                </p>
                <div className={style.clientDescription}>
                  <div>Manish Taneja</div>
                  <div>Client</div>
                </div>
              </div>
              <div className={style.clientCard}>
                <div className={style.invertImage}>
                  <Image src="/images/landing/invertWhite.svg" alt="Error" width={20} height={20} style={{width:"50px"}}/>
                </div>
                <p className={style.clientDes}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo <span className={style.clientShow}>...Read more</span>
                </p>
                <div className={style.clientDescription}>
                  <div>Manish Taneja</div>
                  <div>Client</div>
                </div>
              </div>
              <div className={style.clientCard}>
                <div className={style.invertImage}>
                  <Image src="/images/landing/invertWhite.svg" alt="Error" width={20} height={20} style={{width:"50px"}}/>
                </div>
                <p className={style.clientDes}>
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
            <div className={style.buttonContainer}>
              <p className={style.positionsView}>View All</p>
            </div>
          </div>
        </div>

        {/*Case Studies */}
        <div className={style.serviceContainer}>
          <div className={style.serviceWrapper}>
            <p className={style.partnerHeading}>Case Studies</p>
            <div className={style.serviceCardContainer}>
              <div
                className={style.serviceCard}
                onMouseOver={() => {
                  setIsHovered(true);
                }}
                onMouseOut={() => setIsHovered(false)}
              >
                <Image src="/images/landing/case.svg" alt="Error" width={400} height={300}/>
                <p className={style.serviceCardHeading}>Executive Search</p>
                <p className={style.serviceCardDescription}>
                  Identify, attract, and retain top-tier executives who drive
                  business success and innovation.
                </p>
              </div>
              <div className={style.serviceCard}>
                <Image src="/images/landing/case.svg" alt="Error" width={400} height={300}/>
                <p className={style.serviceCardHeading}>Talent Advisory</p>
                <p className={style.serviceCardDescription}>
                  Optimize your talent acquisition and retention strategies with
                  our comprehensive talent advisory solutions.
                </p>
              </div>
              <div className={style.serviceCard}>
                <Image src="/images/landing/case.svg" alt="Error" width={400} height={300}/>
                <p className={style.serviceCardHeading}>
                  Leadership Development
                </p>
                <p className={style.serviceCardDescription}>
                  Empower leaders to reach their full potential and drive
                  organizational growth with our customized leadership
                  development programs.
                </p>
              </div>
            </div>
            <div className={style.buttonContainer}>
              <p className={style.positionsView}>View All</p>
            </div>
          </div>
        </div>

        {/*Insights */}
        <div className={style.insightsContainer}>
          <div className={style.insightsWrapper}>
            <p className={style.partnerHeading}>Insights</p>
            <div className={style.insightsCardContainer}>
              <div
                className={style.insightsCard}
                onMouseOver={() => {
                  setIsHovered(true);
                }}
                onMouseOut={() => setIsHovered(false)}
              >
                <Image src="/images/landing/insights1.svg" alt="Error" width={400} height={300}/>
                <p className={style.insightsCardHeading}>
                  In UK Retail, a Surge in Female CEOs
                </p>
                <p className={style.insightsCardDescription}>
                  Women now account for 35% of retail CEOs in Britain. Will the
                  ...
                </p>
                <p>March 29, 2024</p>
              </div>
              <div className={style.insightsCard}>
                <Image src="/images/landing/insights2.svg" alt="Error" width={400} height={300}/>
                <p className={style.insightsCardHeading}>
                  5 Traits CEO and Astronauts Share
                </p>
                <p className={style.insightsCardDescription}>
                  As NASA begins the recruiting process for its next class of
                  ...
                </p>
                <p>March 29, 2024</p>
              </div>
              <div className={style.insightsCard}>
                <Image src="/images/landing/insights3.svg" alt="Error" width={400} height={300}/>
                <p className={style.insightsCardHeading}>
                  Performance Reviews: A Dreaded or Welcome Return?
                </p>
                <p className={style.insightsCardDescription}>
                  Identify, attract, and retain top-tier executives who drive
                  business ...
                </p>
                <p>March 29, 2024</p>
              </div>
            </div>
            <div className={style.buttonContainer}>
              <p className={style.positionsView}>View All</p>
            </div>
          </div>
        </div>

        {/*Get in Touch */}
        <div className={style.touchContainer}>
          <div className={style.touchWrapper}>
            <div>Ready to elevate your organization with top-tier talent ?</div>
            <div>Contact us today to schedule a consultation.</div>
            <div className={style.darkBtn}>Get in Touch</div>
          </div>
        </div>

        {/*Footer */}
        <Footer/>
      </div>
    </div>
  );
}