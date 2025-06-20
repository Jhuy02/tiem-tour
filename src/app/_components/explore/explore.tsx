'use client'

import Image from 'next/image'
import './styles/explore.css'
import {IExplore} from '@/types/explore.interface'
import {useEffect, useRef} from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import SplitText from 'gsap/SplitText'
import ExploreContainerImages from './components/explore-container-images'
import ExploreContent from './components/explore-content'

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
          src={'/home/explore/explore-top-mb.svg'}
          alt='explore-top-mobile'
          width={1920}
          height={1080}
          className='explore__container-top--mobile'
        />
        <div className='explore__container'>
          <ExploreContainerImages />
          <ExploreContent
            desc={data.desc}
            descRef={descRef}
            hint={data.hint}
          />
        </div>
      </section>
    </>
  )
}

export default Explore
