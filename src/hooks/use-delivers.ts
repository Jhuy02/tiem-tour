import {ILocations} from '@/types/delivers.interface'
import {useState, useEffect} from 'react'

export const useDelivers = (locations: ILocations[]) => {
  const [activeMap, setActiveMap] = useState<'hagiang' | 'caobang' | 'backan'>(
    'hagiang',
  )
  const [hoveredPlace, setHoveredPlace] = useState<string | null>(null)
  const [currentImage, setCurrentImage] = useState<string>('')
  const [isImageChanging, setIsImageChanging] = useState(false)

  const province = locations.find((location) => location.slug === activeMap)
  const tour = province?.children.find((child) => child.slug === hoveredPlace)

  const imageUrl =
    tour?.img.url || province?.tour?.thumbnail || '/card-default.webp'

  useEffect(() => {
    if (imageUrl !== currentImage) {
      setIsImageChanging(true)
      const timer = setTimeout(() => {
        setCurrentImage(imageUrl)
        setIsImageChanging(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [imageUrl, currentImage])

  return {
    activeMap,
    setActiveMap,
    hoveredPlace,
    setHoveredPlace,
    currentImage,
    isImageChanging,
    province,
    tour,
  }
}
