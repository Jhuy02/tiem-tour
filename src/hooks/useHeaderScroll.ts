import {useEffect, useState} from 'react'

export const useHeaderScroll = () => {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false)
  const [isToursActive, setIsToursActive] = useState(false)
  const [prevScrollY, setPrevScrollY] = useState(0)

  useEffect(() => {
    const handleToggleHeader = () => {
      const currentScrollY = window.scrollY
      if (Math.abs(currentScrollY - prevScrollY) <= 10) {
        if (currentScrollY > prevScrollY && currentScrollY >= 200) {
          setIsHeaderHidden(true)
        } else {
          setIsHeaderHidden(false)
        }
      }
      setPrevScrollY(currentScrollY)
    }

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('.header__left-nav-tour')) {
        setIsToursActive(false)
      }
    }

    window.addEventListener('scroll', handleToggleHeader)
    document.addEventListener('click', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleToggleHeader)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [prevScrollY])

  return {
    isHeaderHidden,
    isToursActive,
    setIsToursActive,
  }
}
