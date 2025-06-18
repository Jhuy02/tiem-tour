import {IFooter} from '@/types/footer.interface'
import Link from 'next/link'
import ArrowUpRight from '../arrow-up-right'

interface FooterMobileCopyrightProps {
  data: IFooter
}

const FooterMobileCopyright = ({data}: FooterMobileCopyrightProps) => {
  return (
    <div className='footer__mb-copyright'>
      <Link
        href={data.footer_desc.design_copyright.url}
        target='_blank'
      >
        <p>{data.footer_desc.design_copyright.title}</p>
        <ArrowUpRight />
      </Link>
    </div>
  )
}

export default FooterMobileCopyright
