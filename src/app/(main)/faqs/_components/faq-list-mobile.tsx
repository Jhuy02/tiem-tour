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
      <article className='px-[1rem] pt-[2rem] space-y-[0.625rem]'>
        <h2 className='text-[#3B3943] text-[1.5625rem] leading-[2.03125rem] font-dvn-luckiest-guy'>
          {faqList.title}
        </h2>
        <p className='text-[#303030CC] leading-[1.6rem] tracking-[0.0025rem] font-trip-sans'>
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
              <AccordionTriggerV2 className='text-[#3B3943] leading-[1.24rem] tracking-[0.0025rem] font-dvn-luckiest-guy uppercase'>
                {item.title}
              </AccordionTriggerV2>
              <AccordionContent className='p-[0.75rem] rounded-[0.5rem] bg-[#d1c5b4]/50 mt-[0.75rem] font-trip-sans leading-[1.6rem] tracking-[0.0025rem]'>
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
        className='w-auto h-[18.76338rem] object-cover'
      />
    </>
  )
}

export default FaqListMobile
