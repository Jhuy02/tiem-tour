'use client'
import {TourDetailApiResType} from '@/types/tours.interface'
import React, {createContext} from 'react'

export type PageContextType = {
  data: TourDetailApiResType
}

export const PageContext = createContext<PageContextType | null>(null)

export default function PageProvider({
  data,
  children,
}: {
  data: TourDetailApiResType
  children: React.ReactNode
}) {
  return <PageContext.Provider value={{data}}>{children}</PageContext.Provider>
}
