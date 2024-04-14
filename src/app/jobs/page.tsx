import Navbar from "@/components/navbar/page"
import style from "../../styles/leader.module.css"
import jobsStyle from "../../styles/jobs.module.css";

export default function Jobs(){
    return(
        <div className={style.container}>
            <div className={style.wrapper}>

                <Navbar/>

                <div className={jobsStyle.careerContainer}>
                    <div className={jobsStyle.jobIntro}>
                        <p className={jobsStyle.title}>Executive Careers</p>
                        <div className={jobsStyle.inputWrapper}>
                            <div>
                                <label>Job Title</label>
                                <input placeholder="Job Title"/>
                            </div>
                            <div>
                                <label>Industry</label>
                                <input placeholder="Industry"/>
                            </div>
                            <div>
                                <label>Location</label>
                                <input placeholder="Location"/>
                            </div>
                            <div className={jobsStyle.btnWrapper}>
                                <p className={jobsStyle.search}>Search Job</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={jobsStyle.submitCvContainer}>
                    <div className={jobsStyle.submitText}>
                        <p>Due to client confidentiality, we do not publish all the jobs we are currently working on.</p>
                        <p>If you cannot find a relevant opportunity by browsing our jobs, please send us your details by clicking here.</p>
                    </div>
                    <div className={jobsStyle.submitCV}>
                        <p>Submit Your CV</p>
                    </div>
                </div>

                {/*Positions*/}
                <div className={style.positionContainer}>
                    <div className={style.positionWrapper}>
                        <div className={style.partnerHeadings}>
                        <p className={style.partnerHeading}>Positions We Are Hiring </p>
                        </div>
                        <div className={style.positions}>
                        <img src="/images/landing/posi_manager.svg" alt="" className={style.positionsImg}/>
                        <img src="/images/landing/posi_chief.svg" className="" />
                        <img src="/images/landing/posi_tech.svg" className="" />
                        <img src="/images/landing/posi_manager.svg" alt="" className={style.positionsImg}/>
                        <img src="/images/landing/posi_chief.svg" className="" />
                        <img src="/images/landing/posi_tech.svg" className="" />
                        </div>
                    </div>
                </div>

                {/*Footer */}
        <div className={style.footerContainer}>
          <div className={style.footerWrapper}>
              <div className={style.footerContents}>
                <div className={style.whiteContainer}>
                  <img src="/images/landing/white_logo.svg"/>
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
    )
}