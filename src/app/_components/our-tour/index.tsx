'use client'

import useIsMobile from '@/hooks/useIsMobile'
import {TypeOurTour, TypeOurTourList} from '@/types/home.interface'
import Image from 'next/image'
import OurTourMB from './OurTourMB'
import OurTourPC from './OurTourPC'
import './our-tour.css'

export default function OurTour({
  data,
  dataPostOurTour,
  total,
}: {
  data: TypeOurTour
  dataPostOurTour: TypeOurTourList[]
  total: string
}) {
  const isMobile = useIsMobile()

  // Kiểm tra dataPostOurTour có phải là array không
  if (!Array.isArray(dataPostOurTour)) {
    return null // hoặc return một UI placeholder
  }

  return (
    <section className='ourTour'>
      <Image
        src={'/home/our-tour/deco1.webp'}
        alt=''
        width={881.107}
        height={921.638}
        className='ourTour-deco'
      />
      <div className='ourTour-heading'>
        <Image
          src={'/home/our-tour/pattern.svg'}
          alt=''
          width={100}
          height={100}
          className='ourTour-heading__icon'
        />
        <h2 className='ourTour-heading__title'>{data?.title}</h2>
      </div>
      {isMobile ? (
        <OurTourMB
          data={data}
          dataOurTour={dataPostOurTour}
        />
      ) : (
        <OurTourPC
          data={data}
          dataOurTour={dataPostOurTour}
          total={total}
        />
      )}
    </section>
  )
}
