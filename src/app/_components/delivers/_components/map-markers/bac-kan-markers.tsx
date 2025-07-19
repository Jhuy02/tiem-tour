import {Bed3, Pickup3} from '@/app/_components/delivers/_components/bac-kan-map'

interface BacKanMarkersProps {
  setHoveredPlace: (place: string | null) => void
}

const BacKanMarkers = ({setHoveredPlace}: BacKanMarkersProps) => {
  return (
    <>
      <div
        className='absolute top-[2.875rem] left-[3.575rem] flex cursor-pointer flex-col items-center space-y-[0.25rem]'
        onMouseEnter={() => setHoveredPlace('ho-ba-be')}
        onMouseLeave={() => setHoveredPlace(null)}
      >
        <p className='text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
          Ho Ba Be
        </p>
        <Pickup3 className='size-[1.5rem]' />
      </div>
      <div
        className='absolute top-[5.875rem] left-[1.875rem] flex cursor-pointer flex-col items-center space-y-[0.25rem]'
        onMouseEnter={() => setHoveredPlace('ho-ba-be-bed')}
        onMouseLeave={() => setHoveredPlace(null)}
      >
        <Bed3 className='size-[1.5rem]' />
        <p className='text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
          Ho Ba Be
        </p>
      </div>
      <div
        className='absolute top-[9.675rem] left-[8.275rem] flex cursor-pointer flex-row items-center space-x-[0.25rem]'
        onMouseEnter={() => setHoveredPlace('bac-kan')}
        onMouseLeave={() => setHoveredPlace(null)}
      >
        <Pickup3 className='size-[2rem]' />
        <p className='text-[0.75rem] leading-[0.9rem] font-extrabold tracking-[0.00375rem] text-white'>
          Bac Kan
        </p>
      </div>
    </>
  )
}

export default BacKanMarkers
