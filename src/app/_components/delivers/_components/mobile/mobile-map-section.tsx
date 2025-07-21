import BacKanMobile from '@/app/_components/delivers/_components/map-markers/bac-kan-mobile'
import CaoBangMobile from '@/app/_components/delivers/_components/map-markers/cao-bang-mobile'
import HaGiangMobile from '@/app/_components/delivers/_components/map-markers/ha-giang-mobile'
import {cn} from '@/lib/utils'

interface MobileMapSectionProps {
  selectedProvince: 'hagiang' | 'caobang' | 'backan'
  setSelectedProvince: (province: 'hagiang' | 'caobang' | 'backan') => void
}

const MobileMapSection = ({
  selectedProvince,
  setSelectedProvince,
}: MobileMapSectionProps) => {
  return (
    <div className='absolute top-[18.25rem] left-[1.25rem]'>
      <div
        className={cn(
          'pointer-events-none relative z-[20] transition-all duration-300',
          selectedProvince === 'hagiang' ? 'opacity-100' : 'opacity-70',
        )}
      >
        <HaGiangMobile
          isActive={selectedProvince === 'hagiang'}
          onClick={() => setSelectedProvince('hagiang')}
          className='h-[11.87694rem] w-[10.73525rem]'
        />
      </div>
      <div
        className={cn(
          'pointer-events-none absolute top-[3.25rem] left-[6.5rem] transition-all duration-300',
          selectedProvince === 'caobang' ? 'opacity-100' : 'opacity-70',
        )}
      >
        <CaoBangMobile
          isActive={selectedProvince === 'caobang'}
          onClick={() => setSelectedProvince('caobang')}
          className='h-[7.376rem] w-[14.31175rem]'
        />
      </div>
      <div
        className={cn(
          'pointer-events-none absolute top-[7rem] left-[8rem] transition-all duration-300',
          selectedProvince === 'backan' ? 'opacity-100' : 'opacity-70',
        )}
      >
        <BacKanMobile
          isActive={selectedProvince === 'backan'}
          onClick={() => setSelectedProvince('backan')}
          className='h-[8.95369rem] w-[7.40594rem]'
        />
      </div>
    </div>
  )
}

export default MobileMapSection
