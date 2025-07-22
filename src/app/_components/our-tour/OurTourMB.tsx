import ImageFallback from '@/components/image/ImageFallback'
import {TypeOurTour, TypeOurTourList} from '@/types/home.interface'
import Image from 'next/image'
import Link from 'next/link'
import {Fragment} from 'react'

export default function OurTourMB({
  data,
  dataOurTour,
}: {
  data: TypeOurTour
  dataOurTour: TypeOurTourList[]
}) {
  if (!Array.isArray(dataOurTour)) {
    return null
  }

  return (
    <>
      <div className='ourTour-listmb'>
        {Array.isArray(dataOurTour) &&
          dataOurTour?.map((item, index: number) => (
            <Fragment key={index}>
              <Link
                href={'/tours/' + item?.tour_1.link}
                className='ourTour-listmb__item'
              >
                <ImageFallback
                  src={item?.img_tour_1?.url}
                  alt={item?.img_tour_1?.alt}
                  width={610}
                  height={230}
                  className='ourTour-item__img object-cover'
                />
                <div className={`item-infor ${index === 0 ? 'active' : ''}`}>
                  <p className='item-infor__title'>{item?.tour_1.title}</p>
                  <div className='item-infor__warpper'>
                    <Image
                      src={'/home/our-tour/location.svg'}
                      alt=''
                      width={40}
                      height={40}
                    />
                    <p className='item-infor__price'>
                      {item?.tour_1.price} USD
                    </p>
                    <div className='item-infor__dots'></div>
                    <p className='item-infor__term'>
                      {item?.tour_1.duration[0]}
                    </p>
                  </div>
                </div>
                <div className='ourTour-listmb__itemoverlay'></div>
              </Link>
              <Link
                href={'/tours/' + item?.tour_2.link}
                className='ourTour-listmb__item'
              >
                <ImageFallback
                  src={item?.img_tour_2?.url}
                  alt={item?.img_tour_2?.alt}
                  width={610}
                  height={230}
                  className='ourTour-item__img'
                />
                <div className={`item-infor ${index === 0 ? 'active' : ''}`}>
                  <p className='item-infor__title'>{item?.tour_2.title}</p>
                  <div className='item-infor__warpper'>
                    <Image
                      src={'/home/our-tour/location.svg'}
                      alt=''
                      width={40}
                      height={40}
                    />
                    <p className='item-infor__price'>
                      {item?.tour_2.price} USD
                    </p>
                    <div className='item-infor__dots'></div>
                    <p className='item-infor__term'>
                      {item?.tour_2.duration[0]}
                    </p>
                  </div>
                </div>
                <div className='ourTour-listmb__itemoverlay'></div>
              </Link>
              <Link
                href={'/tours/' + item?.tour_3.link}
                className='ourTour-listmb__item'
              >
                <ImageFallback
                  src={item?.img_tour_3?.url}
                  alt={item?.img_tour_3?.alt}
                  width={610}
                  height={230}
                  className='ourTour-item__img'
                />
                <div className={`item-infor ${index === 0 ? 'active' : ''}`}>
                  <p className='item-infor__title'>{item?.tour_3.title}</p>
                  <div className='item-infor__warpper'>
                    <Image
                      src={'/home/our-tour/location.svg'}
                      alt=''
                      width={40}
                      height={40}
                    />
                    <p className='item-infor__price'>
                      {item?.tour_3.price} USD
                    </p>
                    <div className='item-infor__dots'></div>
                    <p className='item-infor__term'>
                      {item?.tour_3.duration[0]}
                    </p>
                  </div>
                </div>
                <div className='ourTour-listmb__itemoverlay'></div>
              </Link>
            </Fragment>
          ))}
      </div>
      <Link
        href={data?.discover_our_tours?.link?.url}
        target={data?.discover_our_tours?.link?.target}
        className='ourTour-listmb__btn'
      >
        <p>ALL tour</p>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='19'
          height='18'
          viewBox='0 0 19 18'
          fill='none'
        >
          <path
            d='M12.1529 4.93853C11.4811 4.20302 10.767 3.2697 10.2639 2.39834C10.0414 2.01296 9.88022 1.57813 9.66803 1.20299C9.64144 1.15638 9.68377 1.10807 9.57523 1.1308L7.32366 3.71647C8.80463 5.26821 10.5835 6.49709 12.4959 7.3929L14.106 8.00734C9.91657 8.06305 5.69454 7.76577 1.625 6.70058L1.625 11.3046C2.50088 11.0767 3.38382 10.8613 4.27381 10.697C7.51197 10.0996 10.819 9.95242 14.106 9.99789L12.643 10.539C10.9677 11.3183 9.34568 12.3272 7.97324 13.6055C7.76214 13.8022 7.58252 14.0995 7.32312 14.2041L9.65554 16.875C11.1056 13.6101 13.9753 10.7044 17.24 9.4994C17.475 9.36583 17.3247 8.7906 17.3572 8.52516C15.6831 8.01871 14.0729 6.85235 12.8042 5.62062C12.5621 5.47056 12.2826 5.21648 12.1529 4.93853Z'
            fill='white'
          />
        </svg>
      </Link>
    </>
  )
}
