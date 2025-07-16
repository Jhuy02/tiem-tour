'use client'
import React, {useState, createContext, Dispatch, SetStateAction} from 'react'

type PageContextType = {
  showBookingFormMobile: boolean
  setShowBookingFormMobile: Dispatch<SetStateAction<boolean>>
}

export const PageContext = createContext<PageContextType | null>(null)

export default function PageProvider({children}: {children: React.ReactNode}) {
  const [showBookingFormMobile, setShowBookingFormMobile] =
    useState<boolean>(false)
  return (
    <PageContext.Provider
      value={{showBookingFormMobile, setShowBookingFormMobile}}
    >
      {children}
    </PageContext.Provider>
  )
}
