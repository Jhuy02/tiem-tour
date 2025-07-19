'use client'

import {ILocations} from '@/types/delivers.interface'
import DeliversBackground from './_components/delivers-background'
import DeliversCard from './_components/delivers-card'
import DeliversHeader from './_components/delivers-header'
import DeliversMapContainer from './_components/delivers-map-container'
import {useDelivers} from './_components/use-delivers'

const Delivers = ({locations}: {locations: ILocations[]}) => {
  const {
    activeMap,
    setActiveMap,
    hoveredPlace,
    setHoveredPlace,
    currentImage,
    isImageChanging,
    province,
    tour,
  } = useDelivers(locations)

  return (
    <section className='relative h-[80.875rem] w-full'>
      <DeliversBackground />
      <DeliversHeader />

      <DeliversMapContainer
        activeMap={activeMap}
        setActiveMap={setActiveMap}
        hoveredPlace={hoveredPlace}
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

export default Delivers
