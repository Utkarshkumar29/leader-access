import Link from "next/link"
import style from "../../styles/navbar.module.css"

export default function Navbar(){
    return(
        <div className={style.navbar_container}>
          <div className={style.navbar_logo}>
            <img src="/images/landing/logo.svg" />
            <p className={style.nav_heading}>Leaders Access</p>
          </div>
          <div className={style.navButtons}>
            <p className={style.navButton}>Home</p>
              <Link href="/about">
                <p className={style.navButton}>About</p>
              </Link>
            <div className={style.downContainer}>
              <Link href="/service">
                <p className={style.navButton}>Services</p>
                <img src="/images/landing/DownArrow.svg" />
              </Link>
            </div>
            <div className={style.downContainer}>
            <Link href="/expertise">
              <p className={style.navButton}>Expertise</p>
              <img src="/images/landing/DownArrow.svg" />
            </Link>
            </div>
            <div className={style.downContainer}>
              <Link href="/resources">
              <p className={style.navButton}>Resources</p>
              <img src="/images/landing/DownArrow.svg" />
              </Link>
            </div>
          </div>
          <div className={style.nav_contact}>
            <Link href="/jobs">
            <div className={style.joinContainer}>
              <p className={style.joinButton}>Jobs</p>
              <img src="/images/landing/DownArrow.svg" />
            </div>
            </Link>
            <Link href="/contact">
              <p className={style.contactButton}>Contact</p>
            </Link>
          </div>
        </div>
    )
}