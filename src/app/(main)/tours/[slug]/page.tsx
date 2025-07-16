import BookTourNow from '@/app/(main)/tours/[slug]/BookTourNow'
import { InterGift, InterMotorcycle } from '@/types/tours.interface'

const MockMotorcycles: InterMotorcycle[] = [
  {name: 'Honda 110cc - Semi automatic', price: 250000},
  {name: 'Honda 111cc - Semi automatic', price: 260000},
  {name: 'Honda 112cc - Semi automatic', price: 270000},
  {name: 'Honda 1133cc - Semi automatic', price: 2880000},
]

const MockGifts: InterGift[] = [
  {name: 'Ha Giang Loop T-shirt', price: 100000},
  {name: 'Ha Giang Loop handbag', price: 200000},
  {name: 'Ha Giang Loop handbag', price: 200000},
]

export default function TourDetailPage() {
  return (
    <main className='my-[50vh]'>
      <BookTourNow
        motorcycles={MockMotorcycles}
        gifts={MockGifts}
      />
    </main>
  )
}
