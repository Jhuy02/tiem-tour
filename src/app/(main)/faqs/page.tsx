import BannerV2 from '@/app/_components/banner-v2'
import {IFaqs} from '@/types/faqs.interface'
import fetchData from '@/fetches/fetchData'
import FaqList from './_components/faq-list'
import './styles/styles.css'

const FaqsPage = async () => {
  const {acf}: {acf: IFaqs} = await fetchData({
    api: 'wp/v2/pages/27?_fields=acf&acf_format=standard',
  })

  return (
    <>
      <BannerV2 data={acf.compound_banner} />
      <FaqList faqList={acf.faq_content} />
    </>
  )
}

export default FaqsPage
