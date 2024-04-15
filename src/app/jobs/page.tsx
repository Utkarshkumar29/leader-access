import Navbar from "@/components/navbar/page"
import style from "../../styles/leader.module.css"
import jobsStyle from "../../styles/jobs.module.css";
import Image from "next/image";
import Footer from "@/components/footer/page";
import Link from "next/link";

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
                        <Image src="/images/landing/posi_manager.svg" className={style.positionsImage} alt="Error" width={400} height={300}/>
                        <Image src="/images/landing/posi_chief.svg" className="" alt="Error" width={400} height={300}/>
                        <Image src="/images/landing/posi_tech.svg" className="" alt="Error" width={400} height={300}/>
                        <Image src="/images/landing/posi_manager.svg" className={style.positionsImage} alt="Error" width={400} height={300}/>
                        <Image src="/images/landing/posi_chief.svg" className="" alt="Error" width={400} height={300}/>
                        <Image src="/images/landing/posi_tech.svg" className="" alt="Error" width={400} height={300}/>
                        </div>
                    </div>
                </div>

                {/*Footer */}
        <Footer/>

            </div>
        </div>
    )
}