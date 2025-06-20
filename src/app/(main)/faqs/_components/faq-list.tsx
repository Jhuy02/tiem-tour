'use client'

import {useFaqAnimation} from '@/hooks/useFaqAnimation'
import useIsMobile from '@/hooks/useIsMobile'
import {IFaqs} from '@/types/faqs.interface'
import Image from 'next/image'

import FaqListMobile from './faq-list-mobile'
import ImageFallback from '@/components/image/ImageFallback'

const FaqList = ({faqList}: {faqList: IFaqs['faq_content']}) => {
  const {faqItemsRef} = useFaqAnimation()
  const isMobile = useIsMobile()

  return (
    <section
      id='faq'
      className='xsm:bg-[url(/background.webp)]! bg-cover bg-center'
    >
      {isMobile ? (
        <FaqListMobile faqList={faqList} />
      ) : (
        <div className='faq__container xsm:hidden!'>
          <article className='faq__left'>
            <h2 className='faq__title'>{faqList.title}</h2>
            <p className='faq__description'>{faqList.desc}</p>

            <ImageFallback
              src={faqList.image.url}
              alt={faqList.title}
              width={faqList.image.width}
              height={faqList.image.height}
            />
          </article>
          <div className='faq__right'>
            {faqList.list_content.length > 0 &&
              faqList.list_content.map((item, index) => (
                <div
                  className='faq__right-item'
                  key={index}
                  ref={(el) => {
                    if (el) faqItemsRef.current[index] = el
                  }}
                >
                  <article className='faq__right-item-content'>
                    <h3 className='faq__right-item-title'>{item.title}</h3>
                    <p className='faq__right-item-description'>{item.desc}</p>
                    <div className='overlay'></div>
                  </article>
                  <div className='faq__right-item-image'>
                    <Image
                      src={item.image.url}
                      alt={item.title}
                      width={item.image.width}
                      height={item.image.height}
                    />
                  </div>
                  <div className='overlay'></div>
                </div>
              ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default FaqList
