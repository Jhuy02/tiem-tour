'use client'

import {
  BacKanMap,
  Bed3,
  Pickup3,
} from '@/app/_components/delivers/_components/bac-kan-map'
import {
  Bed2,
  CaoBangMap,
  Pickup2,
} from '@/app/_components/delivers/_components/cao-bang-map'
import {
  Bed,
  HaGiangMap,
  Pickup,
  PickupStar,
} from '@/app/_components/delivers/_components/ha-giang-map'
import {Button} from '@/components/ui/button'
import {cn} from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'

const Delivers = () => {
  const [activeMap, setActiveMap] = useState<
    'ha-giang' | 'cao-bang' | 'bac-kan'
  >('ha-giang')

  return (
    <section className='relative h-[80.875rem] w-full'>
      <Image
        src={'/home/delivers/background.webp'}
        width={2000}
        height={1000}
        alt='background'
        quality={100}
        className='h-[75rem] w-[125rem] object-cover'
      />
      <Image
        src={'/home/delivers/decor-1.webp'}
        alt='decor-1'
        width={1000}
        height={1000}
        className='absolute bottom-0 left-0 z-[1] h-[25.62656rem] w-[100rem] object-cover'
      />
      <Image
        src={'/home/delivers/decor-2.webp'}
        alt='decor-2'
        width={1000}
        height={1000}
        className='absolute right-0 bottom-0 h-[27.3125rem] w-[78.67725rem] object-cover'
      />
      <Image
        src={'/home/delivers/location.svg'}
        alt='location'
        width={136}
        height={162}
        className='absolute top-[16rem] right-[5rem] h-[10.52406rem] w-[9.49819rem] object-cover'
      />

      <article className='font-dvn-luckiest-guy absolute top-[11.8125rem] left-[6.25rem] w-[67.95rem] text-[2.75rem] leading-[3.575rem] text-[#092F1A]'>
        <h3>
          Tiềm Tours delivers exciting trips while promoting local culture,
          ensuring unforgettable experiences for travelers.
        </h3>
        <Link href={'/'}>
          <Button
            className='mt-[2.5rem] px-[2.5rem] py-[1.25rem] text-[1.125rem] leading-[1.35rem] text-white'
            icon
            red
          >
            About Tiềm
          </Button>
        </Link>
      </article>

      <div className='absolute bottom-[29.1375rem] left-[45%] z-[20] translate-x-[-50%]'>
        <div
          className={cn(
            'pointer-events-none relative',
            activeMap === 'ha-giang' && 'z-[10]',
          )}
        >
          <HaGiangMap
            className={`h-[23.125rem] w-[26.1875rem]`}
            isActive={activeMap === 'ha-giang'}
            onClick={() => setActiveMap('ha-giang')}
          />
          <div
            className={cn(
              'z-[20] transition-all duration-300',
              activeMap === 'ha-giang' ? 'opacity-100' : 'opacity-80',
            )}
          >
            <div className='absolute top-[-1.5rem] left-[15.75rem] flex flex-col items-center space-y-[0.175rem]'>
              <p className='text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-[#102601]'>
                Lung Cu
              </p>
              <PickupStar className='h-[1.98138rem] w-[1.65119rem]' />
            </div>
            <div className='absolute top-[3.675rem] left-[10.975rem] flex flex-col items-center space-y-[0.175rem]'>
              <Bed className='size-[1.5rem]' />
              <p className='text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
                Dong Van
              </p>
            </div>
            <div className='absolute top-[3.175rem] left-[14.375rem] flex flex-col space-y-[0.175rem]'>
              <p className='text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
                Nho Que River
              </p>
              <Pickup className='size-[1.5rem]' />
            </div>
            <div className='absolute top-[4.875rem] left-[16.375rem] flex flex-row items-center space-x-[0.25rem]'>
              <Pickup className='size-[1.5rem]' />
              <p className='text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
                Dong Van
              </p>
            </div>
            <div className='absolute top-[8.675rem] left-[9.875rem] flex flex-col items-center space-x-[0.25rem]'>
              <Pickup className='size-[1.5rem]' />
              <p className='text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
                Yen Minh
              </p>
            </div>
            <div className='absolute top-[7.875rem] left-[3.425rem] flex flex-col items-center space-x-[0.25rem]'>
              <p className='w-[5.25rem] text-center text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
                Lung Tam linen cooperative
              </p>
              <Pickup className='size-[1.5rem]' />
            </div>
            <div className='absolute top-[9.875rem] left-[13rem] flex flex-row items-center space-x-[0.25rem]'>
              <Pickup className='size-[1.5rem]' />
              <p className='text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
                Meo Vac
              </p>
            </div>
            <div className='absolute top-[9.875rem] left-[-1rem] flex flex-row items-center space-x-[0.25rem]'>
              <p className='w-[3.1875rem] pb-[2rem] text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
                Hidden Waterfall
              </p>
              <Pickup className='size-[1.5rem]' />
            </div>
            <div className='absolute top-[10.675rem] left-[6.675rem] flex flex-col items-center space-x-[0.25rem]'>
              <Pickup className='size-[1.5rem]' />
              <p className='text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
                Quan Ba
              </p>
            </div>
            <div className='absolute top-[13.175rem] left-[8.675rem] flex items-center space-x-[0.25rem]'>
              <Pickup className='size-[1.5rem]' />
              <p className='w-[3.5rem] text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
                Thai An Commune
              </p>
            </div>
            <div className='absolute top-[15.175rem] left-[12.975rem] flex items-center space-x-[0.42025rem]'>
              <Bed className='size-[1.5rem]' />
              <p className='w-[2.4375rem] text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
                Du Gia Village
              </p>
            </div>
            <div className='absolute top-[15.175rem] left-[2.575rem] flex flex-col items-center space-y-[0.175rem]'>
              <Bed className='size-[1.5rem]' />
              <p className='text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
                Ha Giang
              </p>
            </div>
            <div className='absolute top-[15.675rem] left-[5.5rem] flex flex-col items-center space-x-[0.25rem]'>
              <Pickup className='size-[2rem]' />
              <p className='w-[5.5rem] text-center text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
                Ha Giang City km 0
              </p>
            </div>
          </div>
        </div>

        <div className='pointer-events-none absolute bottom-[2.855rem] left-[15.425rem]'>
          <CaoBangMap
            className='h-[16.0625rem] w-[30.375rem]'
            isActive={activeMap === 'cao-bang'}
            onClick={() => setActiveMap('cao-bang')}
          />
          <div
            className={cn(
              'z-[20] transition-all duration-300',
              activeMap === 'cao-bang' ? 'opacity-100' : 'opacity-80',
            )}
          >
            <div className='absolute top-[2.875rem] left-[2.375rem] flex flex-row items-center space-x-[0.25rem]'>
              <Bed2 className='size-[1.5rem]' />
              <p className='pt-[1rem] text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
                Bao Lac
              </p>
            </div>
            <div className='absolute top-[4.875rem] left-[2.875rem] flex flex-row items-center space-x-[0.25rem]'>
              <Pickup2 className='size-[1.5rem]' />
              <p className='ml-[-0.5rem] translate-y-[1rem] text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
                Bao Lac
              </p>
            </div>
            <div className='absolute top-[1.375rem] left-[4.25rem] flex flex-row items-center space-x-[0.25rem]'>
              <Pickup2 className='size-[1.5rem]' />
              <p className='w-[3rem] pb-[1.5rem] text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
                Khau Coc Cha
              </p>
            </div>
            <div className='absolute top-[4rem] left-[7.825rem] flex flex-col items-center space-x-[0.25rem]'>
              <Pickup2 className='size-[1.5rem]' />
              <p className='mr-[2rem] text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
                Suối Lenin
              </p>
            </div>
            <div className='absolute top-[4.25rem] left-[11.25rem] flex flex-col items-center space-y-[0.25rem]'>
              <p className='w-[3.8125rem] text-center text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
                Good eyes mountain
              </p>
              <Pickup2 className='size-[1.5rem]' />
            </div>
            <div className='absolute top-[8.25rem] left-[15.25rem] flex flex-col items-center space-y-[0.25rem]'>
              <Pickup2 className='size-[2rem]' />
              <p className='w-[3.375rem] text-center text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
                Cao Bang City
              </p>
            </div>
            <div className='absolute top-[4.25rem] left-[15rem] flex flex-col items-center space-y-[0.25rem]'>
              <p className='mr-[2rem] w-[3.8125rem] text-center text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
                Núi Thung Phja Piot
              </p>
              <Pickup2 className='size-[1.5rem]' />
            </div>
            <div className='absolute top-[2.25rem] left-[18rem] flex items-center space-x-[0.25rem]'>
              <Bed2 className='size-[1.5rem]' />
              <p className='w-[3rem] pb-[1rem] text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
                Thac ba ban gioc
              </p>
            </div>
            <div className='absolute top-[4.25rem] left-[19rem] flex items-center space-x-[0.25rem]'>
              <Pickup2 className='size-[1.5rem]' />
            </div>
            <div className='absolute top-[6rem] left-[16.825rem] flex flex-col items-center space-y-[0.25rem]'>
              <Pickup2 className='size-[1.5rem]' />
              <p className='ml-[3.5rem] w-[4.5625rem] text-center text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
                Dong Nguom Ngao
              </p>
            </div>
            <div className='absolute top-[3rem] left-[25.25rem] flex items-center space-x-[0.25rem]'>
              <Pickup2 className='size-[1.5rem]' />
              <p className='w-[3.0625rem] pb-[1rem] text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
                Ma Phuc Pass
              </p>
            </div>
          </div>
        </div>
        <div className='pointer-events-none absolute bottom-[-8.35rem] left-[18rem]'>
          <BacKanMap
            className='h-[19.175rem] w-[17.125rem]'
            isActive={activeMap === 'bac-kan'}
            onClick={() => setActiveMap('bac-kan')}
          />
          <div
            className={cn(
              'z-[20] transition-all duration-300',
              activeMap === 'bac-kan' ? 'opacity-100' : 'opacity-80',
            )}
          >
            <div className='absolute top-[2.875rem] left-[3.575rem] flex flex-col items-center space-y-[0.25rem]'>
              <p className='text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
                Ho Ba Be
              </p>
              <Pickup3 className='size-[1.5rem]' />
            </div>
            <div className='absolute top-[5.875rem] left-[1.875rem] flex flex-col items-center space-y-[0.25rem]'>
              <Bed3 className='size-[1.5rem]' />
              <p className='text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
                Ho Ba Be
              </p>
            </div>
            <div className='absolute top-[9.675rem] left-[8.275rem] flex flex-row items-center space-x-[0.25rem]'>
              <Pickup3 className='size-[2rem]' />
              <p className='text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
                Bac Kan
              </p>
            </div>
          </div>
        </div>
        <Compass className='absolute top-0 right-[-13.875rem] size-[3.8125rem]' />
      </div>

      <div className='absolute bottom-[28rem] left-[6.25rem] size-[19.29456rem] rounded-[0.75rem] bg-black/18 p-[0.75rem]'>
        <Link href={'/'}>
          <div className='group relative h-[14.25463rem] w-[17.8175rem] overflow-hidden rounded-[0.65rem]'>
            <div
              className='absolute top-0 left-0 z-[1] h-[4.37656rem] w-full rounded-[0.65rem] opacity-40'
              style={{
                background:
                  'linear-gradient(180deg, #000 33.34%, rgba(0, 0, 0, 0.00) 78.45%)',
              }}
            />
            <Image
              src={'/card-default.webp'}
              alt='card-default'
              fill
              className='rounded-[0.65rem] object-cover object-center transition-transform duration-500 group-hover:scale-110'
            />
            <p className='absolute top-[0.875rem] left-[1rem] z-[2] text-[0.875rem] leading-[1.3125rem] font-extrabold text-white'>
              Du Gia Village
            </p>
          </div>
        </Link>

        <div className='mt-[0.75rem] flex items-center justify-between'>
          <article className='space-y-[0.175rem]'>
            <h4 className='leading-[1.5rem] font-extrabold text-white uppercase'>
              Ha giang tours
            </h4>
            <p className='text-[0.75rem] leading-[1.125rem] text-white'>
              24 tours for you
            </p>
          </article>
          <Link
            href={'/'}
            className='rounded-full bg-[#C83E21] p-[0.5rem] transition-opacity duration-300 hover:opacity-80'
          >
            <ArrowRight className='size-[1.10781rem]' />
          </Link>
        </div>
      </div>
    </section>
  )
}

const ArrowRight = ({className}: {className: string}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='19'
      height='18'
      viewBox='0 0 19 18'
      fill='none'
      className={className}
    >
      <path
        d='M4.87109 9.11072H13.976M13.976 9.11072L10.334 5.46875M13.976 9.11072L10.334 12.7527'
        stroke='white'
        strokeWidth='1.4771'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const Compass = ({className}: {className: string}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='62'
      height='62'
      viewBox='0 0 62 62'
      fill='none'
      className={className}
    >
      <path
        d='M54.1795 36.1303C53.9375 36.0583 53.6767 36.085 53.4543 36.2047C53.232 36.3243 53.066 36.5272 52.9929 36.7689C51.9565 40.2276 50.0775 43.3747 47.5243 45.9277C44.9712 48.4806 41.824 50.3595 38.3652 51.3956C38.1496 51.4647 37.9654 51.6081 37.8456 51.8003C37.7258 51.9925 37.6782 52.221 37.7111 52.4451C37.7441 52.6692 37.8555 52.8742 38.0256 53.0238C38.1957 53.1734 38.4133 53.2577 38.6397 53.2618C42.4638 52.1874 45.9532 50.1616 48.7823 47.3735C51.6114 44.5853 53.688 41.1259 54.8181 37.3179C54.8542 37.198 54.8663 37.0722 54.8537 36.9476C54.8412 36.823 54.8042 36.7021 54.7449 36.5918C54.6856 36.4815 54.6051 36.384 54.5081 36.3048C54.4111 36.2256 54.2994 36.1663 54.1795 36.1303ZM25.6334 51.3956C22.1746 50.3594 19.0273 48.4804 16.4741 45.9272C13.921 43.3741 12.042 40.2268 11.0058 36.768C10.9329 36.5259 10.7668 36.3228 10.5441 36.2032C10.3213 36.0836 10.0602 36.0574 9.8182 36.1303C9.57616 36.2033 9.373 36.3694 9.25342 36.5921C9.13384 36.8148 9.10763 37.0759 9.18055 37.3179C10.3071 41.0783 12.35 44.4999 15.1257 47.2757C17.9014 50.0514 21.3231 52.0942 25.0834 53.2208C25.3255 53.2937 25.5866 53.2675 25.8093 53.148C26.032 53.0284 26.1981 52.8252 26.271 52.5832C26.344 52.3411 26.3178 52.08 26.1982 51.8573C26.0786 51.6346 25.8754 51.4685 25.6334 51.3956ZM38.3652 9.40852C41.824 10.4444 44.9713 12.3233 47.5245 14.8763C50.0777 17.4293 51.9567 20.5765 52.9929 24.0352C53.0687 24.2736 53.2352 24.4726 53.4565 24.5893C53.6778 24.706 53.9361 24.731 54.1757 24.659C54.4152 24.5869 54.6169 24.4236 54.7371 24.2041C54.8572 23.9847 54.8863 23.7269 54.8181 23.4862C53.6917 19.7258 51.6488 16.304 48.8731 13.5283C46.0974 10.7525 42.6756 8.7097 38.9152 7.58328C38.6732 7.51035 38.4121 7.53656 38.1893 7.65614C37.9666 7.77572 37.8005 7.97888 37.7276 8.22092C37.6547 8.46296 37.6809 8.72406 37.8005 8.94678C37.92 9.1695 38.1232 9.33559 38.3652 9.40852ZM9.81915 24.6738C10.0612 24.7461 10.322 24.7195 10.5445 24.5998C10.7669 24.4801 10.9328 24.277 11.0058 24.0352C12.0419 20.5765 13.921 17.4293 16.4741 14.8763C19.0273 12.3233 22.1746 10.4444 25.6334 9.40852C25.7532 9.37241 25.8648 9.31304 25.9617 9.23382C26.0586 9.15459 26.139 9.05706 26.1982 8.94678C26.2574 8.8365 26.2943 8.71564 26.3068 8.5911C26.3193 8.46655 26.3071 8.34077 26.271 8.22092C26.2349 8.10108 26.1756 7.98952 26.0963 7.89261C26.0171 7.79571 25.9196 7.71535 25.8093 7.65614C25.699 7.59693 25.5782 7.56002 25.4536 7.54752C25.3291 7.53502 25.2033 7.54717 25.0834 7.58328C21.323 8.7097 17.9013 10.7525 15.1255 13.5283C12.3498 16.304 10.307 19.7258 9.18055 23.4862C9.14446 23.6061 9.13235 23.7319 9.14491 23.8565C9.15747 23.9811 9.19447 24.102 9.25377 24.2123C9.31308 24.3226 9.39353 24.4201 9.49054 24.4993C9.58755 24.5785 9.69921 24.6378 9.81915 24.6738ZM31.9993 19.8328C31.6256 19.8284 31.2581 19.9284 30.9382 20.1216C30.6182 20.3147 30.3585 20.5933 30.1884 20.9261L21.4902 38.1624C21.3266 38.526 21.2758 38.9304 21.3446 39.3232C21.4134 39.716 21.5984 40.0791 21.8758 40.3656C22.1532 40.652 22.5102 40.8486 22.9006 40.9299C23.291 41.0112 23.6968 40.9735 24.0655 40.8216L32.0003 37.6754L39.935 40.8226C40.3039 40.9757 40.7103 41.0143 41.1013 40.9333C41.4924 40.8524 41.8501 40.6557 42.1278 40.3687C42.4056 40.0818 42.5906 39.718 42.6589 39.3245C42.7271 38.931 42.6754 38.5261 42.5104 38.1624L33.8103 20.9261C33.6401 20.5933 33.3804 20.3147 33.0605 20.1216C32.7405 19.9284 32.373 19.8284 31.9993 19.8328ZM40.6375 39.0498L32.3501 35.7634C32.1244 35.6741 31.8733 35.6741 31.6476 35.7634L23.3612 39.0498C23.3338 39.0649 23.3021 39.0703 23.2713 39.0651C23.2405 39.0599 23.2124 39.0444 23.1915 39.0212L31.8907 21.7848C31.9013 21.7654 31.9171 21.7491 31.9362 21.7378C31.9553 21.7265 31.9771 21.7205 31.9993 21.7205C32.0215 21.7205 32.0433 21.7265 32.0625 21.7378C32.0816 21.7491 32.0973 21.7654 32.108 21.7848L40.8062 39.0173C40.7858 39.0408 40.758 39.0568 40.7274 39.0627C40.6969 39.0686 40.6652 39.064 40.6375 39.0498ZM55.6273 31.3552C55.8801 31.3552 56.1225 31.2548 56.3013 31.076C56.48 30.8973 56.5804 30.6548 56.5804 30.4021C56.5804 30.1493 56.48 29.9068 56.3013 29.7281C56.1225 29.5493 55.8801 29.4489 55.6273 29.4489H52.4V27.7657H55.6273C55.8801 27.7657 56.1225 27.6653 56.3013 27.4865C56.48 27.3078 56.5804 27.0654 56.5804 26.8126C56.5804 26.5598 56.48 26.3174 56.3013 26.1386C56.1225 25.9599 55.8801 25.8595 55.6273 25.8595H52.3076C51.8267 25.8602 51.3658 26.0516 51.0258 26.3915C50.6859 26.7315 50.4945 27.1924 50.4938 27.6733V33.1299C50.4943 33.6109 50.6855 34.072 51.0255 34.4122C51.3655 34.7524 51.8266 34.9439 52.3076 34.9446H55.6273C55.8801 34.9446 56.1225 34.8442 56.3013 34.6655C56.48 34.4867 56.5804 34.2443 56.5804 33.9915C56.5804 33.7387 56.48 33.4963 56.3013 33.3176C56.1225 33.1388 55.8801 33.0384 55.6273 33.0384H52.4V31.3552H55.6273ZM31.5475 50.0574H34.1763C34.429 50.0574 34.6715 49.957 34.8502 49.7782C35.029 49.5995 35.1294 49.3571 35.1294 49.1043C35.1294 48.8515 35.029 48.6091 34.8502 48.4303C34.6715 48.2516 34.429 48.1511 34.1763 48.1511H31.5475C27.9867 48.1921 27.9876 53.745 31.5475 53.786H32.4511C32.6559 53.786 32.8522 53.8674 32.997 54.0121C33.1418 54.1569 33.2231 54.3533 33.2231 54.5581C33.2231 54.7628 33.1418 54.9592 32.997 55.104C32.8522 55.2487 32.6559 55.3301 32.4511 55.3301H29.8224C29.5696 55.3301 29.3272 55.4305 29.1484 55.6092C28.9697 55.788 28.8693 56.0304 28.8693 56.2832C28.8693 56.536 28.9697 56.7784 29.1484 56.9572C29.3272 57.1359 29.5696 57.2363 29.8224 57.2363H32.4511C33.1614 57.2363 33.8427 56.9542 34.3449 56.4519C34.8472 55.9496 35.1294 55.2684 35.1294 54.5581C35.1294 53.8477 34.8472 53.1665 34.3449 52.6642C33.8427 52.1619 33.1614 51.8798 32.4511 51.8798H31.5475C31.3428 51.8798 31.1464 51.7984 31.0016 51.6536C30.8568 51.5089 30.7755 51.3125 30.7755 51.1077C30.7451 50.987 30.7418 50.861 30.7658 50.7387C30.7897 50.6165 30.8404 50.5011 30.9142 50.4008C30.9879 50.3004 31.083 50.2176 31.1925 50.1582C31.3019 50.0989 31.4232 50.0644 31.5475 50.0574ZM29.9263 12.9465C30.0514 12.9465 30.1754 12.9219 30.291 12.874C30.4067 12.8261 30.5117 12.7559 30.6002 12.6674C30.6887 12.5788 30.7589 12.4738 30.8068 12.3581C30.8547 12.2425 30.8794 12.1186 30.8794 11.9934V8.37056L33.247 12.47C33.3519 12.6516 33.5138 12.7936 33.7076 12.8739C33.9015 12.9542 34.1164 12.9683 34.3191 12.914C34.5217 12.8597 34.7008 12.74 34.8285 12.5736C34.9562 12.4071 35.0255 12.2032 35.0255 11.9934V4.81445C35.0255 4.56167 34.9251 4.31924 34.7463 4.14049C34.5676 3.96175 34.3252 3.86133 34.0724 3.86133C33.8196 3.86133 33.5772 3.96175 33.3984 4.14049C33.2197 4.31924 33.1192 4.56167 33.1192 4.81445V8.43728L30.7517 4.33789C30.6445 4.15974 30.4823 4.02129 30.2895 3.94346C30.0967 3.86563 29.8838 3.85264 29.683 3.90645C29.4821 3.96026 29.3043 4.07796 29.1762 4.24176C29.0482 4.40556 28.9769 4.60658 28.9731 4.81445V11.9934C28.9731 12.2462 29.0736 12.4886 29.2523 12.6674C29.4311 12.8461 29.6735 12.9465 29.9263 12.9465ZM11.9618 34.2946C12.0279 34.4816 12.1503 34.6435 12.3122 34.758C12.4741 34.8725 12.6675 34.9339 12.8658 34.9339C13.0641 34.9339 13.2575 34.8725 13.4194 34.758C13.5813 34.6435 13.7038 34.4816 13.7699 34.2946L16.1746 27.1147C16.2548 26.875 16.2366 26.6131 16.1238 26.3868C16.011 26.1605 15.8129 25.9883 15.5732 25.9081C15.3334 25.8278 15.0716 25.8461 14.8453 25.9589C14.619 26.0717 14.4468 26.2697 14.3665 26.5095L12.8663 30.9892L11.3651 26.5095C11.2988 26.3228 11.1764 26.1613 11.0146 26.0471C10.8528 25.9328 10.6596 25.8715 10.4616 25.8715C10.2635 25.8715 10.0703 25.9328 9.90851 26.0471C9.74672 26.1613 9.62427 26.3228 9.55799 26.5095L8.05682 30.9892L6.5566 26.5095C6.47634 26.2697 6.30412 26.0717 6.07783 25.9589C5.85154 25.8461 5.58971 25.8278 5.34995 25.9081C5.11018 25.9883 4.91212 26.1605 4.79933 26.3868C4.68654 26.6131 4.66826 26.875 4.74852 27.1147L7.15326 34.2937C7.21954 34.4803 7.34198 34.6418 7.50378 34.7561C7.66557 34.8703 7.85876 34.9316 8.05682 34.9316C8.25488 34.9316 8.44807 34.8703 8.60987 34.7561C8.77166 34.6418 8.89411 34.4803 8.96038 34.2937L10.4616 29.814L11.9618 34.2946Z'
        fill='#2E2E2E'
      />
    </svg>
  )
}

export default Delivers
