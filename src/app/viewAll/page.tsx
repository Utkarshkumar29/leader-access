'use client'
import Link from "next/link";
import style from "../../styles/leader.module.css";
import aboutStyle from "../../styles/about.module.css";
import expertStyle from "../../styles/expertise.module.css";
import viewStyle from "../../styles/viewAll.module.css";
import { Fragment, useState } from "react";
//import { Fragment } from 'react';
//import { Dialog } from '@headlessui/react';
import Image from "next/image";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";
import { Dialog, Transition } from "@headlessui/react";


export default function ViewAll() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle "Read more" click
  const handleReadMoreClick = () => {
    setIsModalOpen(true);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={style.container}>
      <div className={style.wrapper}>

        {/*Navbar */}
        <Navbar/>

        {/*What client say */}
        <div className={viewStyle.clientSayContainer}>
            <div className={viewStyle.quoteBox}>
                <p>What Our Clients Say</p>
            </div>
        </div>

        {/*Client Testimonials */}
        <div className={style.positionContainer}>
          <div className={style.positionWrapper}>
            <div className={style.partnerHeadings}>
              <p className={style.partnerHeading}>Client Testimonials</p>
              <div className={style.arrowContainer}>
                <Image src="/images/landing/leftArrow.svg" alt="Error" width={20} height={20}/>
                <Image src="/images/landing/RightArrow.svg" alt="Error" width={20} height={20}/>
              </div>
            </div>
            <div className={style.scrollCardWrapper}>
              <div className={style.clientCard}>
                <div className={style.invertImage}>
                  <Image src="/images/landing/invertWhite.svg"alt="Error" width={2} height={2} style={{width:"50px"}}/>
                </div>
                <p className={style.clientDes}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo <span className={style.clientShow} onClick={()=>{handleReadMoreClick()}}>...Read more</span>
                </p>
                <div className={style.clientDescription}>
                  <div>Manish Taneja</div>
                  <div>Client</div>
                </div>
              </div>
              <div className={style.clientCard}>
                <div className={style.invertImage}>
                  <Image src="/images/landing/invertWhite.svg" alt="Error" width={20} height={20} style={{width:"50px"}}/>
                </div>
                <p className={style.clientDes}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo <span className={style.clientShow}>...Read more</span>
                </p>
                <div className={style.clientDescription}>
                  <div>Manish Taneja</div>
                  <div>Client</div>
                </div>
              </div>
              <div className={style.clientCard}>
                <div className={style.invertImage}>
                  <Image src="/images/landing/invertWhite.svg" alt="Error" width={20} height={20} style={{width:"50px"}}/>
                </div>
                <p className={style.clientDes}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo <span className={style.clientShow}>...Read more</span>
                </p>
                <div className={style.clientDescription}>
                  <div>Manish Taneja</div>
                  <div>Client</div>
                </div>
              </div>
              <div className={style.clientCard}>
                <div className={style.invertImage}>
                  <Image src="/images/landing/invertWhite.svg"alt="Error" width={2} height={2} style={{width:"50px"}}/>
                </div>
                <p className={style.clientDes}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo <span className={style.clientShow}>...Read more</span>
                </p>
                <div className={style.clientDescription}>
                  <div>Manish Taneja</div>
                  <div>Client</div>
                </div>
              </div>
              <div className={style.clientCard}>
                <div className={style.invertImage}>
                  <Image src="/images/landing/invertWhite.svg"alt="Error" width={2} height={2} style={{width:"50px"}}/>
                </div>
                <p className={style.clientDes}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo <span className={style.clientShow}>...Read more</span>
                </p>
                <div className={style.clientDescription}>
                  <div>Manish Taneja</div>
                  <div>Client</div>
                </div>
              </div>
              <div className={style.clientCard}>
                <div className={style.invertImage}>
                  <Image src="/images/landing/invertWhite.svg"alt="Error" width={2} height={2} style={{width:"50px"}}/>
                </div>
                <p className={style.clientDes}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo <span className={style.clientShow}>...Read more</span>
                </p>
                <div className={style.clientDescription}>
                  <div>Manish Taneja</div>
                  <div>Client</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isModalOpen && (
          <div className={viewStyle.modal}>

              <div className={viewStyle.modalClientCard}>
                <div className={style.invertImage}>
                  <Image src="/images/landing/invertBlue.svg"alt="Error" width={64} height={48}/>
                </div>
                <p className={style.clientDes}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
                <div className={viewStyle.modalClientDescription}>
                  <div>Manish Taneja</div>
                  <div>Client</div>
                </div>
            </div>
          </div>
        )}

        <Footer/>


      </div>
    </div>
  );
}
