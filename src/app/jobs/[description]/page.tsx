'use client'
import React from 'react';
import Navbar from "@/components/navbar/page";
import style from "../../../styles/leader.module.css";
import jobsStyle from "../../../styles/jobs.module.css";
import jobDStyle from "../../../styles/jobdescription.module.css"
import Image from "next/image";
import Footer from "@/components/footer/page";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router"; // Import useRouter instead of useParams
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function JobDescription() {
  const [jobdescription, setJobDescription] = useState([]);
  const jobId=useParams()

  const fetchJobDescription = async () => {
    try {
      const response = await axios.get(`https://do.employeeforums.co.in/api/employer/job-update-delete/${jobId.description}`);
      console.log(response?.data);
      setJobDescription(response.data);
    } catch (error) {
      console.log("Failed to fetch job description", error); 
    }
  }

  useEffect(() => {
    fetchJobDescription();
  }, []);

  const renderKeySkills = () => {
    if (jobdescription?.keyskills){
      const skillsArray = jobdescription.keyskills.split(',').map(skill => skill.trim());
    return skillsArray.map((skill, index) => (
      <div key={index} className={jobDStyle.skillItem}>{skill}</div>
    ));
    };
  };

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <Navbar />

        <div className={jobsStyle.careerContainer}>
          <div className={jobsStyle.jobIntro}>
            <p className={jobsStyle.title}>{jobdescription?.job_title}</p>
            <div className={jobsStyle.inputWrapper}>
              <div>
                <label>Job Title</label>
                <input placeholder="Job Title" value={jobdescription?.job_title}/>
              </div>
              <div>
                <label>Industry</label>
                <input placeholder="Industry" value={jobdescription?.industry}/>
              </div>
              <div>
                <label>Location</label>
                <input placeholder="Location" value={jobdescription?.location}/>
              </div>
              <div className={jobsStyle.btnWrapper}>
                <label>Posted</label>
                <input placeholder="Location" value={jobdescription?.job_posted?.substring(0, 10)} />
              </div>
            </div>
          </div>
        </div>

        <div className={jobDStyle.SkillContainer}>
          <div className={jobDStyle.SkillWrapper}>
            <div className={jobDStyle.jobDescription}>
              <p>Job Description</p>
              <p>{jobdescription?.job_description}</p>
            </div>
            <div>
              <p className={jobDStyle.uniqueSkills}>Key Skill</p>
              <div className={jobDStyle.skillList}>
                {renderKeySkills()}
              </div>
            </div>
            <div className={jobDStyle.jobDescription}>
              <p>Requirements</p>
              <p>{jobdescription?.requirements}</p>
            </div>
            <div className={jobDStyle.CvBtnWrapper}>
              <Link href={`/jobs/cv/${jobdescription?.id}`}>
              <button className={jobDStyle.CvBtn}>Submit CV</button>
              </Link>
            </div>
          </div>
        </div>

        {/*Footer */}
        <Footer/>
      </div>
    </div>
  );
}
