import { ICustomer } from '@/types/customer.interface'
import Image from 'next/image'
import Link from 'next/link'

interface ButtonGroupProps {
  tripadventure: ICustomer['tripadventure']
  google: ICustomer['google']
}

export const CustomerButtonGroup = ({
  tripadventure,
  google,
}: ButtonGroupProps) => (
  <div className='customer__button'>
    <Link
      href={tripadventure.link.url || ''}
      target='_blank'
    >
      <p>{tripadventure.link.title}</p>
      <Image
        src={tripadventure.icon.url}
        alt={tripadventure.icon.alt}
        width={tripadventure.icon.width}
        height={tripadventure.icon.height}
        className='customer__button-icon'
      />
    </Link>
    <Link
      href={google.link.url || ''}
      target='_blank'
    >
      <p>{google.link.title}</p>
      <Image
        src={google.icon.url}
        alt={google.icon.alt}
        width={google.icon.width}
        height={google.icon.height}
        className='customer__button-icon'
      />
    </Link>
  </div>
)
