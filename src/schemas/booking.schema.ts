'use client'
import {z} from 'zod'

// 🚍 Schema cho từng loại service
const busServiceSchema = z.object({
  pickUpLocation: z.string().min(1, 'Please select location'),
  pickUpVehicle: z.string().min(1, 'Please select vehicle'),
  pickUpAddress: z.string().min(1, 'Pick up address is required'),
  arrivalLocation: z.string().min(1, 'Arrival location is required'),
  arrivalTime: z.string().min(1, 'Arrival time is required'),
  arrivalAddress: z.string(),
})

const privateTransportSchema = z.object({
  pickUpLocation: z.string().min(1, 'Please select location'),
  pickUpVehicle: z.string().min(1, 'Please select vehicle'),
  pickUpAddress: z.string().min(1, 'Pick up address is required'),
  arrivalLocation: z.string().min(1, 'Arrival location is required'),
  arrivalTime: z.string().min(1, 'Arrival time is required'),
  arrivalAddress: z.string().min(1, 'Arrival address is required'),
})

const personalVehicleSchema = z.object({}) // không có trường nào

// 🔀 Union schema theo từng loại service
const transportSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('use_our_bus'),
    data: busServiceSchema,
  }),
  z.object({
    type: z.literal('private_transport'),
    data: privateTransportSchema,
  }),
  z.object({
    type: z.literal('personal_vehicle'),
    data: personalVehicleSchema,
  }),
])

// 📦 Schema chính của form booking
const bookingSchema = z
  .object({
    schedule_start: z.date({
      required_error: 'Start day is required',
      invalid_type_error: 'Start day must be a valid date',
    }),
    schedule_end: z.date({
      required_error: '',
      invalid_type_error: 'End day must be a valid date',
    }),

    adults: z
      .number({invalid_type_error: 'Adults quantity must be a number'})
      .min(1, 'Adults quantity must be 0 or more'),
    infants: z
      .number({
        invalid_type_error: 'Children under 4 quantity must be a number',
      })
      .min(0, 'Children under 4 quantity must be 0 or more'),
    children: z
      .number({invalid_type_error: 'Children 5-8 quantity must be a number'})
      .min(0, 'Children 5-8 quantity must be 0 or more'),

    tour_type: z.enum(['motorbike_tour', 'car_tour'], {
      required_error: 'Tour type is required',
    }),
    package: z.enum(['saving', 'budget', 'premium'], {
      required_error: 'Tour package is required',
    }),

    motorcycles: z.array(
      z.object({
        id: z.number(),
        name: z.string(),
        quantity: z.number().min(0, 'Quantity must be 0 or more'),
        price: z.string(),
      }),
    ),
    riders: z.array(
      z.object({
        name: z.string(),
        quantity: z.number().min(0, 'Quantity must be 0 or more'),
      }),
    ),

    gifts: z.string().optional(),
    yourName: z.string().min(1, 'Name is required'),
    yourPhone: z
      .string({required_error: 'Phone number is required'})
      .min(1, 'Phone number is required')
      .regex(/^[0-9]{8,15}$/, {message: 'Phone number is invalid'}),
    yourEmail: z
      .string({required_error: 'Email is required'})
      .min(1, 'Email is required')
      .email('Email is invalid'),
    yourMessage: z.string().optional(),

    // ✈️ Thêm outboundTrip và returnTrip
    outboundTrip: transportSchema,
    returnTrip: transportSchema,

    deposit: z.literal('deposit', {
      errorMap: () => ({message: 'You must select the deposit option'}),
    }),
  })
  .superRefine((data, ctx) => {
    const totalRiders = data.riders.reduce(
      (total, rider) => total + rider.quantity,
      0,
    )

    // Validate ít nhất 1 rider
    if (totalRiders < 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Riders must be 1 or more',
        path: ['riders'],
      })
    }

    // Validate riders > 0
    if (totalRiders <= 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Riders must be 1 or more',
        path: ['riders'],
      })
    }

    // Validate riders <= adults
    if (totalRiders > data.adults) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Riders must be equal adults or less',
        path: ['riders'],
      })
    }
  })

export default bookingSchema
export type BookingFormValues = z.infer<typeof bookingSchema>
