'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {Separator} from '@/components/ui/separator'
import useIsMobile from '@/hooks/useIsMobile'
import {IDiscoverLocation, IDiscoverPackage} from '@/types/discover.interface'

import {Drawer, DrawerContent, DrawerTrigger} from '@/components/ui/drawer'
import {ChevronDown} from 'lucide-react'
import {useState} from 'react'
import {cn} from '@/lib/utils'

const Filter = ({
  location,
  packageData,
  activePackage,
  onPackageChange,
  activeLocation,
  onLocationChange,
}: {
  location: IDiscoverLocation[]
  packageData: IDiscoverPackage[]
  activePackage: string
  onPackageChange: (slug: string) => void
  activeLocation: string
  onLocationChange: (slug: string) => void
}) => {
  const isMobile = useIsMobile()
  const WIDTH_PACKAGE = isMobile ? 7.325 : 8.125

  const [packageMobile, setPackageMobile] = useState('All Destination')
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='xsm:flex-col xsm:bg-transparent xsm:p-0 flex items-center rounded-[0.625rem] bg-[#191A1A47] p-[0.25rem]'>
      {isMobile ? (
        <Drawer
          open={isOpen}
          onOpenChange={setIsOpen}
        >
          <DrawerTrigger asChild>
            <div className='flex h-[2.8125rem] w-full items-center justify-between rounded-[0.5rem] border-[0.5px] border-[#74FFF6] bg-[#026B6A59] px-[1rem] py-[0.8125rem]'>
              <p className='leading-[1.3125rem ] text-[0.875rem] font-medium tracking-[-0.00438rem] text-[#F4ECDC]'>
                {packageMobile}
              </p>
              <ChevronDown className='size-[1.125rem] text-[#F4ECDC]' />
            </div>
          </DrawerTrigger>
          <DrawerContent className='space-y-[1.125rem] p-[1rem]'>
            <div
              className={cn(
                `h-[2.8125rem] rounded-[0.5rem] px-[0.75rem] py-[1rem]`,
                packageMobile === 'All Destination'
                  ? 'bg-[#19C2C2] text-white'
                  : 'bg-white text-[#303030]',
              )}
              onClick={() => {
                setPackageMobile('All Destination')
                setIsOpen(false)
                onLocationChange('all')
              }}
            >
              <p className='leading-[1.2rem] font-bold tracking-[0.0025rem]'>
                All Destination
              </p>
            </div>
            {location.map((item) => (
              <div
                key={item.id}
                className={cn(
                  `h-[2.8125rem] transform rounded-[0.5rem] px-[0.75rem] py-[1rem] transition-all duration-300`,
                  packageMobile === item.name
                    ? 'bg-[#19C2C2] text-white'
                    : 'bg-white text-[#303030]',
                )}
                onClick={() => {
                  setPackageMobile(item.name)
                  setIsOpen(false)
                  onLocationChange(item.slug)
                }}
              >
                <p className='text-[1rem] leading-[1.2rem] font-bold tracking-[0.0025rem]'>
                  {item.name}
                </p>
              </div>
            ))}
          </DrawerContent>
        </Drawer>
      ) : (
        <Select
          value={activeLocation}
          onValueChange={onLocationChange}
        >
          <SelectTrigger className='h-[2.8125rem] w-[11.6875rem] rounded-[0.5rem] border-[0.5px] border-[#74FFF6]! bg-[#026B6A59] px-[1rem] py-[0.875rem] text-[1rem] leading-[1.2rem] font-medium tracking-[0.0025rem] text-[#F4ECDC]! outline-0 focus-visible:ring-0 [&_svg]:size-[1.125rem] [&_svg]:text-[#F4ECDC]! [&_svg]:opacity-100'>
            <SelectValue placeholder='All Destination' />
          </SelectTrigger>
          <SelectContent className='w-[16.4375rem] space-y-[0.25rem] rounded-[0.75rem] bg-[#fff] p-[0.5rem]'>
            <SelectItem
              value='all'
              className='h-[2.8125rem] transform rounded-[0.5rem] bg-[#fff] py-[1rem] text-[1rem] leading-[1.2rem] tracking-[0.0025rem] text-[#303030] transition-all duration-300 focus:bg-[#19C2C2] focus:text-white'
            >
              All Destination
            </SelectItem>
            {location.map((item) => (
              <SelectItem
                key={item.id}
                value={item.slug}
                className='h-[2.8125rem] transform rounded-[0.5rem] bg-[#fff] py-[1rem] text-[1rem] leading-[1.2rem] tracking-[0.0025rem] text-[#303030] transition-all duration-300 focus:bg-[#19C2C2] focus:text-white'
              >
                {item.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}

      <Separator
        orientation='vertical'
        className='xsm:hidden mx-[1rem] h-[1.75rem]! w-[0.0625rem] opacity-10'
      />

      <div className='xsm:mt-[1rem] relative flex items-center'>
        {/* Background động */}
        <div
          className='xsm:w-[7.325rem] absolute top-0 left-0 h-full w-[8.125rem] rounded-[0.5rem] transition-all duration-300'
          style={{
            transform: `translateX(${packageData.findIndex((item) => item.slug === activePackage) * WIDTH_PACKAGE}rem)`,
            background: 'linear-gradient(180deg, #F4F5E6 0%, #B2DFDC 100%)',
            zIndex: 0,
          }}
        />
        {/* Các tab */}
        {packageData.map((item) => (
          <div
            key={item.id}
            className={`xsm:w-[7.325rem] relative z-10 flex h-[2.8125rem] w-[8.125rem] cursor-pointer items-center justify-center rounded-[0.5rem]`}
            onClick={() => onPackageChange(item.slug as any)}
          >
            {item.slug === 'premium' && activePackage !== 'premium' && (
              <Crown className={`mr-[0.625rem] size-[1.25rem]`} />
            )}
            {item.slug === 'premium' && activePackage === 'premium' && (
              <CrownActive className={`mr-[0.625rem] size-[1.25rem]`} />
            )}
            <p
              className={`text-base leading-[1.2rem] font-bold tracking-[-0.02rem] uppercase ${
                activePackage === item.slug
                  ? 'text-[#092F1A]'
                  : 'text-[#fff]/40'
              }`}
            >
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

const Crown = ({className}: {className: string}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='21'
      viewBox='0 0 20 21'
      fill='none'
      className={className}
    >
      <path
        d='M1.77272 13.5707L0.632098 6.15694C0.613545 6.0355 0.631559 5.91129 0.683847 5.80012C0.736135 5.68896 0.820329 5.59588 0.925704 5.53273C1.03108 5.46959 1.15287 5.43924 1.27555 5.44555C1.39823 5.45187 1.51626 5.49456 1.6146 5.56819L5.16835 8.23319C5.26075 8.3023 5.36626 8.35187 5.47845 8.37888C5.59063 8.4059 5.70714 8.40979 5.82088 8.39031C5.93461 8.37084 6.0432 8.32841 6.14 8.26562C6.23681 8.20282 6.31982 8.12098 6.38397 8.02506L9.34272 3.58506C9.41485 3.47716 9.51247 3.38871 9.62694 3.32754C9.7414 3.26638 9.86919 3.23438 9.99897 3.23438C10.1288 3.23438 10.2565 3.26638 10.371 3.32754C10.4855 3.38871 10.5831 3.47716 10.6552 3.58506L13.614 8.02256C13.6781 8.11848 13.7611 8.20032 13.8579 8.26312C13.9548 8.32591 14.0633 8.36834 14.1771 8.38781C14.2908 8.40729 14.4073 8.4034 14.5195 8.37638C14.6317 8.34937 14.7372 8.2998 14.8296 8.23069L18.3833 5.56569C18.4817 5.49206 18.5997 5.44937 18.7224 5.44305C18.8451 5.43674 18.9669 5.46709 19.0722 5.53023C19.1776 5.59338 19.2618 5.68646 19.3141 5.79762C19.3664 5.90879 19.3844 6.033 19.3658 6.15444L18.2252 13.5682L1.77272 13.5707ZM1.77272 14.9419H18.2265V16.8263C18.2265 16.939 18.2043 17.0506 18.1612 17.32547C18.118 17.2588 18.0548 17.3534 17.9751 17.4331C17.8955 17.5128 17.8008 17.576 17.6967 17.6191C17.5926 17.6622 17.481 17.6844 17.3683 17.6844H2.63085C2.51816 17.6844 2.40657 17.6622 2.30246 17.6191C2.19835 17.576 2.10375 17.5128 2.02406 17.4331C1.86313 17.2722 1.77272 17.0539 1.77272 16.8263V14.9419Z'
        fill='white'
        fillOpacity='0.4'
      />
    </svg>
  )
}

const CrownActive = ({className}: {className: string}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='15'
      viewBox='0 0 20 15'
      fill='none'
      className={className}
    >
      <path
        d='M1.77272 10.6097L0.632098 3.196C0.613545 3.07456 0.631559 2.95035 0.683847 2.83919C0.736135 2.72802 0.820329 2.63494 0.925704 2.5718C1.03108 2.50865 1.15287 2.4783 1.27555 2.48462C1.39823 2.49093 1.51626 2.53362 1.6146 2.60725L5.16835 5.27225C5.26075 5.34136 5.36626 5.39093 5.47845 5.41795C5.59063 5.44496 5.70714 5.44885 5.82088 5.42938C5.93461 5.4099 6.0432 5.36748 6.14 5.30468C6.23681 5.24189 6.31982 5.16004 6.38397 5.06412L9.34272 0.624123C9.41485 0.516225 9.51247 0.427776 9.62694 0.366607C9.7414 0.305439 9.86919 0.273438 9.99897 0.273438C10.1288 0.273438 10.2565 0.305439 10.371 0.366607C10.4855 0.427776 10.5831 0.516225 10.6552 0.624123L13.614 5.06162C13.6781 5.15754 13.7611 5.23939 13.8579 5.30218C13.9548 5.36498 14.0633 5.4074 14.1771 5.42688C14.2908 5.44635 14.4073 5.44246 14.5195 5.41545C14.6317 5.38843 14.7372 5.33886 14.8296 5.26975L18.3833 2.60475C18.4817 2.53112 18.5997 2.48843 18.7224 2.48212C18.8451 2.4758 18.9669 2.50615 19.0722 2.5693C19.1776 2.63244 19.2618 2.72552 19.3141 2.83669C19.3664 2.94785 19.3844 3.07206 19.3658 3.1935L18.2252 10.6072L1.77272 10.6097ZM1.77272 11.981H18.2265V13.8654C18.2265 13.9781 18.2043 14.0897 18.1612 14.1938C18.118 14.2979 18.0548 14.3925 17.9751 14.4722C17.8955 14.5518 17.8008 14.6151 17.6967 14.6582C17.5926 14.7013 17.481 14.7235 17.3683 14.7235H2.63085C2.51816 14.7235 2.40657 14.7013 2.30246 14.6582C2.19835 14.6151 2.10375 14.5518 2.02406 14.4722C1.86313 14.3112 1.77272 14.093 1.77272 13.8654V11.981Z'
        fill='url(#paint0_linear_2662_25683)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_2662_25683'
          x1='9.99897'
          y1='0.273437'
          x2='9.99897'
          y2='14.7235'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#DA4B24' />
          <stop
            offset='1'
            stopColor='#D07D29'
          />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Filter
