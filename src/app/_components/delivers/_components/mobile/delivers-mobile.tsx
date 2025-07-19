'use client'

import MobileBackground from '@/app/_components/delivers/_components/mobile/mobile-background'
import MobileLocationCards from '@/app/_components/delivers/_components/mobile/mobile-location-cards'
import MobileMapSection from '@/app/_components/delivers/_components/mobile/mobile-map-section'
import {ILocations} from '@/types/delivers.interface'
import {useState} from 'react'

interface DeliversMobileProps {
  locations: ILocations[]
}

const DeliversMobile = ({locations}: DeliversMobileProps) => {
  const [selectedProvince, setSelectedProvince] = useState<
    'hagiang' | 'caobang' | 'backan'
  >('hagiang')

  return (
    <section className='relative h-[75.4375rem] w-full overflow-hidden'>
      <MobileBackground />
      <h3 className='font-dvn-luckiest-guy absolute top-[6rem] left-[0.75rem] w-[21.9375rem] text-[1.5625rem] leading-[2.03125rem] text-[#092F1A]'>
        Tiềm Tours delivers exciting trips while promoting local culture,
        ensuring unforgettable experiences for travelers.
      </h3>
      <MobileMapSection
        selectedProvince={selectedProvince}
        setSelectedProvince={setSelectedProvince}
      />
      <MobileLocationCards
        locations={locations}
        selectedProvince={selectedProvince}
      />
    </section>
  )
}

export default DeliversMobile
