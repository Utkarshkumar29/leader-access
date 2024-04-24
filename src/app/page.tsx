"use client";
import React, { useEffect, useState } from "react";
import style from "../styles/leader.module.css";
import Navbar from "@/components/navbar/page";
import Image from "next/image";
import Footer from "@/components/footer/page";
import Link from "next/link";
import axios from "axios";
import PositionCard from "@/components/PositionCard/page";
import Approach_1 from "../../public/images/landing/Approach_1";
import Approach_2 from "../../public/images/landing/Approach_2";
import Approach_3 from "../../public/images/landing/Approach_3";
import Approach_4 from "../../public/images/landing/Approach_4";
import Approach_5 from "../../public/images/landing/Approach_5";
import Approach_6 from "../../public/images/landing/Approach_6";
import Approach_7 from "../../public/images/landing/Approach_7";
import Approach_8 from "../../public/images/landing/Approach_8";
import Approach_9 from "../../public/images/landing/Approach_9";
import Approach_10 from "../../public/images/landing/Approach_10";
import Approach_11 from "../../public/images/landing/Approach_11";

export default function Home() {
  interface JobItem {
    id: number;
    job_title: string;
    industry: string;
    location: string;
    min_experience: number;
    max_experience: number;
  }

  const [jobsList, setJobsList] = useState<JobItem[]>([]);

  const fetchJobs = async () => {
    try {
      const respose = await axios.get(
        "https://do.employeeforums.co.in/api/employer/job-post"
      );
      console.log(respose?.data);
      setJobsList(respose?.data);
    } catch (error) {
      console.log("Error getting jobs", error);
    }
  };

  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 3;

  useEffect(() => {
    console.log(startIndex);
  }, []);
  const showNextCards = () => {
    if (startIndex + cardsPerPage < jobsList.length) {
      setStartIndex(startIndex + cardsPerPage);
    }
  };

  const showPrevCards = () => {
    if (startIndex - cardsPerPage >= 0) {
      setStartIndex(startIndex - cardsPerPage);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const [isHovered, setIsHovered] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  const [selected, setSelected] = useState<number | null>(1);

  const handleAddClick = () => {
    setSelected((prevSelected) => {
      if (prevSelected !== null) {
        return prevSelected + 1;
      }
      return null;
    });
  };

  const handleRemoveClick = () => {
    setSelected((prevSelected) => {
      if (prevSelected !== null && prevSelected > 1) {
        return prevSelected - 1;
      }
      return null;
    });
  };

  const [serviceHovered, setServiceHovered] = useState<number | null>(null);

const handleServiceMouseEnter = (index: number) => {
    setServiceHovered(index);
};

const handleServiceMouseLeave = () => {
    setServiceHovered(null);
};
  
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
                <Image
                  src="/images/landing/leftArrow.svg"
                  alt="Error"
                  width={10}
                  height={10}
                />
                <Image
                  src="/images/landing/rightArrow.svg"
                  alt="Error"
                  width={10}
                  height={10}
                />
              </div>
            </div>
            <div className={style.partnerLogos}>
              <Image
                src="/images/landing/birla.svg"
                alt="Error"
                width={200}
                height={200}
              />
              <Image
                src="/images/landing/cred.svg"
                alt="Error"
                width={200}
                height={200}
              />
              <Image
                src="/images/landing/paytm.svg"
                alt="Error"
                width={200}
                height={200}
              />
              <Image
                src="/images/landing/payU.svg"
                alt="Error"
                width={200}
                height={200}
              />
              <Image
                src="/images/landing/zopper.svg"
                alt="Error"
                width={200}
                height={200}
              />
              {/*<Image
                src="/images/landing/niyogin.svg"
                alt="Error"
                width={200}
                height={200}
              />
              <Image
                src="/images/landing/safexpay.svg"
                alt="Error"
                width={200}
                height={200}
              />*/}
            </div>
          </div>
        </div>

        {/*Positions*/}
        <PositionCard />

        {/*Service*/}
        <div className={style.serviceContainer}>
          <div className={style.serviceWrapper}>
            <p className={style.partnerHeading}>Our Services</p>
            <div className={style.serviceCardContainer}>
              <div className={style.serviceCard} onMouseOver={()=>{handleServiceMouseEnter(0)}} onMouseLeave={()=>{handleServiceMouseLeave()}}>
                <Image
                    src="/images/landing/service1.svg"
                    alt="Error"
                    width={400}
                    height={300}
                />
                <p className={style.serviceCardHeading}>Executive Search</p>
                <p className={style.serviceCardDescription}>
                    Identify, attract, and retain top-tier executives who drive
                    business success and innovation.
                </p>
                {serviceHovered==0 && <div className={style.ReadMoreWrapper}><p className={style.readMore}>Read More</p></div>}
              </div>
              <div className={style.serviceCard} onMouseOver={()=>{handleServiceMouseEnter(1)}} onMouseLeave={()=>{handleServiceMouseLeave()}}>
                <Image
                  src="/images/landing/service2.svg"
                  alt="Error"
                  width={400}
                  height={300}
                />
                <p className={style.serviceCardHeading}>Executive Search</p>
                <p className={style.serviceCardDescription}>
                  Identify, attract, and retain top-tier executives who drive
                  business success and innovation.
                </p>
                {serviceHovered==1 && <div className={style.ReadMoreWrapper}><p className={style.readMore}>Read More</p></div>}
              </div>
              <div className={style.serviceCard} onMouseOver={()=>{handleServiceMouseEnter(2)}} onMouseLeave={()=>{handleServiceMouseLeave()}}>
                <Image
                  src="/images/landing/service3.svg"
                  alt="Error"
                  width={400}
                  height={300}
                />
                <p className={style.serviceCardHeading}>Executive Search</p>
                <p className={style.serviceCardDescription}>
                  Identify, attract, and retain top-tier executives who drive
                  business success and innovation.
                </p>
                {serviceHovered==2 && <div className={style.ReadMoreWrapper}><p className={style.readMore}>Read More</p></div>}
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
                <Image
                  src="/images/landing/smiling.svg"
                  alt="Error"
                  width={315}
                  height={500}
                />
                <div className={style.industriesCount}>
                  <p>30+ Industries</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className={style.lineSeparator}>
                <Image
                  src="/images/landing/industry2.svg"
                  alt="Error"
                  width={400}
                  height={300}
                />
                <Image
                  src="/images/landing/industry3.svg"
                  alt="Error"
                  width={400}
                  height={300}
                />
              </div>
              <div>
                <div className={style.industryScroll}>
                  <p className={style.scrollHeading}>Software Services</p>
                  <p>IT Services</p>
                  <p>Hardware, Storage & Peripherals</p>
                  <p>IOT & Embedded Technologies</p>
                  <p>Banks</p>
                  <p>Fin-tech</p>
                  <p>NBFC</p>
                  <p>Asset Management</p>
                  <p>Capital Markets</p>
                  <p>Logistics & Retail </p>
                  <p>Education & EdTech</p>
                  <p>FMCG / Consumer </p>
                  <p>E-Commerce</p>
                  <p>Media & Entertainment</p>
                  <p>Research & Analytics</p>
                  <p>Consulting</p>
                  <p>Travel & Hospitality</p>
                  <p>Automobile & Auto components</p>
                  <p>Medical Devices</p>
                  <p>Pharma & Life Sciences</p>
                  <p>Packaging & Printing</p>
                  <p>Chemical & Paints</p>
                  <p>Industrial & Capital Equipment</p>
                </div>
                <div className={style.exploreBtn}>
                  <Link href="/expertise" legacyBehavior>
                    <p>Explore All</p>
                  </Link>
                </div>
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
                <Image
                  src="/images/landing/leftArrow.svg"
                  alt="Error"
                  width={20}
                  height={20}
                  onClick={() => {
                    handleRemoveClick();
                  }}
                />
                <p>{selected}/12</p>
                <Image
                  src="/images/landing/rightArrow.svg"
                  alt="Error"
                  width={10}
                  height={10}
                  onClick={() => {
                    handleAddClick();
                  }}
                />
              </div>
            </div>
            <div className={style.ourApproachCardWrapper}>
              <div
                className={
                  selected == 1 ? style.approachCardOne : style.commonCard
                }
              >
                <div>
                  <Approach_1
                    className={selected === 1 ? style.frame : style.frame2}
                  />
                </div>
                <p
                  className={
                    selected == 1
                      ? style.approachCardHeading
                      : style.commonCardHeading
                  }
                >
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
              <div
                className={
                  selected == 2 ? style.approachCardOne : style.commonCard
                }
              >
                <div>
                  <Approach_2
                    className={selected === 2 ? style.frame1 : style.frame2}
                  />
                </div>
                <p
                  className={
                    selected == 2
                      ? style.approachCardHeading
                      : style.commonCardHeading
                  }
                >
                  Cultural Fit
                </p>
                <ul>
                  <li className={style.commontext}>
                    Assess compatibility with organizational culture.
                  </li>
                  <li className={style.commontext}>
                    Determine potential for team inspiration.
                  </li>
                </ul>
              </div>
              {/* Repeat for other approaches */}
              <div
                className={
                  selected === 3 ? style.approachCardOne : style.commonCard
                }
              >
                <div>
                <Approach_3
                    className={selected === 3 ? style.frame1 : style.frame2}
                  />
                </div>
                <p
                  className={
                    selected === 3
                      ? style.approachCardHeading
                      : style.commonCardHeading
                  }
                >
                  Leadership Skills and Experience
                </p>
                <ul>
                  <li className={style.commontext}>
                    Seek strong leadership qualities and relevant experience.
                  </li>
                  <li className={style.commontext}>
                    Prioritize strategic thinking ability.
                  </li>
                </ul>
              </div>

              <div
                className={
                  selected === 4 ? style.approachCardOne : style.commonCard
                }
              >
                <div>
                <Approach_4
                    className={selected === 4 ? style.frame1 : style.frame2}
                  />
                </div>
                <p
                  className={
                    selected === 4
                      ? style.approachCardHeading
                      : style.commonCardHeading
                  }
                >
                  Track Record of Success
                </p>
                <ul>
                  <li className={style.commontext}>
                    Evaluate past achievements and impact.
                  </li>
                  <li className={style.commontext}>
                    Consider performance in previous roles.
                  </li>
                </ul>
              </div>

              <div
                className={
                  selected === 5 ? style.approachCardOne : style.commonCard
                }
              >
                <div>
                <Approach_5
                    className={selected === 5 ? style.frame1 : style.frame2}
                  />
                </div>
                <p
                  className={
                    selected === 5
                      ? style.approachCardHeading
                      : style.commonCardHeading
                  }
                >
                  Emotional Intelligence
                </p>
                <ul>
                  <li className={style.commontext}>
                    Assess ability to manage emotions and build relationships.
                  </li>
                </ul>
              </div>

              <div
                className={
                  selected === 6 ? style.approachCardOne : style.commonCard
                }
              >
                <div>
                <Approach_6
                    className={selected === 6 ? style.frame1 : style.frame2}
                  />
                </div>
                <p
                  className={
                    selected === 6
                      ? style.approachCardHeading
                      : style.commonCardHeading
                  }
                >
                  Innovative Thinking
                </p>
                <ul>
                  <li className={style.commontext}>
                    Prioritize creativity, adaptability, and openness to change.
                  </li>
                  <li className={style.commontext}>
                    Look for candidates who drive growth through innovation.
                  </li>
                </ul>
              </div>

              <div
                className={
                  selected === 7 ? style.approachCardOne : style.commonCard
                }
              >
                <div>
                <Approach_7
                    className={selected === 7 ? style.frame1 : style.frame2}
                  />
                </div>
                <p
                  className={
                    selected === 7
                      ? style.approachCardHeading
                      : style.commonCardHeading
                  }
                >
                  Collaborative Skills
                </p>
                <ul>
                  <li className={style.commontext}>
                    Evaluate ability to work across teams and departments.
                  </li>
                  <li className={style.commontext}>
                    Assess capacity for stakeholder relationships.
                  </li>
                </ul>
              </div>

              <div
                className={
                  selected === 8 ? style.approachCardOne : style.commonCard
                }
              >
                <div>
                <Approach_8
                    className={selected === 8 ? style.frame1 : style.frame2}
                  />
                </div>
                <p
                  className={
                    selected === 8
                      ? style.approachCardHeading
                      : style.commonCardHeading
                  }
                >
                  Problem-Solving Ability
                </p>
                <ul>
                  <li className={style.commontext}>
                    Look for strong critical thinking skills.
                  </li>
                  <li className={style.commontext}>
                    Assess practical solution development.
                  </li>
                </ul>
              </div>

              <div
                className={
                  selected === 9 ? style.approachCardOne : style.commonCard
                }
              >
                <div>
                <Approach_9
                    className={selected === 9 ? style.frame1 : style.frame2}
                  />
                </div>
                <p
                  className={
                    selected === 9
                      ? style.approachCardHeading
                      : style.commonCardHeading
                  }
                >
                  Long-Term Vision
                </p>
                <ul>
                  <li className={style.commontext}>
                    Seek clear vision and commitment to long-term success.
                  </li>
                  <li className={style.commontext}>
                    Assess ability to inspire others.
                  </li>
                </ul>
              </div>

              <div
                className={
                  selected === 10 ? style.approachCardOne : style.commonCard
                }
              >
                <div>
                <Approach_10
                    className={selected === 10 ? style.frame1 : style.frame2}
                  />
                </div>
                <p
                  className={
                    selected === 10
                      ? style.approachCardHeading
                      : style.commonCardHeading
                  }
                >
                  Reference Checks
                </p>
                <ul>
                  <li className={style.commontext}>
                    Verify qualifications and performance.
                  </li>
                  <li className={style.commontext}>
                    Confirm suitability for leadership.
                  </li>
                </ul>
              </div>

              <div
                className={
                  selected === 11 ? style.approachCardOne : style.commonCard
                }
              >
                <div>
                <Approach_11
                    className={selected ===11 ? style.frame1 : style.frame2}
                  />
                </div>
                <p
                  className={
                    selected === 11
                      ? style.approachCardHeading
                      : style.commonCardHeading
                  }
                >
                  Offer Negotiation
                </p>
                <ul>
                  <li className={style.commontext}>
                    Extend formal job offer with compensation and benefits.
                  </li>
                  <li className={style.commontext}>
                    Finalize start date and onboarding details.
                  </li>
                </ul>
              </div>

              <div
                className={
                  selected === 12 ? style.approachCardOne : style.commonCard
                }
              >
                <div className="flex items-center justify-center">
                <Approach_11
                    className={selected === 12 ? style.frame1 : style.frame2}
                  />
                </div>
                <p
                  className={
                    selected === 12
                      ? style.approachCardHeading
                      : style.commonCardHeading
                  }
                >
                  Onboarding
                </p>
                <ul>
                  <li className={style.commontext}>
                    Facilitate smooth transition with orientation and training.
                  </li>
                  <li className={style.commontext}>
                    Introduce to key stakeholders.
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
                <Image
                  src="/images/landing/leftArrow.svg"
                  alt="Error"
                  width={20}
                  height={20}
                />
                <Image
                  src="/images/landing/rightArrow.svg"
                  alt="Error"
                  width={10}
                  height={10}
                />
              </div>
            </div>
            <div className={style.scrollCardWrapper}>
              <div
                className={
                  isHovered == 0 ? style.clientCard : style.commonClientCard
                }
                onMouseOver={() => {
                  handleMouseEnter(0);
                }}
                onMouseLeave={() => handleMouseLeave()}
              >
                <div className={style.invertImage}>
                  {isHovered == 0 ? (
                    <Image
                      src="/images/landing/invertWhite.svg"
                      alt="Error"
                      width={2}
                      height={2}
                      style={{ width: "50px" }}
                    />
                  ) : (
                    <Image
                      src="/images/landing/invertBlue.svg"
                      alt="Error"
                      width={2}
                      height={2}
                      style={{ width: "50px" }}
                    />
                  )}
                </div>
                <p
                  className={
                    isHovered == 0 ? style.clientDes : style.commonClientDes
                  }
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo{" "}
                  <span
                    className={
                      isHovered == 0 ? style.clientShow : style.commonClientShow
                    }
                  >
                    ...Read more
                  </span>
                </p>
                <div
                  className={
                    isHovered == 0
                      ? style.clientDescription
                      : style.commonClientDescription
                  }
                >
                  <div>Manish Taneja</div>
                  <div>Client</div>
                </div>
              </div>
              <div
                className={
                  isHovered == 1 ? style.clientCard : style.commonClientCard
                }
                onMouseOver={() => {
                  handleMouseEnter(1);
                }}
                onMouseLeave={() => handleMouseLeave()}
              >
                <div className={style.invertImage}>
                  {isHovered == 1 ? (
                    <Image
                      src="/images/landing/invertWhite.svg"
                      alt="Error"
                      width={2}
                      height={2}
                      style={{ width: "50px" }}
                    />
                  ) : (
                    <Image
                      src="/images/landing/invertBlue.svg"
                      alt="Error"
                      width={2}
                      height={2}
                      style={{ width: "50px" }}
                    />
                  )}
                </div>
                <p
                  className={
                    isHovered == 1 ? style.clientDes : style.commonClientDes
                  }
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo{" "}
                  <span
                    className={
                      isHovered == 1 ? style.clientShow : style.commonClientShow
                    }
                  >
                    ...Read more
                  </span>
                </p>
                <div
                  className={
                    isHovered == 1
                      ? style.clientDescription
                      : style.commonClientDescription
                  }
                >
                  <div>Manish Taneja</div>
                  <div>Client</div>
                </div>
              </div>
              <div
                className={
                  isHovered == 2 ? style.clientCard : style.commonClientCard
                }
                onMouseOver={() => {
                  handleMouseEnter(2);
                }}
                onMouseLeave={() => handleMouseLeave()}
              >
                <div className={style.invertImage}>
                  {isHovered == 2 ? (
                    <Image
                      src="/images/landing/invertWhite.svg"
                      alt="Error"
                      width={2}
                      height={2}
                      style={{ width: "50px" }}
                    />
                  ) : (
                    <Image
                      src="/images/landing/invertBlue.svg"
                      alt="Error"
                      width={2}
                      height={2}
                      style={{ width: "50px" }}
                    />
                  )}
                </div>
                <p
                  className={
                    isHovered == 2 ? style.clientDes : style.commonClientDes
                  }
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo{" "}
                  <span
                    className={
                      isHovered == 2 ? style.clientShow : style.commonClientShow
                    }
                  >
                    ...Read more
                  </span>
                </p>
                <div
                  className={
                    isHovered == 2
                      ? style.clientDescription
                      : style.commonClientDescription
                  }
                >
                  <div>Manish Taneja</div>
                  <div>Client</div>
                </div>
              </div>
            </div>
            <Link href="/viewAll" legacyBehavior>
              <div className={style.buttonContainer}>
                <p className={style.positionsView}>View All</p>
              </div>
            </Link>
          </div>
        </div>

        {/*Case Studies */}
        <div className={style.serviceContainer}>
          <div className={style.serviceWrapper}>
            <p className={style.partnerHeading}>Case Studies</p>
            <div className={style.serviceCardContainer}>
              <div className={style.serviceCard}>
                <Image
                  src="/images/landing/case.svg"
                  alt="Error"
                  width={400}
                  height={300}
                />
                <p className={style.serviceCardHeading}>Executive Search</p>
                <p className={style.serviceCardDescription}>
                  Identify, attract, and retain top-tier executives who drive
                  business success and innovation.
                </p>
              </div>
              <div className={style.serviceCard}>
                <Image
                  src="/images/landing/case.svg"
                  alt="Error"
                  width={400}
                  height={300}
                />
                <p className={style.serviceCardHeading}>Talent Advisory</p>
                <p className={style.serviceCardDescription}>
                  Optimize your talent acquisition and retention strategies with
                  our comprehensive talent advisory solutions.
                </p>
              </div>
              <div className={style.serviceCard}>
                <Image
                  src="/images/landing/case.svg"
                  alt="Error"
                  width={400}
                  height={300}
                />
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
              <Link href="/resources/caseStudies" legacyBehavior>
                <p className={style.positionsView}>View All</p>
              </Link>
            </div>
          </div>
        </div>

        {/*Insights */}
        <div className={style.insightsContainer}>
          <div className={style.insightsWrapper}>
            <p className={style.partnerHeading}>Insights</p>
            <div className={style.insightsCardContainer}>
              <div className={style.insightsCard}>
                <Image
                  src="/images/landing/insights1.svg"
                  alt="Error"
                  width={400}
                  height={300}
                />
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
                <Image
                  src="/images/landing/insights2.svg"
                  alt="Error"
                  width={400}
                  height={300}
                />
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
                <Image
                  src="/images/landing/insights3.svg"
                  alt="Error"
                  width={400}
                  height={300}
                />
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
              <p className={style.positionsView}>
                <Link href="/resources" legacyBehavior>
                  View All
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/*Get in Touch */}
        <div className={style.touchContainer}>
          <div className={style.touchWrapper}>
            <div>Ready to elevate your organization with top-tier talent ?</div>
            <div>Contact us today to schedule a consultation.</div>
            <div className={style.darkBtn}>
              <Link href="/contact" legacyBehavior>
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/*Footer */}
        <Footer />
      </div>
    </div>
  );
}
