'use client'

import useIsMobile from '@/hooks/useIsMobile'
import HeaderMb from '@/layout/header/header-mb/HeaderMb'
import {DataOptions} from '@/types/options.interface'
import HeaderPc from './header-pc/HeaderPc'

export default function Header({dataOptions}: {dataOptions: DataOptions}) {
  const isMobile = useIsMobile()
  return isMobile ? (
    <HeaderMb
      HeaderMobile={dataOptions?.header_mobile}
      Location={dataOptions?.location}
    />
  ) : (
    <HeaderPc
      HeaderOption={dataOptions?.header_option}
      ImgLocation={dataOptions?.location}
    />
  )
}
