'use client'
import Navbar from "@/components/navbar/page"
import style from "../../styles/leader.module.css"
import jobsStyle from "../../styles/jobs.module.css";
import Image from "next/image";
import Footer from "@/components/footer/page";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Jobs(){
  interface JobItem {
    id: number;
    job_title: string;
    industry:String;
    min_experience:number;
    max_experience:number;
    location:string
  }

  const [jobsList, setJobsList] = useState<JobItem[] | null>(null);

  const fetchJobs=async()=>{
    try {
      const respose=await axios.get('https://do.employeeforums.co.in/api/employer/job-post')
      console.log(respose?.data)
      setJobsList(respose?.data)
    } catch (error) {
      console.log("Error getting jobs",error)
    }
  }

    useEffect(()=>{
        fetchJobs()
    },[])

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
                    <div className={jobsStyle.submitCvWrapper}>
                        <div className={jobsStyle.submitText}>
                            <p>Due to client confidentiality, we do not publish all the jobs we are currently working on.</p>
                            <p>If you cannot find a relevant opportunity by browsing our jobs, please send us your details by clicking here.</p>
                        </div>
                        <div className={jobsStyle.submitCV}>
                            <Link href="/jobs/cv"><p>Submit Your CV</p></Link>
                        </div>
                    </div>
                </div>

                {/*Positions*/}
                <div className={style.positionContainer}>
                    <div className={style.positionWrapper}>
                        <div className={style.partnerHeadings}>
                        <p className={style.partnerHeading}>Positions We Are Hiring </p>
                        </div>
                        <div className={style.positions}>
              {jobsList && jobsList.length>0 && jobsList.map((job,index)=>{
                return(
                  <div className={style.positionCard} key={job?.id}>
                    <div>
                      <div className={style.positionTitle}>
                        <p>{job?.job_title}</p>
                        <p>{job?.industry}</p>
                      </div>
                      <div className={style.positionDes}>
                        <div><Image src="/images/landing/location.svg" width={10} height={10} alt="Error" style={{width:"30px"}}/><p>{job?.location}</p></div>
                        <div><Image src="/images/landing/briefcase.svg"  width={10} height={10} alt="Error" style={{width:"30px"}}/><p>{job?.min_experience}-{job?.max_experience} Yrs</p></div>
                      </div>
                      <div className={style.linkWrapper}>
                      <p><Link href={`/jobs/${job?.id}`} legacyBehavior>View Details</Link></p>
                        <p><Link href="/jobs/cv" legacyBehavior>Submit CV</Link></p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
                    </div>
                </div>

                {/*Footer */}
        <Footer/>

            </div>
        </div>
    )
}