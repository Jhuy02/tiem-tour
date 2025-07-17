import Footer from '@/layout/footer/footer'
import {Toaster} from '@/components/ui/sonner'
import fetchData from '@/fetches/fetchData'
import Header from '@/layout/header'
import NextTopLoader from 'nextjs-toploader'
import CTA from '@/app/_components/cta/cta'
import {Lenis} from '@/utils/lenis'

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [dataOptions] = await Promise.all([fetchData({api: `api/v1/options`})])

  return (
    <>
      <Header dataOptions={dataOptions} />
      <Lenis root>{children}</Lenis>
      <Footer data={dataOptions?.footer} />
      <CTA data={dataOptions?.cta_buttons} />
      <Toaster richColors />
      <NextTopLoader
        color='linear-gradient(90deg, #89f7fe 0%, #66a6ff 100%)'
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={true}
        easing='ease'
        speed={200}
        shadow='0 0 10px #2299DD,0 0 5px #2299DD'
        template='<div class="bar" role="bar"><div class="peg"></div></div> 
    <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        zIndex={1600}
        showAtBottom={false}
      />
    </>
  )
}
