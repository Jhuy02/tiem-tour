'use client'

import Image from 'next/image'
import './styles/explore.css'
import {IExplore} from '@/types/explore.interface'
import {useEffect, useRef} from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import SplitText from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

const Explore = ({data}: {data: IExplore}) => {
  const descRef = useRef<HTMLParagraphElement>(null)
  const exploreRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let split: SplitText
    let tl: gsap.core.Timeline

    const cleanup = () => {
      if (split) split.revert()
      if (tl) tl.revert()
    }

    const setupDesktop = () => {
      cleanup()
      if (!descRef.current) return
      split = new SplitText(descRef.current, {type: 'words, chars'})
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: exploreRef.current,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: 0.75,
        },
      })
      tl.set(
        split.chars,
        {
          color: '#3b3943',
          stagger: 0.1,
        },
        0.1,
      )
    }

    const setupMobile = () => {
      cleanup()
      if (!descRef.current) return
      split = new SplitText(descRef.current, {type: 'words, chars'})
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: exploreRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
          // markers: true,
        },
      })
      tl.fromTo(
        split.chars,
        {color: '#aaa', y: 10, opacity: 0},
        {
          color: '#3b3943',
          y: 0,
          opacity: 1,
          stagger: 0.015,
          ease: 'power2.out',
          duration: 0.5,
        },
      )
    }

    ScrollTrigger.matchMedia({
      '(min-width: 1025px)': () => {
        setupDesktop()
        const debounce = gsap
          .delayedCall(0.3, () => {
            setupDesktop()
            ScrollTrigger.refresh()
          })
          .pause()
        window.addEventListener('resize', () => debounce.restart(true))
        return () =>
          window.removeEventListener('resize', () => debounce.restart(true))
      },
      '(max-width: 1024px)': () => {
        setupMobile()
        const debounce = gsap
          .delayedCall(0.3, () => {
            setupMobile()
            ScrollTrigger.refresh()
          })
          .pause()
        window.addEventListener('resize', () => debounce.restart(true))
        return () =>
          window.removeEventListener('resize', () => debounce.restart(true))
      },
    })

    return () => {
      cleanup()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <>
      <div className='explore__contentspacemb'></div>
      <section
        id='explore'
        ref={exploreRef}
      >
        <Image
          src={'/home/explore/explore-top.webp'}
          alt='explore-top'
          width={1920}
          height={1080}
          className='explore__container-top'
        />
        <Image
          src={'/home/explore/explore-top-mb.webp'}
          alt='explore-top-mobile'
          width={1920}
          height={1080}
          className='explore__container-top--mobile'
        />
        <div className='explore__container'>
          <Image
            src={'/background.webp'}
            alt='explore-container-img'
            width={1920}
            height={1080}
            className='explore__container-img'
          />
          <Image
            src={'/home/explore/flower.webp'}
            alt='explore-container-flower'
            width={259.513}
            height={259.513}
            className='explore__container-flower'
          />
          <Image
            src={'/home/explore/river.webp'}
            alt='explore-container-river'
            width={1920}
            height={1080}
            className='explore__container-river'
          />
          <Image
            src={'/home/explore/river-mb.webp'}
            alt='explore-container-river-mb'
            width={1920}
            height={1080}
            className='explore__container-river-mb'
          />
          <Image
            src={'/home/explore/river-2.webp'}
            alt='explore-container-river-2'
            width={1920}
            height={1080}
            className='explore__container-river-2'
          />
          <Image
            src={'/home/explore/fanxipang.webp'}
            alt='explore-container-fanxipang'
            width={1920}
            height={1080}
            className='explore__container-fanxipang'
          />
          <Image
            src={'/home/explore/fanxipang-2.webp'}
            alt='explore-container-fanxipang-2'
            width={1920}
            height={1080}
            className='explore__container-fanxipang-2'
          />
          <Image
            src={'/home/explore/coin.webp'}
            alt='explore-container-remove-bg'
            width={1920}
            height={1080}
            className='explore__container-remove-bg'
          />
          <p className='explore__container-text'>Nhoque River</p>
          <div className='explore__content'>
            <div className='explore__content-item'>
              <div className='explore__content-circle'>
                <Image
                  src={'/home/explore/circle-text.webp'}
                  alt='explore-content-circle-text'
                  width={1920}
                  height={1080}
                  className='explore__content-circle-text'
                />
                <Image
                  src={'/home/explore/pattern.svg'}
                  alt='explore-content-circle-pattern'
                  width={1920}
                  height={1080}
                  className='explore__content-circle-pattern'
                />
              </div>
              <p
                className='explore__content-desc'
                ref={descRef}
              >
                {data.desc}
              </p>
            </div>
            <div className='explore__content-list'>
              {data.hint.map((item, index) => (
                <div
                  className='explore__content-hint'
                  key={index}
                >
                  <Image
                    src={item.icon.url}
                    alt={item.icon.alt}
                    width={1920}
                    height={1080}
                  />
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Explore
