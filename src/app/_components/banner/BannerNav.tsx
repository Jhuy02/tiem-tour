'use client'
import IconCheck from '@/app/_components/banner/IconCheck'
import PopupSelectMb from '@/app/_components/banner/PopupSelectMb'
import IconArrow from '@/components/icon/IconArrow'
import useIsMobile from '@/hooks/useIsMobile'
import {TaxonomyResponse} from '@/types/taxonomies.interface'
import Image from 'next/image'
import {useState} from 'react'
import {Navigation} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'

const dataBudget = [
  {
    name: '< 1000$',
    slug: 'less',
  },
  {
    name: '1000$ → 2000$',
    slug: 'to',
  },
  {
    name: '> 2000$',
    slug: 'over',
  },
]

export default function BannerNav({
  dataTaxonomies,
}: {
  dataTaxonomies: TaxonomyResponse
}) {
  const isMobile = useIsMobile()

  const [openLocation, setOpenLocation] = useState<boolean>(false)
  const [openDuration, setOpenDuration] = useState<boolean>(false)
  const [openBudget, setOpenBudget] = useState<boolean>(false)
  const [selectedLocation, setSelectedLocation] = useState<
    {name: string; slug: string}[]
  >([])
  const [selectedDuration, setSelectedDuration] = useState<{
    name: string
    slug: string
  } | null>(null)
  const [selectedBudget, setSelectedBudget] = useState<{
    name: string
    slug: string
  } | null>(null)
  return (
    <>
      <div className='banner-nav'>
        <div className='banner-nav__fillter'>
          <div className='banner-fillter__wapper'>
            <div
              className='banner-fillter__item select__location'
              tabIndex={0}
              onClick={(e) => {
                e.stopPropagation()
                setOpenLocation(!openLocation)
                setOpenDuration(false)
                setOpenBudget(false)
              }}
              onBlur={() => {
                if (!isMobile) {
                  setOpenLocation(false)
                }
              }}
            >
              <div className='fillter-item__icon'>
                <Image
                  src={'/home/icon-location.svg'}
                  width={40}
                  height={40}
                  alt=''
                />
              </div>
              <div className='fillter-item__wapper'>
                <p className='fillter-item__label'>Location of interest</p>
                <div className='fillter-item__select'>
                  <p
                    className='fillter-item__title'
                    data-check='0'
                  >
                    {selectedLocation.length > 0
                      ? selectedLocation
                          .map((location) => location.name)
                          .join(', ')
                      : 'Click to select'}
                  </p>
                  <Image
                    className='fillter-item__arrow'
                    src={'/home/dropdown-Icon.svg'}
                    width={18}
                    height={18}
                    alt=''
                  />
                </div>
              </div>
            </div>
            <div className='banner-fillter__itemline'></div>
            <div
              tabIndex={1}
              onClick={(e) => {
                e.stopPropagation()
                setOpenDuration(!openDuration)
                setOpenLocation(false)
                setOpenBudget(false)
              }}
              onBlur={() => {
                if (!isMobile) {
                  setOpenDuration(false)
                }
              }}
              className='banner-fillter__item select__duration'
              data-tax=''
            >
              <div className='fillter-item__icon'>
                <Image
                  src={'/home/icon-duration.svg'}
                  width={40}
                  height={40}
                  alt=''
                />
              </div>
              <div className='fillter-item__wapper'>
                <p className='fillter-item__label'>Travel time</p>
                <div className='fillter-item__select'>
                  <p className='fillter-item__title'>
                    {selectedDuration?.name || 'Click to select'}
                  </p>
                  <Image
                    className='fillter-item__arrow'
                    src={'/home/dropdown-Icon.svg'}
                    width={18}
                    height={18}
                    alt=''
                  />
                </div>
              </div>
              {!isMobile && (
                <div
                  className={`banner-fillter__itempopup ${
                    openDuration ? 'open' : ''
                  }`}
                >
                  {dataTaxonomies.duration.map((term) => (
                    <div
                      key={term.slug}
                      className='fillter-itempopup__item'
                      onClick={() => {
                        setSelectedDuration(
                          selectedDuration?.slug === term.slug
                            ? null
                            : {name: term.name, slug: term.slug},
                        )
                      }}
                    >
                      <div
                        className={`itempopup-item__check duration-item ${
                          selectedDuration?.slug === term.slug ? 'active' : ''
                        }`}
                      >
                        <IconCheck />
                      </div>
                      <p>{term.name}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className='banner-fillter__itemline'></div>
            <div
              tabIndex={2}
              onClick={(e) => {
                e.stopPropagation()
                setOpenBudget(!openBudget)
                setOpenLocation(false)
                setOpenDuration(false)
              }}
              onBlur={() => {
                if (!isMobile) {
                  setOpenBudget(false)
                }
              }}
              className='banner-fillter__item select__proposedbudget'
              data-tax=''
            >
              <div className='fillter-item__icon'>
                <Image
                  src={'/home/icon-budget.svg'}
                  width={40}
                  height={40}
                  alt=''
                />
              </div>
              <div className='fillter-item__wapper'>
                <p className='fillter-item__label'>Proposed budget</p>
                <div className='fillter-item__select'>
                  <p className='fillter-item__title'>
                    {selectedBudget?.name || 'Click to select'}
                  </p>
                  <Image
                    className='fillter-item__arrow'
                    src={'/home/dropdown-Icon.svg'}
                    width={18}
                    height={18}
                    alt=''
                  />
                </div>
              </div>
            </div>
            <div className='banner-fillter__itemline'></div>
          </div>
          <div className='banner-fillter__btn'>
            <p className='fillter-btn__text'>Search for a tour</p>
            <IconArrow />
          </div>
          {!isMobile && (
            <div className={`popuplocation ${openLocation ? 'open' : ''}`}>
              <Swiper
                className='popuplocation-content'
                modules={[Navigation]}
                navigation={{
                  nextEl: '.popuplocationlocation-button-next',
                  prevEl: '.popuplocationlocation-button-prev',
                }}
                slidesPerView={3}
                spaceBetween={10}
              >
                <div className='swiper-wrapper'>
                  {dataTaxonomies.location.map((term) => (
                    <SwiperSlide
                      key={term.slug}
                      className='swiper-slide'
                      onClick={() => {
                        setSelectedLocation(
                          selectedLocation.some(
                            (location) => location.slug === term.slug,
                          )
                            ? selectedLocation.filter(
                                (location) => location.slug !== term.slug,
                              )
                            : [
                                ...selectedLocation,
                                {name: term.name, slug: term.slug},
                              ],
                        )
                      }}
                    >
                      <div
                        className={`popuplocation-item__checkbox ${
                          selectedLocation.some(
                            (location) => location.slug === term.slug,
                          )
                            ? 'active'
                            : ''
                        }`}
                        data-tax={term.slug}
                      >
                        <div className='item__checkbox'>
                          <IconCheck />
                        </div>
                      </div>
                      <Image
                        className={`popuplocation-item__imglocation ${
                          selectedLocation.some(
                            (location) => location.slug === term.slug,
                          )
                            ? 'active'
                            : ''
                        }`}
                        src={term.img_location || ''}
                        width={100}
                        height={100}
                        alt=''
                      />
                      <div className='popuplocation-item__titlewapper'>
                        <p className='popuplocation-item__title'>{term.name}</p>
                        {term?.hot_location && (
                          <div className='popuplocation-item__tag'>Hot</div>
                        )}
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
                <div className='popuplocationlocation-button-next'>
                  <IconArrow />
                </div>
                <div className='popuplocationlocation-button-prev'>
                  <IconArrow />
                </div>
              </Swiper>
            </div>
          )}
          {!isMobile && (
            <div className={`proposedbudget ${openBudget ? 'open' : ''}`}>
              <div className='proposedbudget-content'>
                <p className='proposedbudget-content__title'>
                  Proposed budget :
                </p>
                {dataBudget.map((item) => (
                  <div
                    key={item.slug}
                    className='proposedbudget-content__item'
                    onClick={() => {
                      setSelectedBudget({name: item.name, slug: item.slug})
                    }}
                  >
                    <div
                      className={`proposedbudget-content__radio ${
                        selectedBudget?.slug === item.slug ? 'active' : ''
                      }`}
                    >
                      <IconCheck className='[&>path]:stroke-white' />
                    </div>
                    <p className='proposedbudget-content__text'>{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className='banner-nav__scroll'>
          <p>Scroll down</p>
          <Image
            className='nav__scrollicon'
            src={'/home/scrolldown.svg'}
            width={40}
            height={40}
            alt=''
          />
        </div>
      </div>
      {isMobile && (
        <>
          <div
            onClick={(e) => {
              e.stopPropagation()
              setOpenLocation(false)
              setOpenBudget(false)
              setOpenDuration(false)
            }}
            className={`banner-overlay-popup ${
              openLocation || openBudget || openDuration ? 'active' : ''
            }`}
          ></div>
          <PopupSelectMb
            title='Location of interest'
            toggle={openLocation}
            dataTaxonomies={dataTaxonomies.location}
            setSelectedMultiple={setSelectedLocation}
            selectedMultiple={selectedLocation}
          />
          <PopupSelectMb
            title='Proposed budget'
            toggle={openBudget}
            dataTaxonomies={dataBudget}
            type='budget'
            setSelectedOnly={setSelectedBudget}
            selectedOnly={selectedBudget}
            changeOpen={setOpenBudget}
          />
          <PopupSelectMb
            title='Travel time'
            toggle={openDuration}
            dataTaxonomies={dataTaxonomies.duration}
            setSelectedOnly={setSelectedDuration}
            selectedOnly={selectedDuration}
            changeOpen={setOpenDuration}
          />
        </>
      )}
    </>
  )
}
