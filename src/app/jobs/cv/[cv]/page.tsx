"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import style from "../../../../styles/leader.module.css";
import Navbar from "@/components/navbar/page";
import jobsStyle from "../../../../styles/jobs.module.css";
import cvStyle from "../../../../styles/cv.module.css";
import Footer from "@/components/footer/page";
import { useParams } from "next/navigation";

export default function CV() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_no, setPhone_No] = useState("");
  const [current_company, setCurrentCompany] = useState("");
  const [current_designation, setCurrentDesignation] = useState("");
  const [experience, setExperience] = useState("");
  const [upload_cv, setUploadCV] = useState(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone_no", phone_no);
      formData.append("current_company", current_company);
      formData.append("current_designation", current_designation);
      formData.append("experience", experience);
      if (upload_cv) {
        formData.append("upload_cv", upload_cv);
      }

      const response = await axios.post(
        "https://do.employeeforums.co.in/api/employer/submit-cv",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log("Error creating the object", error);
    }
  };

  const [jobdescription, setJobDescription] = useState([]);
  const jobId=useParams()
  const fetchJobDescription = async () => {
    try {
      const response = await axios.get(`https://do.employeeforums.co.in/api/employer/job-update-delete/${jobId.cv}`);
      console.log(response?.data);
      setJobDescription(response.data);
    } catch (error) {
      console.log("Failed to fetch job description", error); 
    }
  }

  useEffect(()=>{
    fetchJobDescription()
  },[])

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
        <div className={cvStyle.cvContainer}>
          <div className={cvStyle.cvWrapper}>
            <div className={cvStyle.heading}>Submit CV</div>
            <form
              className={cvStyle.inputContainer}
              onSubmit={(event) => handleSubmit(event)}
            >
              <div className={cvStyle.inputWrapper}>
                <label className={cvStyle.label}>Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className={cvStyle.field}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={cvStyle.inputWrapper}>
                <label className={cvStyle.label}>Email</label>
                <input
                  type="text"
                  placeholder="Your EMail"
                  className={cvStyle.field}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={cvStyle.inputWrapper}>
                <label className={cvStyle.label}>Phone No.</label>
                <input
                  type="number"
                  placeholder="Your Phone No."
                  className={cvStyle.field}
                  onChange={(e) => setPhone_No(e.target.value)}
                />
              </div>
              <div className={cvStyle.inputWrapper}>
                <label className={cvStyle.label}>Cuurent Company</label>
                <input
                  type="text"
                  placeholder="Your Current Company"
                  className={cvStyle.field}
                  onChange={(e) => setCurrentCompany(e.target.value)}
                />
              </div>
              <div className={cvStyle.inputWrapper}>
                <label className={cvStyle.label}>Current Designation</label>
                <input
                  type="text"
                  placeholder="Your Current Designation"
                  className={cvStyle.field}
                  onChange={(e) => setCurrentDesignation(e.target.value)}
                />
              </div>
              <div className={cvStyle.inputWrapper}>
                <label className={cvStyle.label}>Experience</label>
                <input
                  type="text"
                  placeholder="Your Experience"
                  className={cvStyle.field}
                  onChange={(e) => setExperience(e.target.value)}
                />
              </div>
              <div className={cvStyle.inputWrapper}>
                <label className={cvStyle.label}>Upload CV</label>
                <input
                  type="file"
                  id="fileInput"
                  name="fileInput"
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      const selectedFile = e.target.files[0];
                      setUploadCV(selectedFile);
                    } else {
                      console.log("No file selected");
                    }
                  }}
                  className={cvStyle.field}
                />
              </div>
              <div className={cvStyle.SubmitBtnWrapper}>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
