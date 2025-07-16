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
export const TourTypeList: {slug: string; name: string; popular: boolean}[] = [
  {
    name: 'Motorbike Tour',
    slug: 'motorbike_tour',
    popular: true,
  },
  {
    name: 'Car Tour',
    slug: 'car_tour',
    popular: false,
  },
]

export const CITY_LIST = [
  {id: 1, name: 'Hanoi', slug: 'hanoi'},
  {id: 2, name: 'Danang', slug: 'danang'},
  {id: 3, name: 'Haiphong', slug: 'haiphong'},
]
export const PickupAndDropOffBusServiceData = [
  {
    pickUpLocation: 'Hanoi',
    dropOffLocation: 'Hagiang',
    name: 'HaNoi city and airport',
    slug: 'hanoi_city_and_airport',
    data: [
      {
        route: 'Ha Noi → Ha Giang',
        rows: [...Array(5)].map(() => ({
          pickUpTime: '6:15',
          departureTime: '6:30',
          arrivalTime: '13:00',
          vehicleType: 'Limousine bus',
          pickUpPoint: '<p>Tran Nhat Duat street</p>',
          dropOffPoint: `
          <p>1. TiemTours office 92i Nguyễn Trãi</p>
          <p>2. Hà Giang bus station</p>
          <p>3. Homestays, hostels, hotels in downtown Hà Giang</p>
          `,
          price: 300000,
          recommend: true,
        })),
      },
      {
        route: 'Ha Giang → Ha Noi',
        rows: [...Array(5)].map(() => ({
          pickUpTime: '6:15',
          departureTime: '6:30',
          arrivalTime: '13:00',
          vehicleType: 'Limousine bus',
          pickUpPoint: '<p>Tran Nhat Duat street</p>',
          dropOffPoint: `
          <p>1. TiemTours office 92i Nguyễn Trãi</p>
          <p>2. Hà Giang bus station</p>
          <p>3. Homestays, hostels, hotels in downtown Hà Giang</p>
          `,
          price: 300000,
          recommend: false,
        })),
      },
    ],
  },
  {
    pickUpLocation: 'Sapa',
    dropOffLocation: 'Hagiang',
    name: 'Sapa',
    slug: 'sapa',
    data: [
      {
        route: 'Ha Noi → Ha Giang',
        rows: [...Array(5)].map(() => ({
          pickUpTime: '6:15',
          departureTime: '6:30',
          arrivalTime: '13:00',
          vehicleType: 'Limousine bus',
          pickUpPoint: '<p>Tran Nhat Duat street</p>',
          dropOffPoint: `
          <p>1. TiemTours office 92i Nguyễn Trãi</p>
          <p>2. Hà Giang bus station</p>
          <p>3. Homestays, hostels, hotels in downtown Hà Giang</p>
          `,
          price: 300000,
          recommend: true,
        })),
      },
      {
        route: 'Ha Giang → Ha Noi',
        rows: [...Array(5)].map(() => ({
          pickUpTime: '6:15',
          departureTime: '6:30',
          arrivalTime: '13:00',
          vehicleType: 'Limousine bus',
          pickUpPoint: '<p>Tran Nhat Duat street</p>',
          dropOffPoint: `
          <p>1. TiemTours office 92i Nguyễn Trãi</p>
          <p>2. Hà Giang bus station</p>
          <p>3. Homestays, hostels, hotels in downtown Hà Giang</p>
          `,
          price: 300000,
          recommend: false,
        })),
      },
    ],
  },
  {
    pickUpLocation: 'Ninhbinh',
    dropOffLocation: 'Hagiang',
    name: 'NinhBinh',
    slug: 'ninhbinh',
    data: [
      {
        route: 'Ha Noi → Ha Giang',
        rows: [...Array(5)].map(() => ({
          pickUpTime: '6:15',
          departureTime: '6:30',
          arrivalTime: '13:00',
          vehicleType: 'Limousine bus',
          pickUpPoint: '<p>Tran Nhat Duat street</p>',
          dropOffPoint: `
          <p>1. TiemTours office 92i Nguyễn Trãi</p>
          <p>2. Hà Giang bus station</p>
          <p>3. Homestays, hostels, hotels in downtown Hà Giang</p>
          `,
          price: 300000,
          recommend: true,
        })),
      },
      {
        route: 'Ha Giang → Ha Noi',
        rows: [...Array(5)].map(() => ({
          pickUpTime: '6:15',
          departureTime: '6:30',
          arrivalTime: '13:00',
          vehicleType: 'Limousine bus',
          pickUpPoint: '<p>Tran Nhat Duat street</p>',
          dropOffPoint: `
          <p>1. TiemTours office 92i Nguyễn Trãi</p>
          <p>2. Hà Giang bus station</p>
          <p>3. Homestays, hostels, hotels in downtown Hà Giang</p>
          `,
          price: 300000,
          recommend: false,
        })),
      },
    ],
  },
  {
    pickUpLocation: 'CatBa',
    dropOffLocation: 'Hagiang',
    name: 'CatBa',
    slug: 'catba',
    data: [
      {
        route: 'Ha Noi → Ha Giang',
        rows: [...Array(5)].map(() => ({
          pickUpTime: '6:15',
          departureTime: '6:30',
          arrivalTime: '13:00',
          vehicleType: 'Limousine bus',
          pickUpPoint: '<p>Tran Nhat Duat street</p>',
          dropOffPoint: `
          <p>1. TiemTours office 92i Nguyễn Trãi</p>
          <p>2. Hà Giang bus station</p>
          <p>3. Homestays, hostels, hotels in downtown Hà Giang</p>
          `,
          price: 300000,
          recommend: true,
        })),
      },
      {
        route: 'Ha Giang → Ha Noi',
        rows: [...Array(5)].map(() => ({
          pickUpTime: '6:15',
          departureTime: '6:30',
          arrivalTime: '13:00',
          vehicleType: 'Limousine bus',
          pickUpPoint: '<p>Tran Nhat Duat street</p>',
          dropOffPoint: `
          <p>1. TiemTours office 92i Nguyễn Trãi</p>
          <p>2. Hà Giang bus station</p>
          <p>3. Homestays, hostels, hotels in downtown Hà Giang</p>
          `,
          price: 300000,
          recommend: false,
        })),
      },
    ],
  },
  {
    pickUpLocation: 'HaLong',
    dropOffLocation: 'Hagiang',
    name: 'HaLong',
    slug: 'halong',
    data: [
      {
        route: 'Ha Noi → Ha Giang',
        rows: [...Array(5)].map(() => ({
          pickUpTime: '6:15',
          departureTime: '6:30',
          arrivalTime: '13:00',
          vehicleType: 'Limousine bus',
          pickUpPoint: '<p>Tran Nhat Duat street</p>',
          dropOffPoint: `
          <p>1. TiemTours office 92i Nguyễn Trãi</p>
          <p>2. Hà Giang bus station</p>
          <p>3. Homestays, hostels, hotels in downtown Hà Giang</p>
          `,
          price: 300000,
          recommend: true,
        })),
      },
      {
        route: 'Ha Giang → Ha Noi',
        rows: [...Array(5)].map(() => ({
          pickUpTime: '6:15',
          departureTime: '6:30',
          arrivalTime: '13:00',
          vehicleType: 'Limousine bus',
          pickUpPoint: '<p>Tran Nhat Duat street</p>',
          dropOffPoint: `
          <p>1. TiemTours office 92i Nguyễn Trãi</p>
          <p>2. Hà Giang bus station</p>
          <p>3. Homestays, hostels, hotels in downtown Hà Giang</p>
          `,
          price: 300000,
          recommend: false,
        })),
      },
    ],
  },
  {
    pickUpLocation: 'CaoBang',
    dropOffLocation: 'Hagiang',
    name: 'CaoBang',
    slug: 'caobang',
    data: [
      {
        route: 'Cao Bang → Ha Giang',
        rows: [...Array(5)].map(() => ({
          pickUpTime: '6:15',
          departureTime: '6:30',
          arrivalTime: '13:00',
          vehicleType: 'Limousine bus',
          pickUpPoint: '<p>Tran Nhat Duat street</p>',
          dropOffPoint: `
          <p>1. TiemTours office 92i Nguyễn Trãi</p>
          <p>2. Hà Giang bus station</p>
          <p>3. Homestays, hostels, hotels in downtown Hà Giang</p>
          `,
          price: 300000,
          recommend: true,
        })),
      },
      {
        route: 'Cao Bang → Ha Noi',
        rows: [...Array(5)].map(() => ({
          pickUpTime: '6:15',
          departureTime: '6:30',
          arrivalTime: '13:00',
          vehicleType: 'Limousine bus',
          pickUpPoint: '<p>Tran Nhat Duat street</p>',
          dropOffPoint: `
          <p>1. TiemTours office 92i Nguyễn Trãi</p>
          <p>2. Hà Giang bus station</p>
          <p>3. Homestays, hostels, hotels in downtown Hà Giang</p>
          `,
          price: 300000,
          recommend: false,
        })),
      },
    ],
  },
]
export const PickupAndDropOffPrivateServiceData = [
  {
    pickUpLocation: 'Hanoi',
    dropOffLocation: 'Hagiang',
    name: 'Ha Noi → Ha Giang',
    slug: 'hanoi_hagiang',
    data: [
      {
        route: 'Ha Noi → Ha Giang',
        rows: [...Array(2)].map(() => ({
          departureTime: 'Anytime',
          arrivalTime: 'Anytime',
          vehicleType: 'SUV 8 SEATS CAR (MAXIMUM 7 PERSON)',
          pickUpPoint: '<p>3.000,000 VND</p>',
          dropOffPoint: '<p>3.000,000 VND</p>',
        })),
      },
    ],
  },
]
