import ControlNumber from "@/app/(main)/tours/[slug]/_components/rent-motorcycles/ControlNumber";
import ListMotorcycles from "@/app/(main)/tours/[slug]/_components/rent-motorcycles/ListMotorcycles";
import { InMotorbikeRents } from "@/types/tours.interface";

interface RentMotorcyclesProps {
    motorcycles: InMotorbikeRents[]
}

export default function RentMotorcycles({ motorcycles }: RentMotorcyclesProps) {
    return (
        <div className="p-[1.875rem_1.75rem] xsm:w-full xsm:p-[1rem] xsm:pb-[1.25rem] sm:rounded-[1.5rem] sm:border-[1px] sm:border-solid sm:border-[#EDEDED] bg-white xsm:border-none">
            <p className="text-[#303030] font-trip-sans text-[1.125rem] font-[900] leading-[1.3] tracking-[0.00281rem] sm:pb-[1rem] mb-[0.75rem] sm:border-b-[0.0625rem] sm:border-solid sm:border-b-[#EDEDED]">
                Rent motorcycles
            </p>
            <ListMotorcycles motorcycles={motorcycles} />
            <ControlNumber motorcycles={motorcycles} />
        </div>
    )
}