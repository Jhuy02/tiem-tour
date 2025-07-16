'use client'
import React, {useState, createContext} from 'react'

export const PageContext = createContext(null)

export default function PageProvider({children}) {
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
