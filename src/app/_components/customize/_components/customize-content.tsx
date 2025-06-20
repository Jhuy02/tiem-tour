import Link from 'next/link'
import Arrow from '@/components/icon/arrow'
import {ICustomize} from '@/types/customize.interface'

interface CustomizeContentProps {
  data: ICustomize
}

const CustomizeContent = ({data}: CustomizeContentProps) => {
  return (
    <div className='customize__content'>
      <article dangerouslySetInnerHTML={{__html: data.title}} />
      <Link href={data.button.url}>
        <p>{data.button.title}</p>
        <Arrow
          color='#fff'
          props={{className: 'w-[1.575rem] h-[1.5rem]'}}
        />
      </Link>
    </div>
  )
}

export default CustomizeContent
