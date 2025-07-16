import {Separator} from '@/components/ui/separator'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { Overview } from '@/app/(main)/tours/[slug]/_components/overview-compound/overview'
import { Landscape } from '@/app/(main)/tours/[slug]/_components/overview-compound/landscape'
import { FAQ } from '@/app/(main)/tours/[slug]/_components/overview-compound/faq'

import { Tripadvisor } from '@/app/(main)/tours/[slug]/_components/overview-compound/tripadvisor'
import { TripadvisorTab } from '@/app/(main)/tours/[slug]/_components/overview-compound/tripadvisor-tab'

export const Content = () => {
  return (
    <Accordion
      type='multiple'
      defaultValue={['overview', 'landscape', 'faq']}
      className='w-[52.1875rem] xsm:w-full'
    >
      <AccordionItem
        value='overview'
        id='overview'
        className='p-[1.5rem] xsm:p-[1rem] rounded-[1.5rem] border border-[#EDEDED] bg-white'
      >
        <AccordionTrigger className='text-[#2E2E2E] text-[1.125rem] font-extrabold leading-[1.4625rem] tracking-[0.00281rem] p-0 cursor-pointer'>
          Overview
        </AccordionTrigger>
        <Separator className='my-[1rem] h-[0.0625rem] bg-[#ededed]' />
        <AccordionContent className='p-0'>
          <Overview />
        </AccordionContent>
      </AccordionItem>
      <div className='p-[1.25rem] xsm:p-[1rem] xsm:rounded-[1rem] rounded-[1.5rem] border border-[#EDEDED] bg-white h-fit xsm:block hidden mt-[1rem]'>
        <Tripadvisor />
        <TripadvisorTab />
      </div>
      <AccordionItem
        value='landscape'
        id='landscape'
        className='p-[1.5rem] xsm:p-[1rem] rounded-[1.5rem] border border-[#EDEDED] bg-white mt-[1.5rem]'
      >
        <AccordionTrigger className='text-[#2E2E2E] text-[1.125rem] font-extrabold leading-[1.4625rem] tracking-[0.00281rem] p-0 cursor-pointer'>
          Landscape
        </AccordionTrigger>
        <Separator className='my-[1rem] h-[0.0625rem] bg-[#ededed]' />
        <AccordionContent className='p-0'>
          <Landscape />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value='faq'
        id='faq'
        className='p-[1.5rem] xsm:p-[1rem] rounded-[1.5rem] border border-[#EDEDED] bg-white mt-[1.5rem]'
      >
        <AccordionTrigger className='text-[#2E2E2E] text-[1.125rem] font-extrabold leading-[1.4625rem] tracking-[0.00281rem] p-0 cursor-pointer'>
          FAQ
        </AccordionTrigger>
        <Separator className='my-[1rem] h-[0.0625rem] bg-[#ededed]' />
        <AccordionContent className='p-0'>
          <FAQ />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
