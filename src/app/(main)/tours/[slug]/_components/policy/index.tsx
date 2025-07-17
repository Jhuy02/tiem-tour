import SvgClose from "@/app/(main)/tours/[slug]/_components/common/SvgClose";
import DepositAndNorefund from "@/app/(main)/tours/[slug]/_components/policy/DepositAndNorefund";
import IconDrop from "@/app/(main)/tours/[slug]/_components/policy/IConDrop";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/app/(main)/tours/[slug]/_components/rent-motorcycles/DialogCustom";

export default function Policy() {
    return (
        <div className="rounded-[1.5rem] border-[1px] border-solid border-[#EDEDED] bg-white p-[1.875rem_1.75rem]">
            <div className="flex justify-between items-center mb-[1.5rem] border-b-[0.0625rem] border-solid border-b-[#EDEDED] pb-[1rem]">
                <p className="text-[1.125rem] font-trip-sans leading-[1.3] font-[900] tracking-[0.00281rem] text-[#303030]">
                    Policy
                </p>
                <IconDrop className="size-[1rem]" />
            </div>
           <DepositAndNorefund />
            <div className="[&_h3]:text-edit-pc16b [&_h3]:mb-[0.75rem] [&_strong]:font-extrabold [&_li]:text-edit-pc14 [&_p]:text-edit-pc14 [&_ul]:list-disc [&_ul]:pl-[1.5rem]">
                <h3><strong>Reservation and Cancellation:</strong></h3>
                <ul>
                    <li>The deposit secures the reservation for the specified date</li>
                    <li>During the trip, if you decide to cancel, there will be no refund for any reason.</li>
                </ul>
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
                                <DepositAndNorefund />
                                <div className="[&_h3]:text-edit-pc16b [&_h3]:mb-[0.75rem] [&_strong]:font-extrabold [&_li]:text-edit-pc14 [&_p]:text-edit-pc14 [&_ul]:list-disc [&_ul]:pl-[1.5rem] [&_ul]:mb-[0.75rem] [&_blockquote_ul]:mb-0 [&_blockquote]:p-[1rem] [&_blockquote]:rounded-[0.5rem] [&_blockquote]:bg-[rgba(235,229,226,0.32)] [&_blockquote]:mb-[0.75rem]">
                                    <h3><strong>Reservation and Cancellation:</strong></h3>
                                    <ul>
                                        <li>The deposit secures the reservation for the specified date</li>
                                        <li>During the trip, if you decide to cancel, there will be no refund for any reason.</li>
                                    </ul>
                                    <h3><strong>Change the date of reservation:</strong></h3>
                                    <ul>
                                        <li>In certain cases, we allow you to change the date of reservation to another date at the sole discretion of our company.</li>
                                        <li>Any change requests are subject to approval by us</li>
                                    </ul>
                                    <blockquote>
                                        <h3><strong>CONFIRMATION BY US</strong></h3>
                                        <ul>
                                            <li>An ORDER confirmation email will be sent to customer's provided email address within 24h after the payment is successful. We will send you an email for instuction about the Bus Timing, Start date, Pick up point as close to customer's Start Date.</li>
                                            <li>During peak months, we will have to arrange and contact you instructions later than usual for any inquiries, please contact us via whatsapp for our support</li>
                                        </ul>
                                    </blockquote>
                                    <blockquote>
                                    <h3><strong>FORCE MAJEURE</strong></h3>
                                    <ul>
                                        <li>If as a consequence of “Force Majeure” (as defined below), We are obliged to curtail, alter, extend or cancel the Tour, you shall not be at liberty to maintain a claim for compensation or otherwise for any loss arising as a consequence of said curtailment, alteration, extension or cancellation of the Tour. “Force Majeure” means Acts of God, natural disasters, adverse weather conditions, fire or other destruction of any vessel, craft or vehicle to be used in connection with a holiday, destruction or damage to holiday accommodation, riots, acts of war, civil commotion, exercise of legislative or government action, municipal or military or other authority, strikes, industrial action, requisition of equipment, mechanical breakdown, shortage of fuel, insolvency or default of any carrier or service connected with the Tour, fraud perpetrated against Vietnam.</li>
                                    </ul>
                                    </blockquote>
                                    <blockquote>
                                    <h3><strong>INSURANCE</strong></h3>
                                    <ul>
                                        <li>Since Bus tickets, train tickets and bike rental price are exclusive of insurance, you are required to obtain your own full travel insurance. It is your responsibility to read your insurance policy before you travel and ensure that the insurance scheme provides you with the requisite level of cover</li>
                                    </ul>
                                    </blockquote>
                                    <blockquote>
                                    <h3><strong>RESPONSIBILITY AND DISCLAIMER</strong></h3>
                                    <ul>
                                        <li>We shall always do our utmost to provide the services to the best of our capacity and upon the satisfaction of the customer. We act only in the role of agent for our travelers in making arrangements for transportation or other services which are incidental to the travel that is being purchased. As a broker for those travelers, we create the following disclaimers: we do not assume any liability whatsoever for any injury, damage, death, loss, accident or delay due to any action of any carrier, hotel, restaurant, business or person suppling someone of those services included in the tour. It also reserves the right to decline to accept or to retain any person as a part of their excursion.</li>
                                    </ul>
                                    </blockquote>
                                    <blockquote>
                                    <h3><strong>CLAIMS</strong></h3>
                                    <ul>
                                        <li>All disputes, claims, and litigation regarding the Services shall first be settled by way of discussion and mutual understanding. In case such negotiation and agreement might neglect, the disputes, claim, or litigation shall be finally resolved by the mediation of the Vietnam International Arbitration Centre (VIAC) at the Chamber of Commerce and Industry of the Socialist Republic of Vietnam. All claims must be submitted in writing within 30 days after the end of this Services.</li>
                                    </ul>
                                    </blockquote>
                                    <blockquote>
                                    <h3><strong>Customers who self-drive</strong></h3>
                                    <ul>
                                        <li>Customers who wish to drive themselves must be able to drive safely, if a customer looks like they pose a threat to themselves or others we will have to change their tour into the easy rider option, (all expenses for that change will be on the customer)</li>
                                        <li>Customers will have to safely keep up with the speed of the group, if they are unable to then they will have to change to either a private tour or an easy rider option (all expenses for the the change will be on the customer)</li>
                                        <li>Any and all damage done to the motorbike will have to be paid for by the customer.</li>
                                    </ul>
                                    </blockquote>
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