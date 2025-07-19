import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { BookingFormValues } from "@/schemas/booking.schema"
import { useFormContext } from "react-hook-form"

export default function ContactInformation() {
    const {control} = useFormContext<BookingFormValues>()
    return (
        <div className="rounded-[1.5rem] sm:border-[1px] sm:border-solid sm:border-[#EDEDED] bg-white p-[1.875rem_1.75rem] xsm:p-[0rem_1rem_0rem_1rem]">
            <p className="mb-[1.5rem] xsm:mb-[0.5rem] sm:border-b-[0.0625rem] sm:border-solid sm:border-b-[#EDEDED] pb-[1rem] text-[1.125rem] leading-[1.3] font-[900] tracking-[0.00281rem] text-[#303030]">
                Contact information
            </p>
            <div className="flex xsm:flex-col xsm:space-y-[0.75rem] sm:space-x-[0.75rem] w-full">
                <FormField
                    control={control}
                    name="yourName"
                    render={({field}) => (
                        <FormItem className="gap-0 space-y-[0.63rem] w-full flex flex-col">
                            <FormLabel className="text-[#2E2E2E] gap-[0.25rem] font-trip-sans text-[0.875rem] font-medium tracking-[0.00219rem] leading-[1.2]">
                                Your name <span className="text-[#EA3434] text-[1rem] tracking-[-0.03rem]">*</span>
                            </FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="Nguyen Van A"
                                    className="focus-visible:border-[#25ACAB] lg:hover:border-[#25ACAB] transition-all duration-300 focus-visible:ring-0 p-[1rem] h-[3.0625rem] rounded-[0.75rem] border-[1px] border-solid border-[#EDEDED] bg-[#FFF] text-[#2E2E2E] font-trip-sans text-[0.875rem] font-medium tracking-[0.00219rem] leading-[1.2]"
                                />
                            </FormControl>
                            <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="yourPhone"
                    render={({field}) => (
                        <FormItem className="gap-0 space-y-[0.63rem] w-full flex flex-col">
                            <FormLabel className="text-[#2E2E2E] gap-[0.25rem] font-trip-sans text-[0.875rem] font-medium tracking-[0.00219rem] leading-[1.2]">
                                Phone number <span className="text-[#EA3434] text-[1rem] tracking-[-0.03rem]">*</span>
                            </FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="02445*********"
                                    className="focus-visible:border-[#25ACAB] lg:hover:border-[#25ACAB] transition-all duration-300 focus-visible:ring-0 p-[1rem] h-[3.0625rem] rounded-[0.75rem] border-[1px] border-solid border-[#EDEDED] bg-[#FFF] text-[#2E2E2E] font-trip-sans text-[0.875rem] font-medium tracking-[0.00219rem] leading-[1.2]"
                                />
                            </FormControl>
                            <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                        </FormItem>
                    )}
                />
            </div>
            <FormField
                control={control}
                name="yourEmail"
                render={({field}) => (
                    <FormItem className="gap-0 space-y-[0.63rem] w-full flex flex-col mt-[0.75rem]">
                        <FormLabel className="text-[#2E2E2E] gap-[0.25rem] font-trip-sans text-[0.875rem] font-medium tracking-[0.00219rem] leading-[1.2]">
                            Email address <span className="text-[#EA3434] text-[1rem] tracking-[-0.03rem]">*</span>
                        </FormLabel>
                        <FormControl>
                            <Input
                                {...field}
                                placeholder="tiemtour@gmail.com"
                                className="focus-visible:border-[#25ACAB] lg:hover:border-[#25ACAB] transition-all duration-300 focus-visible:ring-0 p-[1rem] h-[3.0625rem] rounded-[0.75rem] border-[1px] border-solid border-[#EDEDED] bg-[#FFF] text-[#2E2E2E] font-trip-sans text-[0.875rem] font-medium tracking-[0.00219rem] leading-[1.2]"
                            />
                        </FormControl>
                        <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name="yourMessage"
                render={({field}) => (
                    <FormItem className="gap-0 space-y-[0.63rem] w-full flex flex-col mt-[0.75rem]">
                        <FormLabel className="text-[#2E2E2E] gap-0 font-trip-sans text-[0.875rem] font-medium tracking-[0.00219rem] leading-[1.2]">
                            Message
                        </FormLabel>
                        <FormControl>
                            <Textarea
                                {...field}
                                placeholder="Your message"
                                className="resize-none focus-visible:border-[#25ACAB] lg:hover:border-[#25ACAB] transition-all duration-300 focus-visible:ring-0 p-[1rem] h-[6.8125rem] xsm:h-[8.125rem] rounded-[0.75rem] border-[1px] border-solid border-[#EDEDED] bg-[#FFF] text-[#2E2E2E] font-trip-sans text-[0.875rem] font-medium tracking-[0.00219rem] leading-[1.2]"
                            />
                        </FormControl>
                        <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                    </FormItem>
                )}
            />
        </div>
    )
}