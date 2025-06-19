import Image from 'next/image'
import {IExplore} from '@/types/explore.interface'

type Props = {
  hint: IExplore['hint']
}

const ExploreContentList = ({hint}: Props) => (
  <div className='explore__content-list'>
    {hint.map((item, index) => (
      <div
        className='explore__content-hint'
        key={index}
      >
        <Image
          src={item.icon.url}
          alt={item.icon.alt}
          width={1920}
          height={1080}
        />
        <p>{item.text}</p>
      </div>
    ))}
  </div>
)

export default ExploreContentList
