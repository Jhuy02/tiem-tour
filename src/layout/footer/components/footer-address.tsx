import {IFooter} from '@/types/footer.interface'

interface FooterAddressProps {
  data: IFooter['address']
}

const FooterAddress = ({data}: FooterAddressProps) => {
  return (
    <div className='footer__bottom-right--item'>
      <p className='footer__bottom-right--item-number'>02</p>
      <div className='footer__bottom-right--item-wrapper'>
        <div>
          <p className='footer__bottom-right--item-title'>{data.title}</p>
          <p className='footer__bottom-right--item-address'>{data.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default FooterAddress
