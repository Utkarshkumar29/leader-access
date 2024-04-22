'use client'
import { useState } from "react";
import axios from "axios";
import Navbar from "@/components/navbar/page";
import style from "../../styles/leader.module.css";
import contactStyle from "../../styles/contact.module.css";
import Footer from "@/components/footer/page";
import Image from "next/image";

export default function Contact() {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const data = {
        name: name,
        phone_no: phoneNo,
        email: email,
        message: message,
      };
      const response = await axios.post(
        "https://do.employeeforums.co.in/api/employer/contact",
        data
      );
      console.log(response);
    } catch (error) {
      console.log("Error submitting contact form:", error);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <Navbar />

        {/* Ready */}
        <div className={contactStyle.readyContainer}>
          <div className={contactStyle.readyWrapper}>
            <p>Ready to take the next step?</p>
            <p>Contact us today</p>
          </div>
        </div>

        <div className={contactStyle.contactContainer}>
          <div className={contactStyle.contactWrapper}>
            <div className={contactStyle.contactUs}>
              <div className={style.partnerHeading}>Contact US</div>
              <div className={contactStyle.contactNumber}>
                <div className={contactStyle.logo}>
                  <Image
                    src="/images/landing/Vector.svg"
                    alt="Error"
                    width={40}
                    height={30}
                  />
                </div>
                <p className={contactStyle.field}>Phone Number</p>
                <p className={contactStyle.value}>123467890</p>
              </div>
              <div>
                <div className={contactStyle.logo}>
                  <Image
                    src="/images/landing/Vector.svg"
                    alt="Error"
                    width={40}
                    height={30}
                  />
                </div>
                <p className={contactStyle.field}>Phone Number</p>
                <p className={contactStyle.value}>XYZ</p>
              </div>
              <div>
                <div className={contactStyle.logo}>
                  <Image
                    src="/images/landing/Vector.svg"
                    alt="Error"
                    width={40}
                    height={30}
                  />
                </div>
                <p className={contactStyle.field}>Address</p>
                <p className={contactStyle.value}>XYZ</p>
              </div>
            </div>
            <div className={contactStyle.getInTouch}>
              <div className={style.partnerHeading}>Get In Touch</div>
              <form onSubmit={handleSubmit}>
                <div className={contactStyle.inputWrapper}>
                  <label className={contactStyle.formLabel}>Name</label>
                  <input
                    placeholder="Your Name"
                    className={contactStyle.input}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className={contactStyle.inputWrapper}>
                  <label className={contactStyle.formLabel}>Phone No.</label>
                  <input
                    placeholder="Your Phone No."
                    className={contactStyle.input}
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                  />
                </div>
                <div className={contactStyle.inputWrapper}>
                  <label className={contactStyle.formLabel}>Email</label>
                  <input
                    placeholder="Your Email"
                    className={contactStyle.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={contactStyle.inputWrapper}>
                  <label className={contactStyle.formLabel}>Message</label>
                  <textarea
                    placeholder="Your Message"
                    className={contactStyle.input}
                    rows={10}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className={contactStyle.btnWrapper}>
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
