'use client'

import {ILocations} from '@/types/delivers.interface'
import useIsMobile from '@/hooks/useIsMobile'
import DeliversMobile from '@/app/_components/delivers/_components/mobile/delivers-mobile'
import DeliversDesktop from '@/app/_components/delivers/_components/desktop/delivers-desktop'

interface DeliversProps {
  locations: ILocations[]
}

const Delivers = ({locations}: DeliversProps) => {
  const isMobile = useIsMobile()

  if (isMobile) {
    return <DeliversMobile locations={locations} />
  }

  return <DeliversDesktop locations={locations} />
}

export default Delivers
