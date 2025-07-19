import MobileLocationCard from '@/app/_components/delivers/_components/mobile/mobile-location-card'
import {ILocations} from '@/types/delivers.interface'

interface MobileLocationCardsProps {
  locations: ILocations[]
  selectedProvince: 'hagiang' | 'caobang' | 'backan'
}

const MobileLocationCards = ({
  locations,
  selectedProvince,
}: MobileLocationCardsProps) => {
  const getAllImagesBySlug = (slug: string, locations: ILocations[]) => {
    const location = locations.find((loc) => loc.slug === slug)
    if (!location) return []

    return [
      {
        name: location.name,
        slug: location.slug,
        img: location.img,
        tourTitle: location.tour?.title || '',
        count: location.count,
      },
      ...location.children.map((child) => ({
        name: child.name,
        slug: child.slug,
        img: child.img,
        tourTitle: child.tour?.title || '',
        count: child.count,
      })),
    ]
  }

  return (
    <div className='hidden_scroll absolute right-0 bottom-[16.65rem] left-0 flex items-center space-x-[0.5rem] overflow-x-auto overflow-y-hidden px-[0.75rem]'>
      {getAllImagesBySlug(selectedProvince, locations).map((location) => (
        <MobileLocationCard
          key={location.slug}
          location={location}
          selectedProvince={selectedProvince}
        />
      ))}
    </div>
  )
}

export default MobileLocationCards
