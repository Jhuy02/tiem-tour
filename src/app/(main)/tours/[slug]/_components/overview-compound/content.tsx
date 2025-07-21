import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Separator } from '@/components/ui/separator'

import { FAQ } from '@/app/(main)/tours/[slug]/_components/overview-compound/faq'
import { Landscape } from '@/app/(main)/tours/[slug]/_components/overview-compound/landscape'
import { Overview } from '@/app/(main)/tours/[slug]/_components/overview-compound/overview'
import { TourDetailContent } from '@/types/tours.interface'

import { Tripadvisor } from '@/app/(main)/tours/[slug]/_components/overview-compound/tripadvisor'
import { TripadvisorTab } from '@/app/(main)/tours/[slug]/_components/overview-compound/tripadvisor-tab'

export const Content = ({data}: {data: TourDetailContent}) => {
  return (
    <Accordion
      type='multiple'
      defaultValue={['overview', 'landscape', 'faq']}
      className='xsm:w-full w-[52.1875rem]'
    >
      <AccordionItem
        value='overview'
        id='overview'
        className='xsm:p-[1rem] rounded-[1.5rem] border border-[#EDEDED] bg-white p-[1.5rem]'
      >
        <AccordionTrigger className='cursor-pointer p-0 text-[1.125rem] leading-[1.4625rem] font-extrabold tracking-[0.00281rem] text-[#2E2E2E]'>
          Overview
        </AccordionTrigger>
        <Separator className='my-[1rem] h-[0.0625rem] bg-[#ededed]' />
        <AccordionContent className='p-0'>
          <Overview data={data?.acf_fields?.overview} />
        </AccordionContent>
      </AccordionItem>
      <div className='xsm:p-[1rem] xsm:rounded-[1rem] xsm:block mt-[1rem] hidden h-fit rounded-[1.5rem] border border-[#EDEDED] bg-white p-[1.25rem]'>
        <Tripadvisor
          data={data?.acf_fields?.tripadvisor}
          link={data?.acf_fields?.overview?.gallery?.link?.url}
        />
        <TripadvisorTab
          data={data.acf_fields.tripadvisor}
          map={data.taxonomies.location[0].name}
        />
      </div>
      <AccordionItem
        value='landscape'
        id='landscape'
        className='xsm:p-[1rem] mt-[1.5rem] rounded-[1.5rem] border border-[#EDEDED] bg-white p-[1.5rem]'
      >
        <AccordionTrigger className='cursor-pointer p-0 text-[1.125rem] leading-[1.4625rem] font-extrabold tracking-[0.00281rem] text-[#2E2E2E]'>
          Landscape
        </AccordionTrigger>
        <Separator className='my-[1rem] h-[0.0625rem] bg-[#ededed]' />
        <AccordionContent className='p-0'>
          <Landscape data={data.acf_fields.landscape} />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value='faq'
        id='faq'
        className='xsm:p-[1rem] mt-[1.5rem] rounded-[1.5rem] border border-[#EDEDED] bg-white p-[1.5rem]'
      >
        <AccordionTrigger className='cursor-pointer p-0 text-[1.125rem] leading-[1.4625rem] font-extrabold tracking-[0.00281rem] text-[#2E2E2E]'>
          FAQ
        </AccordionTrigger>
        <Separator className='my-[1rem] h-[0.0625rem] bg-[#ededed]' />
        <AccordionContent className='p-0'>
          <FAQ data={data.acf_fields.faq} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
