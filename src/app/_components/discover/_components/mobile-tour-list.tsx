import {IDiscoverTour} from '@/types/discover.interface'
import {Skeleton} from '@/components/ui/skeleton'
import TourCard from './tour-card'
import {useEffect, useRef} from 'react'

interface MobileTourListProps {
  tours: IDiscoverTour[]
  toursData: {data: IDiscoverTour[]} | null
  isLoading: boolean
  activeLocation: string
}

const MobileTourList = ({
  tours,
  toursData,
  isLoading,
  activeLocation,
}: MobileTourListProps) => {
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollLeft = 0
    }
  }, [activeLocation])

  return (
    <div
      ref={listRef}
      className='flex items-center space-x-[0.75rem] overflow-x-auto px-[0.75rem] hidden_scroll'
    >
      {isLoading ? (
        <>
          {Array.from({length: 4}).map((_, index) => (
            <Skeleton
              key={index}
              className='w-[19.6275rem] h-[30.3125rem] rounded-lg overflow-hidden animate-pulse shrink-0'
            />
          ))}
        </>
      ) : tours && !toursData ? (
        tours.map((tour) => (
          <TourCard
            key={tour.slug}
            tour={tour}
          />
        ))
      ) : toursData ? (
        toursData?.data?.map((tour: IDiscoverTour) => (
          <TourCard
            key={tour.slug}
            tour={tour}
          />
        ))
      ) : (
        <div>No tours found</div>
      )}
    </div>
  )
}

export default MobileTourList
