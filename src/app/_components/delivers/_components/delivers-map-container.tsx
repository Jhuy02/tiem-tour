import {cn} from '@/lib/utils'
import {BacKanMap, Bed3, Pickup3} from './bac-kan-map'
import {Bed2, CaoBangMap, Pickup2} from './cao-bang-map'
import {Bed, HaGiangMap, Pickup, PickupStar} from './ha-giang-map'
import {Compass} from './icons'
import HaGiangMarkers from '@/app/_components/delivers/_components/map-markers/ha-giang-markers'
import CaoBangMarkers from '@/app/_components/delivers/_components/map-markers/cao-bang-markers'
import BacKanMarkers from '@/app/_components/delivers/_components/map-markers/bac-kan-markers'

interface DeliversMapContainerProps {
  activeMap: 'hagiang' | 'caobang' | 'backan'
  setActiveMap: (map: 'hagiang' | 'caobang' | 'backan') => void
  hoveredPlace: string | null
  setHoveredPlace: (place: string | null) => void
}

const DeliversMapContainer = ({
  activeMap,
  setActiveMap,
  hoveredPlace,
  setHoveredPlace,
}: DeliversMapContainerProps) => {
  return (
    <div className='absolute bottom-[29.1375rem] left-[45%] z-[20] translate-x-[-50%]'>
      {/* Ha Giang Map */}
      <div
        className={cn(
          'pointer-events-none relative',
          activeMap === 'hagiang' && 'z-[10]',
        )}
      >
        <HaGiangMap
          className={`h-[23.125rem] w-[26.1875rem]`}
          isActive={activeMap === 'hagiang'}
          onClick={() => setActiveMap('hagiang')}
        />
        <div
          className={cn(
            'z-[20] transition-all duration-300',
            activeMap === 'hagiang'
              ? 'pointer-events-auto opacity-100'
              : 'opacity-80',
          )}
        >
          <HaGiangMarkers setHoveredPlace={setHoveredPlace} />
        </div>
      </div>

      {/* Cao Bang Map */}
      <div className='pointer-events-none absolute bottom-[2.855rem] left-[15.425rem]'>
        <CaoBangMap
          className='h-[16.0625rem] w-[30.375rem]'
          isActive={activeMap === 'caobang'}
          onClick={() => setActiveMap('caobang')}
        />
        <div
          className={cn(
            'z-[20] transition-all duration-300',
            activeMap === 'caobang'
              ? 'pointer-events-auto opacity-100'
              : 'opacity-80',
          )}
        >
          <CaoBangMarkers setHoveredPlace={setHoveredPlace} />
        </div>
      </div>

      {/* Bac Kan Map */}
      <div className='pointer-events-none absolute bottom-[-8.35rem] left-[18rem]'>
        <BacKanMap
          className='h-[19.175rem] w-[17.125rem]'
          isActive={activeMap === 'backan'}
          onClick={() => setActiveMap('backan')}
        />
        <div
          className={cn(
            'z-[20] transition-all duration-300',
            activeMap === 'backan'
              ? 'pointer-events-auto opacity-100'
              : 'opacity-80',
          )}
        >
          <BacKanMarkers setHoveredPlace={setHoveredPlace} />
        </div>
      </div>

      <Compass className='absolute top-0 right-[-13.875rem] size-[3.8125rem]' />
    </div>
  )
}

export default DeliversMapContainer
