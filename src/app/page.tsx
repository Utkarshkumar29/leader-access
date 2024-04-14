"use client";
import React, { useState } from "react";
import style from "../styles/leader.module.css";
import Link from "next/link";
import Navbar from "@/components/navbar/page";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        {/*Navbar */}
        <Navbar />

        {/*Hero Section */}
        <div className={style.heroImageContainer}>
          <img
            src="/images/landing/hero_section.svg"
            className={style.heroImage}
          />
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

        {/*Positions*/}
        <div className={style.positionContainer}>
          <div className={style.positionWrapper}>
            <div className={style.partnerHeadings}>
              <p className={style.partnerHeading}>Positions We Are Hiring </p>
              <div className={style.arrowContainer}>
                <img src="/images/landing/leftArrow.svg" className="" />
                <img src="/images/landing/rightArrow.svg" className="" />
              </div>
            </div>
            <div className={style.positions}>
              <img src="/images/landing/posi_manager.svg" alt="" />
              <img src="/images/landing/posi_chief.svg" className="" />
              <img src="/images/landing/posi_tech.svg" className="" />
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
                onMouseOver={() => {
                  setIsHovered(true);
                }}
                onMouseOut={() => setIsHovered(false)}
              >
                <img src="/images/landing/service1.svg" />
                <p className={style.serviceCardHeading}>Executive Search</p>
                <p className={style.serviceCardDescription}>
                  Identify, attract, and retain top-tier executives who drive
                  business success and innovation.
                </p>
                {isHovered && <p className={style.hoveredBtn}>View All</p>}
              </div>
              <div className={style.serviceCard}>
                <img src="/images/landing/service2.svg" />
                <p className={style.serviceCardHeading}>Executive Search</p>
                <p className={style.serviceCardDescription}>
                  Identify, attract, and retain top-tier executives who drive
                  business success and innovation.
                </p>
                {isHovered && <p className={style.positionsView}>View All</p>}
              </div>
              <div className={style.serviceCard}>
                <img src="/images/landing/service3.svg" />
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
              <div>
                <img src="/images/landing/industry1.svg" />
                <div className={style.industriesCount}>
                  <p>30+ Industries</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div className={style.lineSeparator}>
                <img src="/images/landing/industry2.svg" />
                <img src="/images/landing/industry3.svg" />
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
            <div className={style.scrollCardWrapper}>
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
                  <div>Manish Taneja</div>
                  <div>Client</div>
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
                  <div>Manish Taneja</div>
                  <div>Client</div>
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
                <img src="/images/landing/case.svg" />
                <p className={style.serviceCardHeading}>Executive Search</p>
                <p className={style.serviceCardDescription}>
                  Identify, attract, and retain top-tier executives who drive
                  business success and innovation.
                </p>
              </div>
              <div className={style.serviceCard}>
                <img src="/images/landing/case.svg" />
                <p className={style.serviceCardHeading}>Talent Advisory</p>
                <p className={style.serviceCardDescription}>
                  Optimize your talent acquisition and retention strategies with
                  our comprehensive talent advisory solutions.
                </p>
              </div>
              <div className={style.serviceCard}>
                <img src="/images/landing/case.svg" />
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
                <img src="/images/landing/insights1.svg" />
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
                <img src="/images/landing/insights2.svg" />
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
                <img src="/images/landing/insights3.svg" />
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
        <div className={style.footerContainer}>
            <div className={style.footerWrapper}>
                <div className={style.footerContents}>
                    <div className={style.whiteContainer}>
                        <img src="/images/landing/white_logo.svg" />
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
      </div>
    </div>
  );
}
