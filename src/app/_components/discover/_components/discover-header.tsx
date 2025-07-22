import Filter from '@/app/_components/discover/_components/filter'
import ImageFallback from '@/components/image/ImageFallback'
import {IDiscoverLocation, IDiscoverPackage} from '@/types/discover.interface'
import Image from 'next/image'

interface DiscoverHeaderProps {
  data: {
    title: string
    sub_title: string
  }
  location: IDiscoverLocation[]
  activeLocation: string
  packageData: IDiscoverPackage[]
  onLocationChange: (slug: string) => void
  activePackage: string
  onPackageChange: (slug: string) => void
}

const DiscoverHeader = ({
  data,
  location,
  activeLocation,
  packageData,
  onLocationChange,
  activePackage,
  onPackageChange,
}: DiscoverHeaderProps) => {
  return (
    <div className='discover__header'>
      <article className='discover__header-left'>
        <h2 className='discover__header-title'>
          <Image
            src={'/pattern.svg'}
            alt='pattern'
            width={64}
            height={64}
          />
          <span>{data.title}</span>
        </h2>
        <p className='discover__header-desc'>{data.sub_title}</p>
      </article>
      <article className='discover__header-right'>
        {/* {Array.isArray(location) &&
          location.map((loc, index) => (
            <div
              key={loc.id}
              className={`discover__header-right-item ${
                activeLocation === loc.slug || (!activeLocation && index === 0)
                  ? 'active'
                  : ''
              }`}
              onClick={() => onLocationChange(loc.slug)}
            >
              <ImageFallback
                src={loc.map_location}
                alt={loc.name}
                width={64}
                height={64}
              />
              <span>{loc.name}</span>
            </div>
          ))} */}
        <Filter
          location={location}
          packageData={packageData}
          activePackage={activePackage}
          onPackageChange={onPackageChange}
          activeLocation={activeLocation}
          onLocationChange={onLocationChange}
        />
      </article>
    </div>
  )
}

export default DiscoverHeader
