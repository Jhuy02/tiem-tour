import BannerV2 from '@/app/_components/banner-v2'
import fetchData from '@/fetches/fetchData'
import {IFaqs} from '@/types/faqs.interface'
import './styles/styles.css'
import Image from 'next/image'

const FaqsPage = async () => {
  const {acf}: {acf: IFaqs} = await fetchData({
    api: 'wp/v2/pages/27?_fields=acf&acf_format=standard',
  })

  return (
    <>
      <BannerV2 data={acf.compound_banner} />
      <section id='faq'>
        <div className='faq__container'>
          <article className='faq__left'>
            <h2 className='faq__title'>{acf.faq_content.title}</h2>
            <p className='faq__description'>{acf.faq_content.desc}</p>

            <Image
              src={acf.faq_content.image.url}
              alt={acf.faq_content.title}
              width={acf.faq_content.image.width}
              height={acf.faq_content.image.height}
            />
          </article>
          <div className='faq__right'>
            {acf.faq_content.list_content.length > 0 &&
              acf.faq_content.list_content.map((item, index) => (
                <div
                  className='faq__right-item'
                  key={index}
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
      </section>
    </>
  )
}

export default FaqsPage
