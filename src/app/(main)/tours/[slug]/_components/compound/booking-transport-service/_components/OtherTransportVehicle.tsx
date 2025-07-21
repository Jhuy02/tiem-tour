'use client'
import Caution from '@/app/(main)/tours/[slug]/_components/common/Caution'
import OtherOptionButton from '@/app/(main)/tours/[slug]/_components/common/OtherOptionButton'
import IconArrowRightV1 from '@/components/icon/IconArrowRightV1'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {Label} from '@/components/ui/label'
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group'
import {BookingFormValues} from '@/schemas/booking.schema'
import Image from 'next/image'
import React, {useState} from 'react'
import {useFormContext, useWatch} from 'react-hook-form'

type VehicleFieldKey =
  | 'outboundTrip.data.pickUpVehicle'
  | 'returnTrip.data.pickUpVehicle'

interface OtherTransportVehicleProps {
  keySchema: VehicleFieldKey
  optionList: {slug: string; name: string; startTime: string; price: number}[]
  onAddOption: (slug: string) => void
}

export default function OtherTransportVehicle({
  keySchema,
  optionList,
  onAddOption,
}: OtherTransportVehicleProps) {
  const {control, setValue} = useFormContext<BookingFormValues>()
  const defaultOption = useWatch({control, name: keySchema})
  const [selectedVehicle, setSelectedVehicle] = useState<string>(
    defaultOption || '',
  )

  const handleAddOtherOption = () => {
    setValue(keySchema, selectedVehicle)
    onAddOption(selectedVehicle)
  }
  return (
    <Dialog>
      <DialogTrigger>
        <div className='flex cursor-pointer items-center space-x-[0.25rem]'>
          <Image
            alt=''
            style={{
              filter:
                'brightness(0) saturate(100%) invert(51%) sepia(19%) saturate(1542%) hue-rotate(131deg) brightness(108%) contrast(89%)',
            }}
            width={18}
            height={18}
            src={'/icons/add_plus.svg'}
            className='h-auto w-[1.125rem] shrink-0'
          />
          <p className='xsm:text-[0.875rem] xsm:leading-[150%] xsm:tracking-[-0.00438rem] text-[1rem] leading-[120%] font-medium tracking-[0.0025rem] text-[#25ACAB]'>
            Other option
          </p>
        </div>
      </DialogTrigger>
      <DialogContent className='max-h-[80vh]! w-[54.6875rem] max-w-[80vw]! rounded-none! border-none! bg-transparent! p-0! duration-500'>
        <DialogHeader className='hidden'>
          <DialogTitle>Other Option</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className='font-trip-sans relative z-2 rounded-[2.25rem] bg-[#FAFAFA]'>
          <div className='relative z-1 flex flex-col space-y-[1.5rem] px-[1.5rem] py-[1.875rem]'>
            <DialogClose asChild>
              <div className='absolute top-[1.5rem] right-[1.5rem] cursor-pointer'>
                <Image
                  alt=''
                  width={20}
                  height={20}
                  src={'/icons/x-close.svg'}
                  className='h-auto w-[1.25rem] shrink-0'
                />
              </div>
            </DialogClose>
            <h3 className='font-trip-sans border-b border-solid border-[#EDEDED] pb-[1rem] text-left text-[1.125rem] leading-[130%] font-extrabold tracking-[0.00281rem] text-[#2E2E2E]'>
              Other option
            </h3>

            <RadioGroup
              value={selectedVehicle}
              onValueChange={setSelectedVehicle}
              className='grid grid-cols-2 gap-[0.75rem]'
            >
              {Array.isArray(optionList) &&
                optionList?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className='col-span-1 flex items-center justify-between rounded-[0.75rem] bg-[#F6F6F6] p-[0.75rem]'
                    >
                      <Label className='inline-flex w-full cursor-pointer items-center gap-0'>
                        <RadioGroupItem
                          value={item?.slug}
                          className='peer sr-only'
                        />
                        <Image
                          alt=''
                          width={22}
                          height={22}
                          src={'/icons/radio-unchecked.svg'}
                          className='hidden! h-auto w-[1.25rem] peer-data-[state="unchecked"]:block!'
                        />
                        <Image
                          alt=''
                          width={22}
                          height={22}
                          src={'/icons/radio-checked.svg'}
                          className='hidden! h-auto w-[1.25rem] peer-data-[state="checked"]:block!'
                        />
                        <div className='flex flex-1 flex-col space-y-[0.5rem] pl-[0.5rem]'>
                          <p className='inline-flex items-center text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[#3B3943]'>
                            {item?.name}
                          </p>
                          <span className='text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[rgba(48,48,48,0.40)]'>
                            Start:{' '}
                            <span className='text-[#3B3943]'>
                              {item?.startTime}
                            </span>
                          </span>
                        </div>
                        <p className='text-[0.875rem] leading-[120%] font-extrabold tracking-[0.01563rem] text-[#C83E21] uppercase'>
                          <span>{item?.price?.toLocaleString('vi-VN')}</span>
                          /PAX
                        </p>
                      </Label>
                    </div>
                  )
                })}
            </RadioGroup>
            <div className='flex items-center space-x-[0.5rem] self-stretch rounded-[0.75rem] border border-solid border-[#ECECEC] bg-[#F6F6F6] px-[1rem] py-[0.875rem]'>
              <Image
                alt=''
                width={20}
                height={20}
                src={'/icons/marker-pin.svg'}
                className='h-auto w-[1.25rem] shrink-0'
              />
              <p className='text-[0.875rem] leading-[120%] font-medium tracking-[0.00219rem] text-[rgba(48,48,48,0.40)]'>
                Tran nhat duat street, BaDinh at 6:15
              </p>
            </div>
            <Caution content='We will call you back to confirm the pickup date and location.' />
            <DialogClose asChild>
              <div
                onClick={handleAddOtherOption}
                className='inline-flex cursor-pointer items-center justify-center space-x-[0.625rem] rounded-[3.125rem] bg-[#C83E21] px-[2.5rem] py-[1.25rem] transition-colors duration-300 ease-out lg:hover:bg-[#EA6A44]'
              >
                <span className='font-dvn-luckiest-guy inline-block h-[0.8125rem] text-[1.125rem] leading-[120%] text-white'>
                  Add other option
                </span>
                <IconArrowRightV1 className='h-[1.5rem] w-[1.575rem] shrink-0' />
              </div>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
