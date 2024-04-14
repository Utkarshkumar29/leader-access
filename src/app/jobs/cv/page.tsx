import Link from "next/link";
import style from "../../../styles/leader.module.css";
import Navbar from "@/components/navbar/page";
import jobsStyle from "../../../styles/jobs.module.css";
import cvStyle from "../../../styles/cv.module.css";

export default function CV(){
    return(
        <div className={style.container}>
            <div className={style.wrapper}>

                <Navbar/>

                <div className={jobsStyle.careerContainer}>
                    <div className={jobsStyle.jobIntro}>
                        <p className={jobsStyle.title}>Managing Director</p>
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

                <div className={cvStyle.cvContainer}>
                    <div className={cvStyle.cvWrapper}>
                        <div className={cvStyle.heading}>Submit CV</div>
                        <div className={cvStyle.inputContainer}>
                            <div className={cvStyle.inputWrapper}>
                                <label className={cvStyle.label}>Name</label>
                                <input type='text' placeholder="Your Name" className={cvStyle.field}/>
                            </div>
                            <div className={cvStyle.inputWrapper}>
                                <label className={cvStyle.label}>Email</label>
                                <input type='text' placeholder="Your EMail" className={cvStyle.field}/>
                            </div>
                            <div className={cvStyle.inputWrapper}>
                                <label className={cvStyle.label}>Phone No.</label>
                                <input type='number' placeholder="Your Phone No." className={cvStyle.field}/>
                            </div>
                            <div className={cvStyle.inputWrapper}>
                                <label className={cvStyle.label}>Cuurent Company</label>
                                <input type='text' placeholder="Your Current Company" className={cvStyle.field}/>
                            </div>
                            <div className={cvStyle.inputWrapper}>
                                <label className={cvStyle.label}>Current Designation</label>
                                <input type='text' placeholder="Your Current Designation" className={cvStyle.field}/>
                            </div>
                            <div className={cvStyle.inputWrapper}>
                                <label className={cvStyle.label}>Experience</label>
                                <input type='text' placeholder="Your Experience" className={cvStyle.field}/>
                            </div>
                            <div className={cvStyle.inputWrapper}>
                                <label className={cvStyle.label}>Upload CV</label>
                                <input type='text' placeholder="Your Name" className={cvStyle.field}/>
                            </div>  
                        </div>
                        <div className={cvStyle.SubmitBtnWrapper}>
                            <p>Submit</p>
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