"use client"
import Caution from "@/app/(main)/tours/[slug]/_components/common/Caution"
import SvgClose from "@/app/(main)/tours/[slug]/_components/common/SvgClose"
import {
    Dialog, DialogClose, DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/app/(main)/tours/[slug]/_components/rent-motorcycles/DialogCustom"
import ImageFallback from "@/components/image/ImageFallback"
import { InterMotorcycle } from "@/types/tours.interface"
import { Fragment } from "react"
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'

interface ListMotorcyclesProps {
    motorcycles: InterMotorcycle[]
}

export default function ListMotorcycles({ motorcycles }: ListMotorcyclesProps) {
    return (
        <div className="space-y-[0.75rem] p-[1rem] xsm:p-[0.75rem] rounded-[1.5rem] bg-[linear-gradient(180deg,#FFF_0%,#F0EBE5_72.66%)] xsm:bg-[linear-gradient(180deg,#FFF_0%,#F0EBE5_72.66%)]">
            <div className="grid grid-cols-2 xsm:grid-cols-1 gap-[0.75rem]">
                {Array.isArray(motorcycles) && motorcycles?.length > 0 && motorcycles.map((motor, index) => (
                    <Fragment key={index}>
                        <Dialog>
                            <DialogTrigger>
                                <div className="flex items-center space-x-[1rem] cursor-pointer">
                                    <ImageFallback className="size-[4rem] rounded-[0.69563rem] bg-[linear-gradient(0deg,rgba(230,230,230,0.05)_0%,rgba(230,230,230,0.05)_100%)]" src={'/card-default.webp'} alt="" width={64} height={64} />
                                    <div className="flex flex-col justify-center items-start">
                                        <p className="text-[#303030] text-[1rem] font-trip-sans font-medium leading-[1.2] tracking-[0.0025rem]">
                                            {motor?.name}
                                        </p>
                                        <p className="text-[#C83E21] font-trip-sans text-[0.875rem] font-bold leading-[1.2] tracking-[0.01563rem] uppercase">
                                            {motor?.price?.toLocaleString('vi-VN')}₫/Day
                                        </p>
                                    </div>
                                </div>
                            </DialogTrigger>
                            <DialogContent className="w-[33rem] bg-white rounded-[1.5rem] p-0 gap-[0] border-none">
                                <DialogHeader className="p-[1.5rem_1.5rem_0rem_1.5rem]">
                                    <div className="flex items-center justify-between">
                                        <DialogTitle className="text-[#303030] text-[1.125rem] font-trip-sans font-[900] leading-[1.3] tracking-[0.00281rem]">
                                            {motor?.name}
                                        </DialogTitle>
                                        <DialogClose className="cursor-pointer">
                                            <SvgClose />
                                        </DialogClose>
                                    </div>
                                    <p className="text-[#C83E21] font-trip-sans text-[0.875rem] leading-[1.2] font-bold tracking-[0.01563rem] uppercase">
                                        {motor?.price?.toLocaleString('vi-VN')}₫/Day
                                    </p>
                                </DialogHeader>
                                <div className="h-[0.0625rem] bg-[#EDEDED] mx-[1rem]"></div>
                                <div className="rounded-[0_0_1.5rem_1.5rem] w-full py-[1.5rem] bg-[#FAFAFA] h-[31.125rem] overflow-hidden overflow-y-auto hidden_scroll">
                                    <p className="px-[1.5rem] text-[#303030] mb-[0.75rem] font-trip-sans text-[0.875rem] font-bold leading-[1.2] tracking-[0.01563rem] uppercase">
                                        Things that are included about Automotive - Motorcycle 125cc:
                                    </p>
                                    <Swiper
                                        className="motorSwiper w-full !pl-[1.5rem] !pr-[1.5rem]"
                                        spaceBetween={12}
                                        slidesPerView={'auto'}
                                        grabCursor={true}
                                    >
                                        {Array.from({ length: 4 }).map((_, index) => (
                                            <SwiperSlide key={index} className="!w-[12.8125rem]">
                                                <ImageFallback className="size-[12.8125rem] rounded-[0.69563rem]" src={'/card-default.webp'} alt="" width={205} height={205} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    <div className="mt-[0.75rem] px-[1.5rem]">
                                        <p className="mb-[0.75rem] text-[#303030] font-trip-sans text-[1rem] font-bold leading-[1.3] tracking-[0.0025rem]">
                                            Động cơ
                                        </p>
                                        <div className="[&_ul]:list-disc [&_ul]:pl-[1.5rem] [&_li]:text-[#303030] [&_li]:text-[0.875rem] [&_li]:tracking-[0.00219rem] [&_li]:font-trip-sans [&_p]:text-[#303030] [&_p]:text-[0.875rem] [&_p]:tracking-[0.00219rem] [&_p]:font-trip-sans [&_strong]:font-bold">
                                            <ul>
                                                <li>Dung tích xi-lanh: 149,15 cm3</li>
                                                <li>Công suất tối đa: 9,51 kW (12,91 PS) / 8.000 vòng / phút</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mt-[0.75rem] px-[1.5rem]">
                                        <p className="mb-[0.75rem] text-[#303030] font-trip-sans text-[1rem] font-bold leading-[1.3] tracking-[0.0025rem]">
                                            Động cơ
                                        </p>
                                        <div className="[&_ul]:list-disc [&_ul]:pl-[1.5rem] [&_li]:text-[#303030] [&_li]:text-[0.875rem] [&_li]:tracking-[0.00219rem] [&_li]:font-trip-sans [&_p]:text-[#303030] [&_p]:text-[0.875rem] [&_p]:tracking-[0.00219rem] [&_p]:font-trip-sans [&_strong]:font-bold">
                                            <ul>
                                                <li>Dung tích xi-lanh: 149,15 cm3</li>
                                                <li>Công suất tối đa: 9,51 kW (12,91 PS) / 8.000 vòng / phút</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <Caution className="mt-[0.75rem] mx-[1rem]" content="Customers need to have an international driver's license. If they do not have one, they will be fined by the police from 2 to 3 million VND. However, if they book a tour with the company, the company will assist customers in reducing the fine to the lowest possible amount and they will only be fined once." />
                                </div>
                                <div className="rounded-[0_0_1.5rem_1.5rem] absolute w-full h-[4.125rem] bottom-0 left-0 right-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_0%,#FFF_100%)]"></div>
                            </DialogContent>
                        </Dialog>
                    </Fragment>
                ))}
            </div>
            <Caution className="mt-[0.75rem] bg-[#FFF]" content="Customers need to have an international driver's license. If they do not have one, they will be fined by the police from 2 to 3 million VND. However, if they book a tour with the company, the company will assist customers in reducing the fine to the lowest possible amount and they will only be fined once." />
        </div>
    )
}