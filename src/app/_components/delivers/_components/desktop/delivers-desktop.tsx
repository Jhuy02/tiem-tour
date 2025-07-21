'use client'

import DeliversBackground from '@/app/_components/delivers/_components/desktop/delivers-background'
import DeliversCard from '@/app/_components/delivers/_components/desktop/delivers-card'
import DeliversHeader from '@/app/_components/delivers/_components/desktop/delivers-header'
import DeliversMapContainer from '@/app/_components/delivers/_components/desktop/delivers-map-container'
import {useDelivers} from '@/hooks/use-delivers'
import {ILocations} from '@/types/delivers.interface'

interface DeliversDesktopProps {
  locations: ILocations[]
}

const DeliversDesktop = ({locations}: DeliversDesktopProps) => {
  const {
    activeMap,
    setActiveMap,
    setHoveredPlace,
    currentImage,
    isImageChanging,
    province,
    tour,
  } = useDelivers(locations)

  return (
    <section className='xsm:hidden relative mt-[-30rem] h-[80.875rem] w-full'>
      <DeliversBackground />
      <DeliversHeader />

      <DeliversMapContainer
        activeMap={activeMap}
        setActiveMap={setActiveMap}
        setHoveredPlace={setHoveredPlace}
      />

      <DeliversCard
        province={province}
        tour={tour}
        currentImage={currentImage}
        isImageChanging={isImageChanging}
      />
    </section>
  )
}

export default DeliversDesktop
