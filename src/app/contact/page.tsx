import Navbar from "@/components/navbar/page";
import style from "../../styles/leader.module.css";
import contactStyle from "../../styles/contact.module.css";
import Footer from "@/components/footer/page";
import Image from "next/image";

export default function Contact() {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <Navbar />

        {/*Ready */}
        <div className={contactStyle.readyContainer}>
          <div className={contactStyle.readyWrapper}>
            <p>Ready to take the next step ? </p>
            <p>Contact us today</p>
          </div>
        </div>

        <div className={contactStyle.contactContainer}>
          <div className={contactStyle.contactWrapper}>
            <div className={contactStyle.contactUs}>
              <div className={style.partnerHeading}>Contact US</div>
              <div className={contactStyle.contactNumber}>
                <div className={contactStyle.logo}>
                  <Image src="/images/landing/Vector.svg" alt="Error" width={40} height={30}/> 
                </div>
                <p className={contactStyle.field}>Phone Number</p>
                <p className={contactStyle.value}>123467890</p>
              </div>
              <div>
                <div className={contactStyle.logo}>
                  <Image src="/images/landing/Vector.svg" alt="Error" width={40} height={30}/>
                </div>
                <p className={contactStyle.field}>Phone Number</p>
                <p className={contactStyle.value}>XYZ</p>
              </div>
              <div>
                <div className={contactStyle.logo}>
                  <Image src="/images/landing/Vector.svg" alt="Error" width={40} height={30}/>
                </div>
                <p className={contactStyle.field}>Address</p>
                <p className={contactStyle.value}>XYZ</p>
              </div>
            </div>
            <div className={contactStyle.getInTouch}>
              <div className={style.partnerHeading}>Get In Touch</div>
              <div className={contactStyle.inputWrapper}>
                <label className={contactStyle.formLabel}>Name</label>
                <input placeholder="Your Name" className={contactStyle.input}/>
              </div>
              <div className={contactStyle.inputWrapper}>
                <label className={contactStyle.formLabel}>Phone No.</label>
                <input placeholder="Your Phone  No."  className={contactStyle.input}/>
              </div>
              <div className={contactStyle.inputWrapper}>
                <label className={contactStyle.formLabel}>Email</label>
                <input placeholder="Your Email"  className={contactStyle.input}/>
              </div>
              <div className={contactStyle.inputWrapper}>
                <label className={contactStyle.formLabel}>Message</label>
                <textarea type="text" placeholder="Your Message" className={contactStyle.input} rows="10" />
              </div>
              <div className={contactStyle.btnWrapper}>
                <p>Submit</p>
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
