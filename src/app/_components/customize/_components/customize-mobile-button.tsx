import Link from 'next/link'
import Arrow from '@/components/icon/arrow'
import {ICustomize} from '@/types/customize.interface'
import {getPathFromUrl} from '@/hooks/useGetPathFromUrl'

interface CustomizeMobileButtonProps {
  data: ICustomize
}

const CustomizeMobileButton = ({data}: CustomizeMobileButtonProps) => {
  return (
    <div className='customize__button-mobile'>
      <Link href={getPathFromUrl(data.button.url)}>
        <p>{data.button.title}</p>
        <Arrow
          color='#fff'
          props={{className: 'w-[1.125rem] h-[1.125rem]'}}
        />
      </Link>
    </div>
  )
}

export default CustomizeMobileButton
