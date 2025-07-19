import SvgClose from "@/app/(main)/tours/[slug]/_components/common/SvgClose";
import DepositAndNorefund from "@/app/(main)/tours/[slug]/_components/policy/DepositAndNorefund";
import IconDrop from "@/app/(main)/tours/[slug]/_components/policy/IConDrop";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/app/(main)/tours/[slug]/_components/rent-motorcycles/DialogCustom";
import { InPolicy } from "@/types/tours.interface";

export default function Policy({policy}: {policy: InPolicy}) {
    return (
        <div className="xsm:hidden rounded-[1.5rem] border-[1px] border-solid border-[#EDEDED] bg-white p-[1.875rem_1.75rem]">
            <div className="flex justify-between items-center mb-[1.5rem] border-b-[0.0625rem] border-solid border-b-[#EDEDED] pb-[1rem]">
                <p className="text-[1.125rem] font-trip-sans leading-[1.3] font-[900] tracking-[0.00281rem] text-[#303030]">
                    Policy
                </p>
                <IconDrop className="size-[1rem]" />
            </div>
           <DepositAndNorefund depositPolicy={policy?.deposit_policy} noRefundPolicy={policy?.no_refund_policy} />
            <div
                className="overflow-hidden h-[4.44rem] [&_h3]:text-edit-pc16b [&_h3]:mb-[0.75rem] [&_strong]:font-extrabold [&_li]:text-edit-pc14 [&_p]:text-edit-pc14 [&_ul]:list-disc [&_ul]:pl-[1.5rem] [&_ul]:mb-[0.75rem] [&_blockquote_ul]:mb-0 [&_blockquote]:p-[1rem] [&_blockquote]:rounded-[0.5rem] [&_blockquote]:bg-[rgba(235,229,226,0.32)] [&_blockquote]:mb-[0.75rem]"
                dangerouslySetInnerHTML={{__html: policy?.policy_content || ''}}
            >    
            </div>
            <div className="mt-[1.5rem]">
                <Dialog>
                    <DialogTrigger>
                        <p className="text-[#006CE4] font-trip-sans text-[1rem] leading-[1.2] font-extrabold tracking-[0.0025rem] cursor-pointer">
                            Policy more
                        </p>
                    </DialogTrigger>
                    <DialogContent className="w-[56.0625rem] min-w-[56.0625rem] h-[42.75rem] bg-[#FAFAFA] p-[1.5rem] pb-0 rounded-[1.5rem] gap-0 border-none">
                        <div className="overflow-hidden overflow-y-auto hidden_scroll pb-[1.5rem]">
                            <DialogHeader className="p-[0.75rem_0rem_1.25rem_0rem]">
                                <DialogTitle className="w-full text-center text-[#303030] text-[1.625rem] font-dvn-luckiest-guy font-black leading-[1.3] tracking-[0.01563rem] uppercase">
                                    TIEM TOURS HA GIANG TERMS AND CONDITIONS
                                </DialogTitle>
                            </DialogHeader>
                            <div className="mt-[0.75rem]">
                                <DepositAndNorefund depositPolicy={policy?.deposit_policy} noRefundPolicy={policy?.no_refund_policy} />
                                <div
                                    className="[&_h3]:text-edit-pc16b [&_h3]:mb-[0.75rem] [&_strong]:font-extrabold [&_li]:text-edit-pc14 [&_p]:text-edit-pc14 [&_ul]:list-disc [&_ul]:pl-[1.5rem] [&_ul]:mb-[0.75rem] [&_blockquote_ul]:mb-0 [&_blockquote]:p-[1rem] [&_blockquote]:rounded-[0.5rem] [&_blockquote]:bg-[rgba(235,229,226,0.32)] [&_blockquote]:mb-[0.75rem]"
                                    dangerouslySetInnerHTML={{__html: policy?.policy_content || ''}}
                                >
                                </div>
                            </div>
                        </div>
                        <DialogClose className="cursor-pointer absolute size-[1.25rem] top-[1.5rem] right-[1.5rem]">
                            <SvgClose className="size-[1.25rem]" />
                        </DialogClose>
                        <div className="rounded-[0_0_1.5rem_1.5rem] absolute bottom-0 left-0 right-0 w-full h-[4.125rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_0%,#FFF_100%)]"></div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}