'use client'
import Link from "next/link";
import style from "../../styles/leader.module.css";
import aboutStyle from "../../styles/about.module.css";
import expertStyle from "../../styles/expertise.module.css";
import viewStyle from "../../styles/viewAll.module.css";
import { useState } from "react";
import { Fragment } from 'react';
import { Dialog } from '@headlessui/react';
import Image from "next/image";


export default function ViewAll() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMoreClick = () => {
    console.log("Read More clicked");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={style.container}>
      <div className={style.wrapper}>

        {/*Navbar */}
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
            <div className={style.downContainer}>
              <Link href="/service">
                <p className={style.navButton}>Services</p>
                <Image src="/images/landing/DownArrow.svg" alt="Error" width={20} height={20}/>
              </Link>
            </div>
            <div className={style.downContainer}>
              <Link href="/expertise">
                <p className={style.navButton}>Expertise</p>
                <Image src="/images/landing/DownArrow.svg" alt="Error" width={20} height={20}/>
              </Link>
            </div>
            <div className={style.downContainer}>
              <Link href="/resources">
                <p className={style.navButton}>Resources</p>
                <Image src="/images/landing/DownArrow.svg" alt="Error" width={20} height={20}/>
              </Link>
            </div>
          </div>
          <div className={style.nav_contact}>
            <div className={style.joinContainer}>
              <p className={style.joinButton}>Jobs</p>
              <Image src="/images/landing/DownArrow.svg" alt="Error" width={20} height={20}/>
            </div>
            <p className={style.contactButton}>Contact</p>
          </div>
        </div>

        {/*What client say */}
        <div className={viewStyle.clientSayContainer}>
            <div className={viewStyle.quoteBox}>
                <p>What Our Clients Say</p>
            </div>
        </div>

        {/*Client Testimonials */}
        <div className={style.positionContainer}>
          <div className={style.positionWrapper}>
            <div className={style.positions}>
              <div className={style.clientCard} onClick={handleReadMoreClick}>
                <div className={style.invertImg}>
                  <Image src="/images/landing/invertWhite.svg"alt="Error" width={20} height={20} />
                </div>
                <p className={style.clientDes}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo <p className={style.clientShow}>...Read more</p>
                </p>
                <div className={style.clientDescription}>
                  <p>Manish Taneja</p>
                  <p>Client</p>
                </div>
              </div>
              <div className={style.clientCard}>
                <div className={style.invertImg}>
                  <Image src="/images/landing/invertWhite.svg" alt="Error" width={20} height={20}/>
                </div>
                <p className={style.clientDes}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo <span className={style.clientShow}>...Read more</span>
                </p>
                <div className={style.clientDescription}>
                  <p>Manish Taneja</p>
                  <p>Client</p>
                </div>
              </div>
              <div className={style.clientCard}>
                <div className={style.invertImg}>
                  <Image src="/images/landing/invertWhite.svg"alt="Error" width={20} height={20}/>
                </div>
                <p className={style.clientDes}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo <span className={style.clientShow}>...Read more</span>
                </p>
                <div className={style.clientDescription}>
                  <p>Manish Taneja</p>
                  <p>Client</p>
                </div>
              </div>
              <div className={style.clientCard}>
                <div className={style.invertImg}>
                  <Image src="/images/landing/invertWhite.svg" alt="Error" width={20} height={20}/>
                </div>
                <p className={style.clientDes}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo <span className={style.clientShow}>...Read more</span>
                </p>
                <div className={style.clientDescription}>
                  <p>Manish Taneja</p>
                  <p>Client</p>
                </div>
              </div>
              <div className={style.clientCard}>
                <div className={style.invertImg}>
                  <Image src="/images/landing/invertWhite.svg" alt="Error" width={20} height={20}/>
                </div>
                <p className={style.clientDes}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo <span className={style.clientShow}>...Read more</span>
                </p>
                <div className={style.clientDescription}>
                  <p>Manish Taneja</p>
                  <p>Client</p>
                </div>
              </div>
              <div className={style.clientCard}>
                <div className={style.invertImg}>
                  <Image src="/images/landing/invertWhite.svg" alt="Error" width={20} height={20}/>
                </div>
                <p className={style.clientDes}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo <span className={style.clientShow}>...Read more</span>
                </p>
                <div className={style.clientDescription}>
                  <p>Manish Taneja</p>
                  <p>Client</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integration of provided HTML structure */}
        {/*<Transition.Root show={isModalOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-30 overflow-y-auto"
            onClose={handleCloseModal}
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />

            <div className="flex items-center justify-center min-h-screen">
              <Dialog.Title as="h3">Dialog Title</Dialog.Title>
              <Dialog.Description>
                This is the content of the dialog.
              </Dialog.Description>
              <button onClick={handleCloseModal}>Close</button>
            </div>
          </Dialog>
  </Transition.Root>*/}


      </div>
    </div>
  );
}
