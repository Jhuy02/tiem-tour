import Caution from '@/app/(main)/tours/[slug]/_components/common/Caution'
import React from 'react'

export default function ServiceReturnTripWithPersonalVehicle() {
  return (
    <div className='font-trip-sans'>
      <Caution content='NOTE: <strong>Bus service</strong> and <strong>Private transport</strong> are our services of picking up and dropping off passengers. In addition, customers can also use personal vehicles to travel.' />
    </div>
  )
}
