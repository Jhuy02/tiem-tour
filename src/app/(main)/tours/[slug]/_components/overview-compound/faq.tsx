import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {cn} from '@/lib/utils'
import {TourDetailContent} from '@/types/tours.interface'

export const FAQ = ({data}: {data: TourDetailContent['acf_fields']['faq']}) => {
  return (
    <Accordion
      type='single'
      defaultValue='faq-0'
      collapsible
    >
      {data.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`faq-${index}`}
          className='space-y-[1.25rem] border-none'
        >
          <AccordionTrigger className='w-[15.4375rem] items-center rounded-[1.5rem] bg-[#f6f6f6] p-4 text-[0.875rem] leading-[1.05rem] font-medium tracking-[0.00219rem] text-[#303030]'>
            {faq.title}
          </AccordionTrigger>
          <AccordionContent className='xsm:w-full mx-auto w-[47.1875rem]'>
            <article
              className={cn(
                'xsm:overflow-auto text-[0.875rem] leading-[1.3125rem] tracking-[0.00219rem] text-[#303030]/80 [&_table]:p-[1.5rem]',
                faq.desc.includes('table') &&
                  'xsm:[&_table]:w-[48rem]! hidden_scroll rounded-[1.5rem] border border-[#ededed] p-[1.5rem] [&_tr]:bg-[#F3F9F9] [&_tr]:text-[#303030] [&_tr:first-child]:bg-white [&_tr:first-child]:py-[0.625rem] [&_tr:first-child]:text-[0.875rem] [&_tr:first-child]:leading-[1.05rem] [&_tr:first-child]:font-medium [&_tr:first-child]:tracking-[0.00219rem] [&_tr:first-child]:text-[#19C2C2] [&_tr:first-child>td]:py-[0.625rem] [&_tr:last-child>td:first-child]:rounded-bl-[0.5rem] [&_tr:last-child>td:last-child]:rounded-br-[0.5rem] [&_tr:nth-child(2)>td]:pt-[1.625rem] [&_tr:nth-child(2)>td]:pb-[0.625rem] [&_tr:nth-child(2)>td:first-child]:rounded-tl-[0.5rem] [&_tr:nth-child(2)>td:last-child]:rounded-tr-[0.5rem] [&_tr>td]:py-[0.625rem] [&_tr>td:first-child]:pl-[1rem]',
              )}
              dangerouslySetInnerHTML={{
                __html: faq.desc,
              }}
            ></article>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
