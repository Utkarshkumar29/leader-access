import Navbar from "@/components/navbar/page";
import style from "../../../styles/leader.module.css";
import jobsStyle from "../../../styles/jobs.module.css";
import jobDStyle from "../../../styles/jobdescription.module.css"
import Image from "next/image";

export default function JobDescription() {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <Navbar />

        <div className={jobsStyle.careerContainer}>
          <div className={jobsStyle.jobIntro}>
            <p className={jobsStyle.title}>Executive Careers</p>
            <div className={jobsStyle.inputWrapper}>
              <div>
                <label>Job Title</label>
                <input placeholder="Job Title" />
              </div>
              <div>
                <label>Industry</label>
                <input placeholder="Industry" />
              </div>
              <div>
                <label>Location</label>
                <input placeholder="Location" />
              </div>
              <div className={jobsStyle.btnWrapper}>
                <p className={jobsStyle.search}>Search Job</p>
              </div>
            </div>
          </div>
        </div>

        <div className={jobDStyle.SkillContainer}>
          <div className={jobDStyle.SkillWrapper}>
            <div className={jobDStyle.jobDescription}>
              <p>Job Description</p>
              <p>
                It was a goal set long ago, one that has been accomplished
                impressively. In 2010, British financier Baroness Helena
                Morrissey founded the 30% Club, with the objective of placing
                women in at least 30% of board seats of the UK’s largest public
                companies—those in the FTSE 100 stock index. That was achieved
                by 2018.
              </p>
            </div>
            <div >
              <p className={jobDStyle.uniqueSkills}>Key Skills</p>
              <div className={jobDStyle.skillList}>
                <p>Skills</p>
                <p>Skills</p>
                <p>Skills</p>
              </div>
            </div>
            <div className={jobDStyle.jobDescription}>
              <p>Requirements</p>
              <p>
                It was a goal set long ago, one that has been accomplished
                impressively. In 2010, British financier Baroness Helena
                Morrissey founded the 30% Club, with the objective of placing
                women in at least 30% of board seats of the UK’s largest public
                companies—those in the FTSE 100 stock index. That was achieved
                by 2018.
              </p>
            </div>
            <div>
              <p>Submit</p>
            </div>
          </div>
        </div>

        {/*Footer */}
        <div className={style.footerContainer}>
          <div className={style.footerWrapper}>
              <div className={style.footerContents}>
                <div className={style.whiteContainer}>
                  <Image src="/images/landing/white_logo.svg" alt="Error"/>
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
