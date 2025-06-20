import {ICustomize} from '@/types/customize.interface'

interface CustomizeMarqueeProps {
  data: ICustomize
}

const CustomizeMarquee = ({data}: CustomizeMarqueeProps) => {
  return (
    <div className='customize__marquee'>
      <div className='customize__marquee-content animate-marquee'>
        {Array.from({length: 6}).map((_, index) => (
          <p key={index}>{data.marquee}</p>
        ))}
      </div>
    </div>
  )
}

export default CustomizeMarquee
