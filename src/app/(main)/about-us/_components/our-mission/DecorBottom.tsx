'use client'
import Image from 'next/image'
import React, {useEffect} from 'react'
import './DecorBottom.css'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'

// Đăng ký ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

export default function DecorBottom() {
  useEffect(() => {
    // Khởi tạo animation
    gsap.from('.our-mission-animation__bottom', {
      duration: 1,
      scrollTrigger: {
        trigger: '.our-mission-animation__bottom',
        start: 'top 90%',
        toggleClass: 'active',
      },
    })
  }, [])
  return (
    <div className='our-mission-animation__bottom xsm:hidden absolute bottom-0 left-0 h-[27.8125rem] w-full'>
      <Image
        alt=''
        id='path1'
        width={1900}
        height={60}
        src={'/about-us/section-mission/footer-line-1.png'}
        className='our-mission-animation__bottom-item absolute left-0 h-auto w-full'
      />
      <Image
        alt=''
        id='path2'
        width={1900}
        height={60}
        src={'/about-us/section-mission/footer-line-2.png'}
        className='our-mission-animation__bottom-item absolute left-0 h-auto w-full'
      />
      <Image
        alt=''
        id='path3'
        width={1900}
        height={60}
        src={'/about-us/section-mission/footer-line-3.png'}
        className='our-mission-animation__bottom-item absolute left-0 h-auto w-full'
      />
      <Image
        alt=''
        id='path4'
        width={1900}
        height={60}
        src={'/about-us/section-mission/footer-line-4.png'}
        className='our-mission-animation__bottom-item absolute left-0 h-auto w-full'
      />
      <Image
        alt=''
        id='path5'
        width={1900}
        height={60}
        src={'/about-us/section-mission/footer-line-5.png'}
        className='our-mission-animation__bottom-item absolute left-0 h-auto w-full'
      />
      <Image
        alt=''
        id='path6'
        width={1900}
        height={60}
        src={'/about-us/section-mission/footer-line-6.png'}
        className='our-mission-animation__bottom-item absolute left-0 h-auto w-full'
      />
      <div className='absolute bottom-0 left-0 h-[6.5rem] w-full bg-[#F9F4EB] bg-[url("/common/common-background-pc.webp")] bg-cover bg-center bg-no-repeat'></div>
    </div>
  )
}
