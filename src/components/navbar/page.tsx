'use client'
import { useState } from "react";
import Link from "next/link";
import style from "../../styles/navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [expertiseDropdownOpen, setExpertiseDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  const toggleExpertiseDropdown = () => {
    setExpertiseDropdownOpen(!expertiseDropdownOpen);
  };

  const toggleResourcesDropdown = () => {
    setResourcesDropdownOpen(!resourcesDropdownOpen);
  };

  return (
    <>
      <div className={style.navbar_container}>
        <div className={style.navbar_logo}>
          <Image src="/images/landing/logo.svg" alt="Error" width={120} height={64} />
          <p className={style.nav_heading}>Leaders Access</p>
        </div>
        <div className={style.navButtons}>
          <Link href="/" legacyBehavior>
            <p className={style.navButton}>Home</p>
          </Link>
          <Link href="/about" legacyBehavior>
            <p className={style.navButton}>About</p>
          </Link>
          <div className={style.downContainer} onClick={toggleServicesDropdown}>
            <p className={style.navButton}>Services</p>
            <Image src="/images/landing/DownArrow.svg" alt="Error" width={20} height={10} style={{ transform: servicesDropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
            {servicesDropdownOpen && (
              <div className={style.dropdownContent}>
                <Link href="/service" legacyBehavior><p>Executive Search</p></Link>
                <Link href="/service/talent" legacyBehavior><p>Talent Advisory</p></Link>
                <Link href="/service/recruitment_Process_Outsourcing" legacyBehavior><p>Recruitment Process Outsourcing</p></Link>
              </div>
            )}
          </div>
          <div className={style.downContainer} onClick={toggleExpertiseDropdown}>
            <Link href="/expertise" legacyBehavior><p className={style.navButton}>Expertise</p></Link>
          </div>
          <div className={style.downContainer} onClick={toggleResourcesDropdown}>
            <p className={style.navButton}>Resources</p>
            <Image src="/images/landing/DownArrow.svg" alt="Error" width={20} height={10} style={{ transform: resourcesDropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
            {resourcesDropdownOpen && (
              <div className={style.dropdownContent}>
                <Link href="/resources" legacyBehavior><p>Insights</p></Link>
                <Link href="/resources/caseStudies" legacyBehavior><p>Case Studies</p></Link>
              </div>
            )}
          </div>
        </div>
        <div className={style.nav_contact}>
          <Link href="/jobs" legacyBehavior>
            <div className={style.joinContainer}>
              <p className={style.joinButton}>Jobs</p>
              <Image src="/images/landing/DownArrow.svg" alt="Error" width={20} height={20} />
            </div>
          </Link>
          <Link href="/contact" legacyBehavior>
            <p className={style.contactButton}>Contact</p>
          </Link>
        </div>
      </div>
    </>
  );
}
