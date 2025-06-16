/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import {ScrollSmoother} from 'gsap/dist/ScrollSmoother'
import {useGSAP} from '@gsap/react'

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother)

export default function GsapProvider({children}: {children: React.ReactNode}) {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: false,
    })
  }, [])
  return (
    <div id='smooth-wrapper'>
      <div id='smooth-content'>{children}</div>
    </div>
  )
}
