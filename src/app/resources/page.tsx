import Link from "next/link";
import style from "../../styles/leader.module.css";
import aboutStyle from "../../styles/about.module.css";
import expertStyle from "../../styles/expertise.module.css";
import resourceStyle from "../../styles/resource.module.css";
import Navbar from "@/components/navbar/page";
import Image from "next/image";
import Footer from "@/components/footer/page";

export default function Resources() {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        {/*Navbar */}
        <Navbar/>

        <div className={resourceStyle.container}>
          <div className={resourceStyle.wrapper}>
            <p>Empowering Leaders.</p>
            <p>Building Better Teams.</p>
          </div>
        </div>

        {/*Insights */}
        <div className={style.insightsContainer}>
          <div className={style.insightsWrapper}>
            <p className={style.partnerHeading}>Insights</p>
            <div className={resourceStyle.resourceCardContainer}>
              
              <div className={style.insightsCard} style={{backgroundColor:"#EBEEF2"}}>
              <Link href="/resources/insights">
                <Image src="/images/landing/insights1.svg" alt="Error" width={400} height={300} />
                <p className={style.insightsCardHeading}>
                  In UK Retail, a Surge in Female CEOs
                </p>
                <p className={style.insightsCardDescription}>
                  Women now account for 35% of retail CEOs in Britain. Will the
                  ...
                </p>
                <p>March 29, 2024</p>
              </Link>
              </div>
              <div className={style.insightsCard} style={{backgroundColor:"#EBEEF2"}}>
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
              <div className={style.insightsCard} style={{backgroundColor:"#EBEEF2"}}>
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
              <div
                className={style.insightsCard}
                style={{backgroundColor:"#EBEEF2"}}
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
              <div className={style.insightsCard} style={{backgroundColor:"#EBEEF2"}}>
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
              <div className={style.insightsCard} style={{backgroundColor:"#EBEEF2"}}>
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
          </div>
        </div>

        {/*Footer */}
        <Footer/>

      </div>
    </div>
  );
}
