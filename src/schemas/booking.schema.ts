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
      .min(1, 'Adults quantity must be 0 or more'),
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
    tour_type: z.enum(['motorbike_tour', 'car_tour'], {
      required_error: 'Tour type is required',
      invalid_type_error: 'Invalid tour type',
    }),
    package: z.enum(['saving', 'budget', 'premium'], {
      required_error: 'Tour package is required',
      invalid_type_error: 'Invalid tour type',
    }),
    motorcycles: z.array(
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
      .regex(
        /^(999|998|997|996|995|994|993|992|991|990|979|978|977|976|975|974|973|972|971|970|969|968|967|966|965|964|963|962|961|960|899|898|897|896|895|894|893|892|891|890|889|888|887|886|885|884|883|882|881|880|879|878|877|876|875|874|873|872|871|870|859|858|857|856|855|854|853|852|851|850|839|838|837|836|835|834|833|832|831|830|809|808|807|806|805|804|803|802|801|800|699|698|697|696|695|694|693|692|691|690|689|688|687|686|685|684|683|682|681|680|679|678|677|676|675|674|673|672|671|670|599|598|597|596|595|594|593|592|591|590|509|508|507|506|505|504|503|502|501|500|429|428|427|426|425|424|423|422|421|420|389|388|387|386|385|384|383|382|381|380|379|378|377|376|375|374|373|372|371|370|359|358|357|356|355|354|353|352|351|350|299|298|297|296|295|294|293|292|291|290|289|288|287|286|285|284|283|282|281|280|269|268|267|266|265|264|263|262|261|260|259|258|257|256|255|254|253|252|251|250|249|248|247|246|245|244|243|242|241|240|239|238|237|236|235|234|233|232|231|230|229|228|227|226|225|224|223|222|221|220|219|218|217|216|215|214|213|212|211|210|98|95|94|93|92|91|90|86|84|0|82|81|66|65|64|63|62|61|60|58|57|56|55|54|53|52|51|49|48|47|46|45|44|43|41|40|39|36|34|33|32|31|30|27|20|7|1)[0-9]{0,14}$/,
        {
          message: 'Phone number is invalid',
        },
      ),
    yourEmail: z
      .string({required_error: 'Email is required'})
      .min(1, 'Email is required')
      .email('Email is invalid'),
    yourMessage: z.string().optional(),
    outbound_trip_transport: z.string().min(1, ''),
    return_trip_transport: z.string().min(1, ''),
    outbound_trip_pickup_location: z.string().min(1, 'Please select location'),
    outbound_trip_pickup_vehicle: z.string().min(1, 'Please select vehicle'),
    outbound_trip_pickup_address: z.string(),
    outbound_trip_arrival_location: z.string(),
    outbound_trip_arrival_time: z.string(),
    return_trip_pickup_location: z.string().min(1, 'Please select location'),
    return_trip_pickup_vehicle: z.string().min(1, 'Please select vehicle'),
    return_trip_pickup_address: z.string(),
    return_trip_arrival_address: z.string(),
    return_trip_arrival_location: z.string(),
    return_trip_arrival_time: z.string(),
    deposit: z.string(),
    agree_policy: z.literal(true, {
      errorMap: () => ({
        message: 'You must agree to the policy before proceeding',
      }),
    }),
  })
  .refine((data) => data.schedule_end >= data.schedule_start, {
    path: ['end_day'],
    message: 'End day must be after or same as Start day',
  })
  .refine(
    (data) =>
      data.easy_rider + data.ride_by_yourself + data.seat_behind <= data.adults,
    {
      path: ['easy_rider'], // hoặc dùng path chung như 'motorcycle_total'
      message: 'Total number of riders must not exceed number of adults',
    },
  )
  .refine(
    (data) => data.easy_rider + data.ride_by_yourself + data.seat_behind >= 1,
    {
      path: ['easy_rider'], // Hoặc tạo field ảo nếu bạn muốn gom chung lỗi
      message: 'At least one rider is required',
    },
  )

export default bookingSchema
export type BookingFormValues = z.infer<typeof bookingSchema>
