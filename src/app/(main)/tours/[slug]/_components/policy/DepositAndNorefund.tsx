"use client"
import { InPolicy } from "@/types/tours.interface";
import clsx from "clsx";
import styles from './styles.module.css';

export default function DepositAndNorefund({ noRefundPolicy, depositPolicy }: { noRefundPolicy: InPolicy['no_refund_policy']; depositPolicy: InPolicy['deposit_policy']}) {
    return (
        <div className="grid grid-cols-2 gap-[1rem] mb-[1.5rem]">
            <div className="p-[1rem] rounded-[0.75rem] bg-[#F1F8F8] space-y-[0.75rem]">
                <p className="w-full pb-[0.75rem] border-b-[0.0625rem] border-b-[#EDEDED] text-[#303030] font-trip-sans text-[0.875rem] font-extrabold tracking-[0.01563rem] leading-[1.2] uppercase">
                    {depositPolicy?.title}
                </p>
                <div
                    className={clsx('[&_ul]:space-y-[0.75rem] [&_li]:text-edit-pc14 [&_p]:text-edit-pc14',styles.depositPolicy)}
                    dangerouslySetInnerHTML={{__html: depositPolicy?.content || ''}}
                >
                </div>
            </div>
            <div className="p-[1rem] rounded-[0.75rem] bg-[rgba(235,229,226,0.32)] space-y-[0.75rem]">
                <p className="w-full pb-[0.75rem] border-b-[0.0625rem] border-b-[#EDEDED] text-[#303030] font-trip-sans text-[0.875rem] font-extrabold tracking-[0.01563rem] leading-[1.2] uppercase">
                    {noRefundPolicy?.title}
                </p>
                <div
                    className={clsx('[&_ul]:space-y-[0.75rem] [&_li]:text-edit-pc14 [&_p]:text-edit-pc14',styles.noRefundPolicy)}
                    dangerouslySetInnerHTML={{__html: noRefundPolicy?.content || ''}}
                >
                </div>
            </div>
        </div>
    )
}