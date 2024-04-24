'use client'
import Image from "next/image";
import style from "../../styles/leader.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PositionCard(){
    interface JobItem {
        id: number;
        job_title: string;
        industry: string;
        location: string;
        min_experience: number;
        max_experience: number;
      }
    
      const [jobsList, setJobsList] = useState<JobItem[]>([]);
    
      const fetchJobs=async()=>{
        try {
          const respose=await axios.get('https://do.employeeforums.co.in/api/employer/job-post')
          console.log(respose?.data)
          setJobsList(respose?.data)
        } catch (error) {
          console.log("Error getting jobs",error)
        }
      }
    
      const [startIndex, setStartIndex] = useState(0);
      const cardsPerPage = 3; 
    
      useEffect(()=>{
        console.log(startIndex)
      },[])
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
    
    
      useEffect(()=>{
        fetchJobs()
      },[])

    return(
        <div className={style.positionContainer}>
          <div className={style.positionWrapper}>
            <div className={style.partnerHeadings}>
              <p className={style.partnerHeading}>Positions We Are Hiring </p>
              <div className={style.arrowContainer}>
              <Image src="/images/landing/leftArrow.svg" alt="Error" width={20} height={20} onClick={showPrevCards}/>
              <Image src="/images/landing/rightArrow.svg" alt="Error" width={10} height={10} onClick={showNextCards}/>
              </div>
            </div>
            <div className={style.positions}>
              {jobsList && jobsList.length>0 && jobsList.slice(startIndex, startIndex + cardsPerPage).map((job,index)=>{
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
            <Link href="/jobs" legacyBehavior>
              <div className={style.buttonContainer}>
                <p className={style.positionsView}>View All</p>
              </div>
            </Link>
          </div>
        </div>
    )
}