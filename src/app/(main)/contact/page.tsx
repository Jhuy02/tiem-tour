import BannerV2 from '@/app/_components/banner-v2'
import fetchData from '@/fetches/fetchData'

export default async function ContactPage() {
  const {acf} = await fetchData({
    api: `wp/v2/pages/25?_fields=acf&acf_format=standard`,
  })
  return (
    <main className='relative'>
      <BannerV2 data={acf.compound_banner} />
    </main>
  )
}
