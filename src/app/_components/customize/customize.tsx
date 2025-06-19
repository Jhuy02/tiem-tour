import {ICustomize} from '@/types/customize.interface'
import CustomizeBackground from './_components/customize-background'
import CustomizeDecorations from './_components/customize-decorations'
import CustomizeContent from './_components/customize-content'
import CustomizeMarquee from './_components/customize-marquee'
import CustomizeMobileButton from './_components/customize-mobile-button'
import './styles/styles.css'

const Customize = ({data}: {data: ICustomize}) => {
  return (
    <>
      <section id='customize'>
        <CustomizeBackground data={data} />
        <CustomizeDecorations data={data} />
        <CustomizeContent data={data} />
        <CustomizeMarquee data={data} />
      </section>

      <CustomizeMobileButton data={data} />
    </>
  )
}

export default Customize
