import Link from "next/link"
import style from "../../styles/navbar.module.css"
import Image from "next/image"

export default function Navbar(){
    return(
      <>
        <div className={style.navbar_container}>
          <div className={style.navbar_logo}>
          <Image src="/images/landing/logo.svg" alt="Error" width={120} height={64}/>
            <p className={style.nav_heading}>Leaders Access</p>
          </div>
          <div className={style.navButtons}>
            <p className={style.navButton}>Home</p>
              <Link href="/about">
                <p className={style.navButton}>About</p>
              </Link>
            <Link href="/service">
            <div className={style.downContainer}>
                <p className={style.navButton}>Services</p>
                <Image src="/images/landing/DownArrow.svg" alt="Error" width={20} height={10} style={{paddingTop:"25px"}}/>
            </div>
            </Link>
            <Link href="/expertise">
            <div className={style.downContainer}>
              <p className={style.navButton}>Expertise</p>
              <Image src="/images/landing/DownArrow.svg" alt="Error" width={20} height={10} style={{paddingTop:"25px"}}/>
            </div>
            </Link>
              <Link href="/resources">
            <div className={style.downContainer}>
              <p className={style.navButton}>Resources</p>
              <Image src="/images/landing/DownArrow.svg" alt="Error" width={20} height={10} style={{paddingTop:"25px"}}/>
            </div>
              </Link>
          </div>
          <div className={style.nav_contact}>
            <Link href="/jobs">
            <div className={style.joinContainer}>
              <p className={style.joinButton}>Jobs</p>
              <Image src="/images/landing/DownArrow.svg" alt="Error" width={20} height={20}/>
            </div>
            </Link>
            <Link href="/contact">
              <p className={style.contactButton}>Contact</p>
            </Link>
          </div>
        </div>


      </>
    )
}