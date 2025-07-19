import {
  Bed2,
  Pickup2,
} from '@/app/_components/delivers/_components/cao-bang-map'

interface CaoBangMarkersProps {
  setHoveredPlace: (place: string | null) => void
}

const CaoBangMarkers = ({setHoveredPlace}: CaoBangMarkersProps) => {
  return (
    <>
      <div
        className='absolute top-[2.875rem] left-[2.375rem] flex cursor-pointer flex-row items-center space-x-[0.25rem]'
        onMouseEnter={() => setHoveredPlace('bao-lac-bed')}
        onMouseLeave={() => setHoveredPlace(null)}
      >
        <Bed2 className='size-[1.5rem]' />
        <p className='pt-[1rem] text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
          Bao Lac
        </p>
      </div>
      <div
        className='absolute top-[4.875rem] left-[2.875rem] flex cursor-pointer flex-row items-center space-x-[0.25rem]'
        onMouseEnter={() => setHoveredPlace('bao-lac')}
        onMouseLeave={() => setHoveredPlace(null)}
      >
        <Pickup2 className='size-[1.5rem]' />
        <p className='ml-[-0.5rem] translate-y-[1rem] text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
          Bao Lac
        </p>
      </div>
      <div
        className='absolute top-[1.375rem] left-[4.25rem] flex cursor-pointer flex-row items-center space-x-[0.25rem]'
        onMouseEnter={() => setHoveredPlace('khau-coc-cha')}
        onMouseLeave={() => setHoveredPlace(null)}
      >
        <Pickup2 className='size-[1.5rem]' />
        <p className='w-[3rem] pb-[1.5rem] text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
          Khau Coc Cha
        </p>
      </div>
      <div
        className='absolute top-[4rem] left-[7.825rem] flex cursor-pointer flex-col items-center space-x-[0.25rem]'
        onMouseEnter={() => setHoveredPlace('suoi-lenin')}
        onMouseLeave={() => setHoveredPlace(null)}
      >
        <Pickup2 className='size-[1.5rem]' />
        <p className='mr-[2rem] text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
          Suối Lenin
        </p>
      </div>
      <div
        className='absolute top-[4.25rem] left-[11.25rem] flex cursor-pointer flex-col items-center space-y-[0.25rem]'
        onMouseEnter={() => setHoveredPlace('good-eyes-mountain')}
        onMouseLeave={() => setHoveredPlace(null)}
      >
        <p className='w-[3.8125rem] text-center text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
          Good eyes mountain
        </p>
        <Pickup2 className='size-[1.5rem]' />
      </div>
      <div
        className='absolute top-[8.25rem] left-[15.25rem] flex cursor-pointer flex-col items-center space-y-[0.25rem]'
        onMouseEnter={() => setHoveredPlace('cao-bang-city')}
        onMouseLeave={() => setHoveredPlace(null)}
      >
        <Pickup2 className='size-[2rem]' />
        <p className='w-[3.375rem] text-center text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
          Cao Bang City
        </p>
      </div>
      <div
        className='absolute top-[4.25rem] left-[15rem] flex cursor-pointer flex-col items-center space-y-[0.25rem]'
        onMouseEnter={() => setHoveredPlace('nui-thung-phja-piot')}
        onMouseLeave={() => setHoveredPlace(null)}
      >
        <p className='mr-[2rem] w-[3.8125rem] text-center text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
          Núi Thung Phja Piot
        </p>
        <Pickup2 className='size-[1.5rem]' />
      </div>
      <div
        className='absolute top-[2.25rem] left-[18rem] flex cursor-pointer items-center space-x-[0.25rem]'
        onMouseEnter={() => setHoveredPlace('thac-ba-ban-gioc')}
        onMouseLeave={() => setHoveredPlace(null)}
      >
        <Bed2 className='size-[1.5rem]' />
        <p className='w-[3rem] pb-[1rem] text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
          Thac ba ban gioc
        </p>
      </div>
      <div
        className='absolute top-[4.25rem] left-[19rem] flex cursor-pointer items-center space-x-[0.25rem]'
        onMouseEnter={() => setHoveredPlace('thac-ba-ban-gioc')}
        onMouseLeave={() => setHoveredPlace(null)}
      >
        <Pickup2 className='size-[1.5rem]' />
      </div>
      <div
        className='absolute top-[6rem] left-[16.825rem] flex cursor-pointer flex-col items-center space-y-[0.25rem]'
        onMouseEnter={() => setHoveredPlace('dong-nguom-ngao')}
        onMouseLeave={() => setHoveredPlace(null)}
      >
        <Pickup2 className='size-[1.5rem]' />
        <p className='ml-[3.5rem] w-[4.5625rem] text-center text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
          Dong Nguom Ngao
        </p>
      </div>
      <div
        className='absolute top-[3rem] left-[25.25rem] flex cursor-pointer items-center space-x-[0.25rem]'
        onMouseEnter={() => setHoveredPlace('ma-phuc-pass')}
        onMouseLeave={() => setHoveredPlace(null)}
      >
        <Pickup2 className='size-[1.5rem]' />
        <p className='w-[3.0625rem] pb-[1rem] text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
          Ma Phuc Pass
        </p>
      </div>
    </>
  )
}

export default CaoBangMarkers
