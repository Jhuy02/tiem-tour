import IconDeposit from "@/app/(main)/tours/[slug]/_components/policy/IConDeposit";
import IconNoRefund from "@/app/(main)/tours/[slug]/_components/policy/IConNoRefund";

export default function DepositAndNorefund() {
    return (
        <div className="grid grid-cols-2 gap-[1rem] mb-[1.5rem]">
            <div className="p-[1rem] rounded-[0.75rem] bg-[#F1F8F8] space-y-[0.75rem]">
                <p className="w-full pb-[0.75rem] border-b-[0.0625rem] border-b-[#EDEDED] text-[#303030] font-trip-sans text-[0.875rem] font-extrabold tracking-[0.01563rem] leading-[1.2] uppercase">
                    Deposit Policy:
                </p>
                {Array.from({length: 4}).map((_, index) => (
                    <div key={index} className="flex items-start space-x-[0.5rem]">
                        <IconDeposit className="size-[1.5rem] shrink-0" />
                        <p className="flex-1 text-[#303030] font-trip-sans text-[0.875rem] tracking-[0.00219rem] leading-[1.5]">
                            We require a deposit of 1.000.000VND per person (not including 3% transfer fee). The deposit is only to guarantee the tour. Any request might change due to the availability of each day.
                        </p>
                    </div>
                ))}
            </div>
            <div className="p-[1rem] rounded-[0.75rem] bg-[rgba(235,229,226,0.32)] space-y-[0.75rem]">
                <p className="w-full pb-[0.75rem] border-b-[0.0625rem] border-b-[#EDEDED] text-[#303030] font-trip-sans text-[0.875rem] font-extrabold tracking-[0.01563rem] leading-[1.2] uppercase">
                    No-Refund Policy:
                </p>
                {Array.from({length: 2}).map((_, index) => (
                    <div key={index} className="flex items-start space-x-[0.5rem]">
                        <IconNoRefund className="size-[1.5rem] shrink-0" />
                        <p className="flex-1 text-[#303030] font-trip-sans text-[0.875rem] tracking-[0.00219rem] leading-[1.5]">
                            We require a deposit of 1.000.000VND per person (not including 3% transfer fee). The deposit is only to guarantee the tour. Any request might change due to the availability of each day.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}