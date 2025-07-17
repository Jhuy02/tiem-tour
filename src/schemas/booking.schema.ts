'use client'
import { z } from 'zod'

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
    pickUpLocation: z.string(),
    pickUpVehicle: z.string(),
    motorcycles: z.array(
      z.object({
        name: z.string(),
        quantity: z.number().min(0, 'Quantity must be 0 or more'),
      }),
    ),
    gifts: z.string().optional(),
    yourName: z.string().min(1, 'Name is required'),
    yourPhone: z
      .string({ required_error: 'Phone number is required' })
      .min(1, 'Phone number is required')
      .regex(
        /^(999|998|997|996|995|994|993|992|991|990|979|978|977|976|975|974|973|972|971|970|969|968|967|966|965|964|963|962|961|960|899|898|897|896|895|894|893|892|891|890|889|888|887|886|885|884|883|882|881|880|879|878|877|876|875|874|873|872|871|870|859|858|857|856|855|854|853|852|851|850|839|838|837|836|835|834|833|832|831|830|809|808|807|806|805|804|803|802|801|800|699|698|697|696|695|694|693|692|691|690|689|688|687|686|685|684|683|682|681|680|679|678|677|676|675|674|673|672|671|670|599|598|597|596|595|594|593|592|591|590|509|508|507|506|505|504|503|502|501|500|429|428|427|426|425|424|423|422|421|420|389|388|387|386|385|384|383|382|381|380|379|378|377|376|375|374|373|372|371|370|359|358|357|356|355|354|353|352|351|350|299|298|297|296|295|294|293|292|291|290|289|288|287|286|285|284|283|282|281|280|269|268|267|266|265|264|263|262|261|260|259|258|257|256|255|254|253|252|251|250|249|248|247|246|245|244|243|242|241|240|239|238|237|236|235|234|233|232|231|230|229|228|227|226|225|224|223|222|221|220|219|218|217|216|215|214|213|212|211|210|98|95|94|93|92|91|90|86|84|0|82|81|66|65|64|63|62|61|60|58|57|56|55|54|53|52|51|49|48|47|46|45|44|43|41|40|39|36|34|33|32|31|30|27|20|7|1)[0-9]{0,14}$/,
        {
          message: 'Phone number is invalid',
        },
      ),
    yourEmail: z
      .string({ required_error: 'Email is required' })
      .min(1, 'Email is required')
      .email('Email is invalid'),
    yourMessage: z.string().optional(),
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
