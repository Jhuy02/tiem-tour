'use client'

import {PageContext} from '@/app/(main)/tours/[slug]/context/PageProvider'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import {TourDetailApiResType} from '@/types/tours.interface'
import Image from 'next/image'
import React, {useContext} from 'react'
interface PickupAndDropOffBusServiceProps {
  onCloseMb?: () => void
}
export default function PickupAndDropOffBusService({
  onCloseMb,
}: PickupAndDropOffBusServiceProps) {
  const pageContext = useContext(PageContext)
  if (!pageContext) throw new Error('Page context is missing')
  const {data: apiData}: {data: TourDetailApiResType} = pageContext
  const scheduleList =
    apiData.package_tour?.pick_up_and_drop_off_bus_service.schedule_bus
  const handleCloseMb = () => {
    if (onCloseMb) {
      onCloseMb()
    }
  }
  return (
    <div className='font-trip-sans xsm:px-[1rem] xsm:pb-[1rem] xsm:pt-0 xsm:w-full xsm:space-y-[1rem] flex w-fit flex-col space-y-[1.5rem] bg-white p-[3.75rem] px-[3.75rem]'>
      <p className='xsm:hidden font-dvn-luckiest-guy xsm:font-trip-sans xsm:text-[1rem] xsm:tracking-[-0.01rem] xsm:font-medium xsm:text-left mb-[1rem] text-center text-[1.625rem] leading-[150%] tracking-[0.01563rem] text-[#303030] sm:uppercase'>
        Pick up and drop off BUS service
      </p>
      <Tabs
        defaultValue={scheduleList[0]?.name}
        className='xsm:gap-0 relative flex w-full flex-col gap-[1.5rem]'
      >
        <div className='xsm:sticky xsm:top-0 xsm:bg-white xsm:z-10 xsm:py-[1rem]'>
          <div className='mb-[1rem] flex items-center justify-between'>
            <p className='font-dvn-luckiest-guy xsm:font-trip-sans xsm:text-[1rem] xsm:tracking-[-0.01rem] xsm:font-medium xsm:text-left text-center text-[1.625rem] leading-[150%] tracking-[0.01563rem] text-[#303030] sm:hidden sm:uppercase'>
              Pick up and drop off BUS service
            </p>
            <button
              type='button'
              onClick={handleCloseMb}
              className='sm:hidden'
            >
              <Image
                alt=''
                width={20}
                height={20}
                src={'/icons/x-close.svg'}
                className='h-auto w-[1.25rem]'
              />
            </button>
          </div>
          <TabsList className='xsm:justify-start hidden_scroll flex h-auto w-full items-center justify-center space-x-[0.5rem] self-stretch overflow-x-auto border-none bg-transparent p-0'>
            {Array.isArray(scheduleList) &&
              scheduleList?.map(({name}, index) => {
                return (
                  <TabsTrigger
                    key={index}
                    value={name}
                    className='relative flex-initial cursor-pointer rounded-[1.25rem] bg-[#EBEBEB] p-0! shadow-none! before:absolute before:inset-0 before:z-0 before:rounded-[1.25rem] before:bg-[linear-gradient(180deg,#F4F5E6_0%,#B2DFDC_100%)] before:opacity-0 data-[state=active]:before:opacity-100'
                  >
                    <p className='relative inline-flex items-center justify-center overflow-hidden px-[1.5rem] py-[0.5rem]'>
                      <span className='xsm:text-[0.75rem] relative z-1 text-[1rem] leading-[120%] font-medium tracking-[0.0025rem] text-[#303030]'>
                        {name}
                      </span>
                    </p>
                  </TabsTrigger>
                )
              })}
          </TabsList>
        </div>
        {Array.isArray(scheduleList) &&
          scheduleList?.map(
            ({name, dropofflocation, pickuplocation, data}, index) => {
              return (
                <TabsContent
                  value={name}
                  key={index}
                  className='self-stretch'
                >
                  <div className='xsm:pb-[1rem] hidden_scroll xsm:overflow-auto! relative max-w-full self-stretch'>
                    <table className='xsm:table-fixed xsm:w-full max-h-full border border-solid border-[#EDEDED]'>
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
                            {pickuplocation}
                          </th>
                          <th className='w-[16.46875rem]'>{dropofflocation}</th>
                        </tr>
                      </thead>
                      <tbody className='border border-solid border-[#EDEDED]'>
                        {Array.isArray(data) &&
                          data?.map(({route, rows}) => {
                            return rows?.map(
                              (
                                {
                                  arrivaltime,
                                  departuretime,
                                  dropoffpoint,
                                  pickuppoint,
                                  pickuptime,
                                  price,
                                  recommend,
                                  vehicle_type,
                                },
                                j,
                              ) => {
                                return (
                                  <tr
                                    key={j}
                                    className='border border-solid border-[#EDEDED]'
                                  >
                                    {j === 0 && (
                                      <td
                                        rowSpan={rows?.length}
                                        className='border border-solid border-[#EDEDED] p-[0.75rem] text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[#006CE4]'
                                      >
                                        {route}
                                      </td>
                                    )}
                                    <td className='border border-solid border-[#EDEDED] p-[0.75rem] text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[#303030]'>
                                      {pickuptime}
                                    </td>
                                    <td className='border border-solid border-[#EDEDED] p-[0.75rem] text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[#303030]'>
                                      {departuretime}
                                    </td>
                                    <td className='border border-solid border-[#EDEDED] p-[0.75rem] text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[#303030]'>
                                      {arrivaltime}
                                    </td>
                                    <td className='border border-solid border-[#EDEDED] p-[0.75rem] text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[#303030]'>
                                      {vehicle_type}
                                    </td>
                                    <td className='border border-solid border-[#EDEDED] p-[0.75rem] text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[#303030]'>
                                      <p
                                        dangerouslySetInnerHTML={{
                                          __html: pickuppoint ?? '',
                                        }}
                                      ></p>
                                    </td>
                                    <td className='border border-solid border-[#EDEDED] p-[0.75rem] text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[#303030]'>
                                      <p
                                        dangerouslySetInnerHTML={{
                                          __html: dropoffpoint ?? '',
                                        }}
                                      ></p>
                                    </td>
                                    <td className='border border-solid border-[#EDEDED] p-[0.75rem] text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[#303030]'>
                                      <div className='flex flex-col items-center gap-[0.5rem]'>
                                        <p className='leading-[120%] font-bold text-[#C83E21]'>
                                          {Number(price)?.toLocaleString(
                                            'en-US',
                                          )}{' '}
                                          VND
                                        </p>
                                        {recommend && (
                                          <span className='inline-flex items-center justify-center rounded-[1.875rem] bg-[#C83E21] px-[0.75rem] py-[0.125rem] text-[0.75rem] leading-[120%] font-medium tracking-[0.00188rem] text-white'>
                                            Highly Recommend
                                          </span>
                                        )}
                                      </div>
                                    </td>
                                  </tr>
                                )
                              },
                            )
                          })}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
              )
            },
          )}
      </Tabs>
      <div
        className='xsm:gap-[0.5rem] flex flex-col gap-[1rem] text-[0.875rem] leading-[120%] font-medium! tracking-[0.00219rem] text-[#3B3943] [&_strong]:text-[#C83E21]'
        dangerouslySetInnerHTML={{
          __html:
            apiData?.package_tour?.pick_up_and_drop_off_bus_service?.note ?? '',
        }}
      ></div>
    </div>
  )
}
