import ExploreContentItem from './explore-content-item'
import ExploreContentList from './explore-content-list'
import {ForwardedRef} from 'react'
import {IExplore} from '@/types/explore.interface'

type Props = {
  desc: string
  descRef: ForwardedRef<HTMLParagraphElement>
  hint: IExplore['hint']
}

const ExploreContent = ({desc, descRef, hint}: Props) => (
  <div className='explore__content'>
    <ExploreContentItem
      desc={desc}
      descRef={descRef}
    />
    <ExploreContentList hint={hint} />
  </div>
)

export default ExploreContent
