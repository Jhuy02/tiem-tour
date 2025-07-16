import Caution from '@/app/(main)/tours/[slug]/_components/common/Caution'
import {PickupAndDropOffPrivateServiceData} from '@/constants/mockApi'
import Link from 'next/link'
import React from 'react'

export default function PickupAndDropOffPrivateService() {
  return (
    <div className='font-trip-sans flex w-fit flex-col space-y-[1.5rem] rounded-[1.5rem] bg-white p-[3.75rem]'>
      <p className='font-dvn-luckiest-guy text-center text-[1.625rem] leading-[150%] tracking-[0.01563rem] text-[#303030] uppercase'>
        Pick up and drop off Private transport service
      </p>
      {Array.isArray(PickupAndDropOffPrivateServiceData) &&
        PickupAndDropOffPrivateServiceData?.map((service, index) => {
          return (
            <div
              key={index}
              className='mb-[2rem] max-h-[35rem] w-[76.9375rem] overflow-y-auto'
            >
              <table className='max-h-full w-full border border-solid border-[#EDEDED]'>
                <thead className='border border-solid border-[#EDEDED] text-[0.875rem] leading-[120%] font-bold tracking-[0.00219rem] text-[#303030]'>
                  <tr>
                    <th
                      rowSpan={2}
                      className='h-[5.0625rem] w-[9.75rem] border border-solid border-[#EDEDED] pl-[0.75rem]'
                    >
                      Route
                    </th>
                    <th
                      rowSpan={2}
                      className='w-[13.5625rem] border border-solid border-[#EDEDED] text-center'
                    >
                      Vehicle type
                    </th>
                    <th
                      rowSpan={2}
                      className='w-[7.25rem] border border-solid border-[#EDEDED] pl-[0.375rem]'
                    >
                      Departure time
                    </th>
                    <th
                      rowSpan={2}
                      className='w-[7.25rem] border border-solid border-[#EDEDED] pl-[0.375rem]'
                    >
                      Arrival time
                    </th>
                    <th
                      colSpan={2}
                      className='w-[32.9375rem] border border-b border-solid border-[#EDEDED]'
                    >
                      Pickup / drop-off point
                    </th>
                  </tr>
                  <tr>
                    <th className='w-[16.46875rem] border border-solid border-[#EDEDED]'>
                      {service?.pickUpLocation}
                    </th>
                    <th className='w-[16.46875rem]'>
                      {service?.dropOffLocation}
                    </th>
                  </tr>
                </thead>
                <tbody className='border border-solid border-[#EDEDED]'>
                  {Array.isArray(service?.data) &&
                    service?.data?.map((serviceItem) => {
                      return serviceItem?.rows?.map((rowItem, j) => {
                        return (
                          <tr
                            key={j}
                            className='border border-solid border-[#EDEDED]'
                          >
                            {j === 0 && (
                              <td
                                rowSpan={serviceItem?.rows?.length}
                                className='border border-solid border-[#EDEDED] p-[0.75rem] text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[#006CE4]'
                              >
                                {serviceItem?.route}
                              </td>
                            )}
                            <td
                              className='border border-solid border-[#EDEDED] p-[0.75rem] text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[#303030]'
                              align='center'
                            >
                              <div className='inline-flex min-h-[6.75rem] w-[9rem] items-center justify-center text-center'>
                                {rowItem?.vehicleType}
                              </div>
                            </td>
                            <td className='border border-solid border-[#EDEDED] p-[0.75rem] text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[#303030]'>
                              {rowItem?.departureTime}
                            </td>
                            <td className='border border-solid border-[#EDEDED] p-[0.75rem] text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[#303030]'>
                              {rowItem?.arrivalTime}
                            </td>
                            <td
                              align='center'
                              className='border border-solid border-[#EDEDED] p-[0.75rem] text-[0.875rem] leading-[120%] font-bold tracking-[0.00219rem] text-[#C83E21]'
                            >
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: rowItem?.pickUpPoint ?? '',
                                }}
                              ></p>
                            </td>
                            <td
                              align='center'
                              className='border border-solid border-[#EDEDED] p-[0.75rem] text-[0.875rem] leading-[120%] font-bold tracking-[0.00219rem] text-[#C83E21]'
                            >
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: rowItem?.dropOffPoint ?? '',
                                }}
                              ></p>
                            </td>
                          </tr>
                        )
                      })
                    })}
                </tbody>
              </table>
            </div>
          )
        })}

      <div className='relative'>
        <Caution content='NOTE: If you want to use this service to travel to other locations such as <br/>SaPa, NinhBinh, CaoBang, BaBe. Please contact us' />
        <Link
          href={'#'}
          className='absolute top-1/2 right-[1rem] -translate-y-1/2 text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[#006CE4] underline'
        >
          Contact us
        </Link>
      </div>
    </div>
  )
}
