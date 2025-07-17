'use client'
import {z} from 'zod'

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
      .min(0, 'Adults quantity must be 0 or more'),
    infants: z
      .number({
        invalid_type_error: 'Children under 4 quantity must be a number',
      })
      .min(0, 'Children under 4 quantity must be 0 or more'),
    children: z
      .number({invalid_type_error: 'Children 5-8 quantity must be a number'})
      .min(0, 'Children 5-8 quantity must be 0 or more'),
    easy_rider: z
      .number({invalid_type_error: 'Easyrider must be a number'})
      .min(0, 'Easyrider must be 0 or more'),
    ride_by_yourself: z
      .number({invalid_type_error: 'Ride by yourself must be a number'})
      .min(0, 'Ride by yourself must be 0 or more'),
    seat_behind: z
      .number({invalid_type_error: 'Seat behind your friend must be a number'})
      .min(0, 'Seat behind your friend must be 0 or more'),
    tour_type: z.string().min(1, 'Tour type is required'),
    package: z.string(),

    // Outbound trip information
    outbound_trip_pickup_location: z.string().min(1, 'Please select location'),
    outbound_trip_pickup_vehicle: z.string().min(1, 'Please select vehicle'),
    outbound_trip_pickup_address: z.string(),
    outbound_trip_arrival_location: z.string(),
    outbound_trip_arrival_time: z.string(),

    // Return trip information
    return_trip_pickup_location: z.string().min(1, 'Please select location'),
    return_trip_pickup_vehicle: z.string().min(1, 'Please select vehicle'),
    return_trip_pickup_address: z.string(),
    return_trip_arrival_location: z.string(),
    return_trip_arrival_time: z.string(),
    // Deposit
    deposit: z.string(),

    // Agree with policy
    // agree_policy: z.literal(true, {
    //   errorMap: () => ({
    //     message: 'You must agree to the policy before proceeding',
    //   }),
    // }),
  })
  .refine((data) => data.schedule_end >= data.schedule_start, {
    path: ['end_day'],
    message: 'End day must be after or same as Start day',
  })

export default bookingSchema
export type BookingFormValues = z.infer<typeof bookingSchema>
