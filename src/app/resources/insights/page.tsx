import Link from "next/link";
import style from "../../../styles/leader.module.css";
import aboutStyle from "../../../styles/about.module.css";
import expertStyle from "../../../styles/expertise.module.css";
import resourceStyle from "../../../styles/resource.module.css";
import Navbar from "@/components/navbar/page";
import Image from "next/image";
import Footer from "@/components/footer/page";

export default function Insights() {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        {/*Navbar */}
        <Navbar/>

        {/*Resource Hero Section */}
        <div className={resourceStyle.heroSection}>
          <div className={resourceStyle.resourceHeroImage}>
            <Image src="/images/landing/Hero Section.svg" alt="Error"/>
          </div>
          <div className={resourceStyle.paraContainer}>
            <div className={resourceStyle.date}>March 29, 2024</div>
            <div className={resourceStyle.paraWrapper}>
              <div>
                <p>
                  It was a goal set long ago, one that has been accomplished
                  impressively. In 2010, British financier Baroness Helena
                  Morrissey founded the 30% Club, with the objective of placing
                  women in at least 30% of board seats of the UK&apos;s largest
                  public companies—those in the FTSE 100 stock index. That was
                  achieved by 2018.
                </p>
              </div>
              <div>
                <p>
                  That change has apparently filtered down to the corner
                  office—at least in one particular sector: retail. Last year,
                  women accounted for 35% of new CEO appointments at retail
                  companies, the highest ever, according to new report from Korn
                  Ferry. That&apos;s up from 5% in 2012. &quot;Adding women CEOs has been
                  a constant theme of the last couple of years,&quot; says Sarah Lim,
                  Korn Ferry&apos;s managing director of the Consumer Board and CEO
                  Services practice and author of the report.
                </p>
              </div>
              <div>
                <p>
                  These changes are happening now because of a confluence of
                  events last year. Almost half the CEO slots that switched in
                  2023 did so due to disappointing profits, according to the KF
                  report. Other reasons included ownership changes, family
                  transitions, or retirements. However, that led to almost half
                  the new appointments in luxury/fashion businesses, including
                  department stores. That likely accounts for why a larger than
                  usual portion of the new CEOs were women, Lim says. &ldquo;Fashion
                  tends to attract more women than DIY,&rdquo; she says.
                </p>
              </div>
              <div>
                <p>
                  Still, experts warn that more female representation in the
                  corner office won&apos;t happen overnight. The pipeline of
                  potential CEO candidates tends to develop over the course of
                  decades, as budding executives need time and mentoring to get
                  experience in multiple roles across the business, says Donna
                  Herdsman, a Korn Ferry senior client partner and head of
                  diversity, equity, and inclusion for EMEA in London. &ldquo;These
                  high-potential candidates need opportunities to demonstrate
                  what they can achieve,&rdquo; she says.
                </p>
              </div>
              <div>
                <p>
                  Which means, of course, that retailers need to get more women
                  in the pipeline. If more men are hired from business schools
                  or colleges, then the odds will be stacked against women. One
                  part of the solution is to make a given company more
                  attractive to women, for instance, by reducing barriers to
                  their hiring, says Stuart Richards, Korn Ferry&apos;s sector
                  leader, consumer products in the UK and EMEA. Employers might
                  consider skills-based recruitment instead of hiring based on
                  graduating from certain top colleges, Richards says. &ldquo;Skills
                  tell employers whether people can fundamentally do the job,&rdquo;
                  he says.
                </p>
              </div>
              <div>
                <p>
                  Herdsman says it&apos;s important for women to have so-called
                  sponsorship from a senior staff member to succeed. Such a
                  sponsor can advise the individual on which experiences or
                  roles to pursue. Perhaps most importantly, a mentor can help
                  rising stars avoid trouble. &ldquo;Even if you make a mistake that
                  anyone could make, you need support,&rdquo; she says.
                </p>
              </div>
              <div>
                <p>
                  Ultimately, CEO choices rest with the board of directors. When
                  the lead independent director and the senior independent
                  director become women, the pendulum swings toward female CEO
                  candidates, Lim says. &ldquo;It becomes more natural for the board
                  to consider women,&rdquo; she says. &ldquo;It happens over time.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*Insights */}
        <div className={style.insightsContainer}>
          <div className={style.insightsWrapper} style={{backgroundColor:"#EBEEF2"}}>
            <p className={style.partnerHeading}>Read More Insights</p>
            <div className={style.insightsCardContainer}>
              <div
                className={style.insightsCard}
                style={{backgroundColor:"white"}}
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
              <div className={style.insightsCard} style={{backgroundColor:"white"}}>
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
              <div className={style.insightsCard} style={{backgroundColor:"white"}}>
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

        {/*Footer */}
        <Footer/>

      </div>
    </div>
  );
}
