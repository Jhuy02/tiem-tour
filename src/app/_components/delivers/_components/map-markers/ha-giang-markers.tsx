import {
  Bed,
  Pickup,
  PickupStar,
} from '@/app/_components/delivers/_components/ha-giang-map'

interface HaGiangMarkersProps {
  setHoveredPlace: (place: string | null) => void
}

const HaGiangMarkers = ({setHoveredPlace}: HaGiangMarkersProps) => {
  return (
    <>
      <div
        className='absolute top-[-1.5rem] left-[15.75rem] flex cursor-pointer flex-col items-center space-y-[0.175rem]'
        onMouseEnter={() => setHoveredPlace('lung-cu')}
        onMouseLeave={() => setHoveredPlace(null)}
      >
        <p className='text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-[#102601]'>
          Lung Cu
        </p>
        <PickupStar className='h-[1.98138rem] w-[1.65119rem]' />
      </div>
      <div
        className='absolute top-[3.675rem] left-[10.975rem] flex cursor-pointer flex-col items-center space-y-[0.175rem]'
        onMouseEnter={() => setHoveredPlace('dong-van-bed')}
        onMouseLeave={() => setHoveredPlace(null)}
      >
        <Bed className='size-[1.5rem]' />
        <p className='text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
          Dong Van
        </p>
      </div>
      <div
        className='absolute top-[3.175rem] left-[14.375rem] flex cursor-pointer flex-col space-y-[0.175rem]'
        onMouseEnter={() => setHoveredPlace('nho-que-river')}
        onMouseLeave={() => setHoveredPlace(null)}
      >
        <p className='text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
          Nho Que River
        </p>
        <Pickup className='size-[1.5rem]' />
      </div>
      <div
        className='absolute top-[4.875rem] left-[16.375rem] flex cursor-pointer flex-row items-center space-x-[0.25rem]'
        onMouseEnter={() => setHoveredPlace('dong-van')}
        onMouseLeave={() => setHoveredPlace(null)}
      >
        <Pickup className='size-[1.5rem]' />
        <p className='text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
          Dong Van
        </p>
      </div>
      <div
        className='absolute top-[8.675rem] left-[9.875rem] flex cursor-pointer flex-col items-center space-x-[0.25rem]'
        onMouseEnter={() => setHoveredPlace('yen-minh')}
        onMouseLeave={() => setHoveredPlace(null)}
      >
        <Pickup className='size-[1.5rem]' />
        <p className='text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
          Yen Minh
        </p>
      </div>
      <div
        className='absolute top-[7.875rem] left-[3.425rem] flex cursor-pointer flex-col items-center space-x-[0.25rem]'
        onMouseEnter={() => setHoveredPlace('lung-tam-linen-cooperative')}
        onMouseLeave={() => setHoveredPlace(null)}
      >
        <p className='w-[5.25rem] text-center text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
          Lung Tam linen cooperative
        </p>
        <Pickup className='size-[1.5rem]' />
      </div>
      <div
        className='absolute top-[9.875rem] left-[13rem] flex cursor-pointer flex-row items-center space-x-[0.25rem]'
        onMouseEnter={() => setHoveredPlace('meo-vac')}
        onMouseLeave={() => setHoveredPlace(null)}
      >
        <Pickup className='size-[1.5rem]' />
        <p className='text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
          Meo Vac
        </p>
      </div>
      <div
        className='absolute top-[9.875rem] left-[-1rem] flex cursor-pointer flex-row items-center space-x-[0.25rem]'
        onMouseEnter={() => setHoveredPlace('hidden-waterfall')}
        onMouseLeave={() => setHoveredPlace(null)}
      >
        <p className='w-[3.1875rem] pb-[2rem] text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
          Hidden Waterfall
        </p>
        <Pickup className='size-[1.5rem]' />
      </div>
      <div
        className='absolute top-[10.675rem] left-[6.675rem] flex cursor-pointer flex-col items-center space-x-[0.25rem]'
        onMouseEnter={() => setHoveredPlace('quan-ba')}
        onMouseLeave={() => setHoveredPlace(null)}
      >
        <Pickup className='size-[1.5rem]' />
        <p className='text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
          Quan Ba
        </p>
      </div>
      <div
        className='absolute top-[13.175rem] left-[8.675rem] flex cursor-pointer items-center space-x-[0.25rem]'
        onMouseEnter={() => setHoveredPlace('thai-an-commune')}
        onMouseLeave={() => setHoveredPlace(null)}
      >
        <Pickup className='size-[1.5rem]' />
        <p className='w-[3.5rem] text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
          Thai An Commune
        </p>
      </div>
      <div
        className='absolute top-[15.175rem] left-[12.975rem] flex cursor-pointer items-center space-x-[0.42025rem]'
        onMouseEnter={() => setHoveredPlace('du-gia-village')}
        onMouseLeave={() => setHoveredPlace(null)}
      >
        <Bed className='size-[1.5rem]' />
        <p className='w-[2.4375rem] text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
          Du Gia Village
        </p>
      </div>
      <div
        className='absolute top-[15.175rem] left-[2.575rem] flex cursor-pointer flex-col items-center space-y-[0.175rem]'
        onMouseEnter={() => setHoveredPlace('ha-giang')}
        onMouseLeave={() => setHoveredPlace(null)}
      >
        <Bed className='size-[1.5rem]' />
        <p className='text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
          Ha Giang
        </p>
      </div>
      <div
        className='absolute top-[15.675rem] left-[5.5rem] flex cursor-pointer flex-col items-center space-x-[0.25rem]'
        onMouseEnter={() => setHoveredPlace('ha-giang-city-km-0')}
        onMouseLeave={() => setHoveredPlace(null)}
      >
        <Pickup className='size-[2rem]' />
        <p className='w-[5.5rem] text-center text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
          Ha Giang City km 0
        </p>
      </div>
    </>
  )
}

export default HaGiangMarkers
