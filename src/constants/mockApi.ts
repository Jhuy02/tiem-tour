export const TourPackageList = [
  {
    id: 1,
    name: 'Saving Package',
    slug: 'saving_package',
    images: Array.from({length: 10}, () => ({
      alt: '',
      url: '/tours/d_image1.png',
    })),
  },
  {
    id: 2,
    name: 'Budget Package',
    slug: 'budget_package',
    images: Array.from({length: 10}, () => ({
      alt: '',
      url: '/tours/d_image2.png',
    })),
  },
  {
    id: 3,
    name: 'Premium Package',
    slug: 'premium_package',
    images: Array.from({length: 10}, () => ({
      alt: '',
      url: '/tours/d_image3.png',
    })),
  },
]

export const TransportServiceList = [
  {id: 1, name: 'Use our bus service', slug: 'use_our_bus_service'},
  {id: 2, name: 'Private transport', slug: 'private_transport'},
  {id: 3, name: 'Use personal vehicle', slug: 'use_personal_vehicle'},
]

export const TransportVehicleList = [
  {
    id: 1,
    name: 'Limousine bus',
    slug: 'limousine_bus',
    startTime: '16:00',
    price: 300000,
  },
  {
    id: 2,
    name: 'VIP Cabin bus',
    slug: 'vip_cabin_bus',
    startTime: '17:00',
    price: 350000,
  },
  {
    id: 3,
    name: 'Luxury bus',
    slug: 'luxury_bus',
    startTime: '17:00',
    price: 350000,
  },
  {
    id: 4,
    name: 'Regular sleeping bus',
    slug: 'regular_sleeping_bus',
    startTime: '17:00',
    price: 350000,
  },
  {
    id: 5,
    name: 'VIP Cabin bus',
    slug: 'vip_cabin_bus2',
    startTime: '17:00',
    price: 350000,
  },
]
