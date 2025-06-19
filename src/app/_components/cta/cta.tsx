'use client'
import {ICta} from '@/types/cta.interface'
import Image from 'next/image'
import {useEffect, useRef} from 'react'
import './styles/styles.css'

const CTA = ({data}: {data: ICta}) => {
  const ctaRef = useRef<HTMLDivElement>(null)
  const scrollToTopBtnRef = useRef<HTMLButtonElement>(null)
  const circleRef = useRef<SVGCircleElement>(null)

  // Handle CTA visibility on scroll
  useEffect(() => {
    const cta = ctaRef.current
    if (!cta) return

    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop
      cta.classList.toggle('active', scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Handle scroll to top button click
  useEffect(() => {
    const btn = scrollToTopBtnRef.current
    if (!btn) return

    const scrollToTop = () => {
      window.scrollTo({top: 0, behavior: 'smooth'})
    }
    btn.addEventListener('click', scrollToTop)

    return () => {
      btn.removeEventListener('click', scrollToTop)
    }
  }, [])

  // Handle circle progress animation
  useEffect(() => {
    const circle = circleRef.current
    if (!circle) return

    const length = circle.getTotalLength()
    circle.style.strokeDasharray = String(length)
    circle.style.strokeDashoffset = String(length)

    const updateCircle = () => {
      const scrollTop =
        document.body.scrollTop + document.documentElement.scrollTop
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const scrollPercent = docHeight ? scrollTop / docHeight : 0
      circle.style.strokeDashoffset = String(length - length * scrollPercent)
    }

    window.addEventListener('scroll', updateCircle)
    updateCircle()

    return () => {
      window.removeEventListener('scroll', updateCircle)
    }
  }, [])

  return (
    <div
      id='CTA-buttons'
      ref={ctaRef}
    >
      <button
        className='scroll-to-top cursor-pointer'
        id='scroll-to-top'
        ref={scrollToTopBtnRef}
      >
        <ScrollToTopIcon circleRef={circleRef} />
      </button>
      <a
        href={`https://wa.me/${data.whatsapp}`}
        className='fab__whatsapp'
        target='_blank'
        rel='noopener noreferrer'
      >
        <div className='fab__whatsapp__icon'>
          <Image
            src={'/whatsapp.svg'}
            alt='whatsapp'
            width={61}
            height={61}
          />
        </div>
        <div className='fab__whatsapp__animation fab__whatsapp__animation1'>
          <div className='animate-ping animation__ping__1'></div>
        </div>
        <div className='fab__whatsapp__animation'>
          <div className='animation__ping__2'></div>
        </div>
        <div className='fab__whatsapp__animation'>
          <div className='animation__ping__3'></div>
        </div>
      </a>
      <a
        href={data.messenger.url}
        className='messenger cursor-pointer'
        target='_blank'
        rel='noopener noreferrer'
      >
        <MessengerIcon />
      </a>
    </div>
  )
}

const ScrollToTopIcon = ({
  circleRef,
}: {
  circleRef: React.RefObject<SVGCircleElement | null>
}) => {
  return (
    <svg
      width='61'
      height='61'
      viewBox='0 0 61 61'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_604_10721)'>
        <circle
          id='circle'
          ref={circleRef}
          cx='30.4477'
          cy='30.3598'
          r='28.8142'
          stroke='#C83E21'
          strokeWidth='1.82947'
        />
        <path
          d='M30.0777 41.7945L30.0777 21.6703'
          stroke='#C83E21'
          strokeWidth='3.65894'
        />
        <path
          d='M20.9648 30.7812L30.0726 21.6735L39.1804 30.7812'
          stroke='#C83E21'
          strokeWidth='3.65894'
        />
      </g>
      <defs>
        <clipPath id='clip0_604_10721'>
          <rect
            width='59.4578'
            height='59.4578'
            fill='white'
            transform='translate(0.71875 0.630859)'
          />
        </clipPath>
      </defs>
    </svg>
  )
}

const MessengerIcon = () => {
  return (
    <svg
      width='59'
      height='59'
      viewBox='0 0 59 59'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M29.4479 58.7337C45.5627 58.7337 58.6263 45.6701 58.6263 29.5553C58.6263 13.4406 45.5627 0.376953 29.4479 0.376953C13.3331 0.376953 0.269531 13.4406 0.269531 29.5553C0.269531 45.6701 13.3331 58.7337 29.4479 58.7337Z'
        fill='#C83E21'
      />
      <path
        d='M47.6839 28.8694C47.6839 38.1965 39.5173 45.7564 29.4474 45.7564C27.6795 45.7575 25.9195 45.52 24.2152 45.0501L18.0049 48.4554V42.0162C13.8635 38.9227 11.2109 34.1978 11.2109 28.8694C11.2109 19.5423 19.3776 11.9824 29.4474 11.9824C39.5173 11.9824 47.6839 19.5456 47.6839 28.8694Z'
        fill='white'
      />
      <path
        d='M41.229 24.1406L31.2586 34.7178L26.6166 29.7674L17.5547 34.7211L27.5251 24.1406L32.2831 29.091L41.229 24.1406Z'
        fill='#C83E21'
      />
    </svg>
  )
}

export default CTA
