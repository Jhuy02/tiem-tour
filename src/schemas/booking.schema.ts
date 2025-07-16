'use client'
import {z} from 'zod'

const bookingSchema = z
  .object({
    startDay: z.date({
      required_error: 'Start day is required',
      invalid_type_error: 'Start day must be a valid date',
    }),
    endDay: z.date({
      required_error: 'End day is required',
      invalid_type_error: 'End day must be a valid date',
    }),
    adultQuantity: z
      .number({invalid_type_error: 'Adults quantity must be a number'})
      .min(0, 'Adults quantity must be 0 or more'),
    infantQuantity: z
      .number({
        invalid_type_error: 'Children under 4 quantity must be a number',
      })
      .min(0, 'Children under 4 quantity must be 0 or more'),
    childQuantity: z
      .number({invalid_type_error: 'Children 5-8 quantity must be a number'})
      .min(0, 'Children 5-8 quantity must be 0 or more'),
    easyRiderQuantity: z
      .number({invalid_type_error: 'Easyrider must be a number'})
      .min(0, 'Easyrider must be 0 or more'),
    rideByYourselfQuantity: z
      .number({invalid_type_error: 'Ride by yourself must be a number'})
      .min(0, 'Ride by yourself must be 0 or more'),
    seatBehindYourFriendQuantity: z
      .number({invalid_type_error: 'Seat behind your friend must be a number'})
      .min(0, 'Seat behind your friend must be 0 or more'),
    tourType: z.string(),
    tourPackage: z.string(),

    // Outbound trip information
    outboundTripPickupLocation: z.string(),
    outboundTripPickupVehicle: z.string(),
    outboundTripPickupAddress: z.string(),
    outboundTripArrivalLocation: z.string(),
    outboundTripArrivalTime: z.string(),

    // Return trip information
    returnTripPickupLocation: z.string(),
    returnTripPickupVehicle: z.string(),
    returnTripPickupAddress: z.string(),
    returnTripArrivalLocation: z.string(),
    returnTripArrivalTime: z.string(),
  })
  .refine((data) => data.endDay >= data.startDay, {
    path: ['end_day'],
    message: 'End day must be after or same as Start day',
  })

export default bookingSchema
export type BookingFormValues = z.infer<typeof bookingSchema>
