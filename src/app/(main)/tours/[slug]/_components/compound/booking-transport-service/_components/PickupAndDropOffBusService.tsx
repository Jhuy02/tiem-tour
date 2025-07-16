import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import {PickupAndDropOffBusServiceData} from '@/constants/mockApi'
import React from 'react'

export default function PickupAndDropOffBusService() {
  return (
    <div className='font-trip-sans flex w-fit flex-col space-y-[1.5rem] rounded-[1.5rem] bg-white px-[3.75rem] pt-[3.75rem]'>
      <p className='font-dvn-luckiest-guy mb-[1rem] text-center text-[1.625rem] leading-[150%] tracking-[0.01563rem] text-[#303030] uppercase'>
        Pick up and drop off BUS service
      </p>
      <Tabs
        defaultValue={PickupAndDropOffBusServiceData[0]?.slug}
        className='relative flex w-full flex-col items-center gap-0 space-y-[1.5rem]'
      >
        <TabsList className='flex h-auto items-center justify-center space-x-[0.5rem] border-none bg-transparent p-0'>
          {Array.isArray(PickupAndDropOffBusServiceData) &&
            PickupAndDropOffBusServiceData?.map((item, index) => {
              return (
                <TabsTrigger
                  key={index}
                  value={item?.slug}
                  className='relative cursor-pointer rounded-[1.25rem] bg-[#EBEBEB] p-0! shadow-none! before:absolute before:inset-0 before:z-0 before:rounded-[1.25rem] before:bg-[linear-gradient(180deg,#F4F5E6_0%,#B2DFDC_100%)] before:opacity-0 data-[state=active]:before:opacity-100'
                >
                  <p className='relative inline-flex items-center justify-center overflow-hidden px-[1.5rem] py-[0.5rem]'>
                    <span className='relative z-1 text-[1rem] leading-[120%] font-medium tracking-[0.0025rem] text-[#303030]'>
                      {item?.name}
                    </span>
                  </p>
                </TabsTrigger>
              )
            })}
        </TabsList>
        {Array.isArray(PickupAndDropOffBusServiceData) &&
          PickupAndDropOffBusServiceData?.map((service, index) => {
            return (
              <TabsContent
                value={service.slug}
                key={index}
              >
                <div className='max-h-[35rem] w-[76.9375rem] overflow-y-auto pb-[3.75rem]'>
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
                          className='w-[5.125rem] border border-solid border-[#EDEDED] pl-[0.75rem]'
                        >
                          Pickup time
                        </th>
                        <th
                          rowSpan={2}
                          className='w-[5.125rem] border border-solid border-[#EDEDED] pl-[0.375rem]'
                        >
                          Departure time
                        </th>
                        <th
                          rowSpan={2}
                          className='w-[5.125rem] border border-solid border-[#EDEDED] pl-[0.375rem]'
                        >
                          Arrival time
                        </th>
                        <th
                          rowSpan={2}
                          className='w-[8.125rem] border border-solid border-[#EDEDED] text-center'
                        >
                          Vehicle type
                        </th>
                        <th
                          colSpan={2}
                          className='w-[32.9375rem] border border-b border-solid border-[#EDEDED]'
                        >
                          Pickup / drop-off point
                        </th>
                        <th
                          rowSpan={2}
                          className='w-[10.75rem] border border-l border-solid border-[#EDEDED]'
                        >
                          Ticker price
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
                                <td className='border border-solid border-[#EDEDED] p-[0.75rem] text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[#303030]'>
                                  {rowItem?.pickUpTime}
                                </td>
                                <td className='border border-solid border-[#EDEDED] p-[0.75rem] text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[#303030]'>
                                  {rowItem?.departureTime}
                                </td>
                                <td className='border border-solid border-[#EDEDED] p-[0.75rem] text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[#303030]'>
                                  {rowItem?.arrivalTime}
                                </td>
                                <td className='border border-solid border-[#EDEDED] p-[0.75rem] text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[#303030]'>
                                  {rowItem?.vehicleType}
                                </td>
                                <td className='border border-solid border-[#EDEDED] p-[0.75rem] text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[#303030]'>
                                  <p
                                    dangerouslySetInnerHTML={{
                                      __html: rowItem?.pickUpPoint ?? '',
                                    }}
                                  ></p>
                                </td>
                                <td className='border border-solid border-[#EDEDED] p-[0.75rem] text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[#303030]'>
                                  <p
                                    dangerouslySetInnerHTML={{
                                      __html: rowItem?.dropOffPoint ?? '',
                                    }}
                                  ></p>
                                </td>
                                <td className='border border-solid border-[#EDEDED] p-[0.75rem] text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[#303030]'>
                                  <div className='flex flex-col items-center gap-[0.5rem]'>
                                    <p className='leading-[120%] font-bold text-[#C83E21]'>
                                      {rowItem?.price?.toLocaleString('vi-VN')}{' '}
                                      VND
                                    </p>
                                    {rowItem?.recommend && (
                                      <span className='inline-flex items-center justify-center rounded-[1.875rem] bg-[#C83E21] px-[0.75rem] py-[0.125rem] text-[0.75rem] leading-[120%] font-medium tracking-[0.00188rem] text-white'>
                                        Highly Recommend
                                      </span>
                                    )}
                                  </div>
                                </td>
                              </tr>
                            )
                          })
                        })}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
            )
          })}
      </Tabs>
    </div>
  )
}
