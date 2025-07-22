import {IFaqs} from '@/types/faqs.interface'

import {
  Accordion,
  AccordionContent,
  AccordionItemV2,
  AccordionTriggerV2,
} from '@/components/ui/accordion'
import ImageFallback from '@/components/image/ImageFallback'

const FaqListMobile = ({faqList}: {faqList: IFaqs['faq_content']}) => {
  return (
    <>
      <article className='space-y-[0.625rem] px-[1rem] pt-[2rem]'>
        <h2 className='font-dvn-luckiest-guy text-[1.5625rem] leading-[2.03125rem] text-[#3B3943]'>
          {faqList.title}
        </h2>
        <p className='font-trip-sans leading-[1.6rem] tracking-[0.0025rem] text-[#303030CC]'>
          {faqList.desc}
        </p>
      </article>
      <Accordion
        type='single'
        collapsible
        className='px-[1rem]'
        defaultValue='item-0'
      >
        {faqList.list_content.length > 0 &&
          faqList.list_content.map((item, index) => (
            <AccordionItemV2
              value={`item-${index}`}
              key={index}
            >
              <AccordionTriggerV2 className='font-dvn-luckiest-guy leading-[1.24rem] tracking-[0.0025rem] text-[#3B3943] uppercase'>
                {item.title}
              </AccordionTriggerV2>
              <AccordionContent className='font-trip-sans mt-[0.75rem] rounded-[0.5rem] bg-[#d1c5b4]/50 p-[0.75rem] leading-[1.6rem] tracking-[0.0025rem]'>
                {item.desc}
              </AccordionContent>
            </AccordionItemV2>
          ))}
      </Accordion>
      <ImageFallback
        src={faqList.image.url}
        alt={faqList.title}
        width={faqList.image.width}
        height={faqList.image.height}
        className='h-[18.76338rem] w-auto object-cover'
      />
    </>
  )
}

export default FaqListMobile
