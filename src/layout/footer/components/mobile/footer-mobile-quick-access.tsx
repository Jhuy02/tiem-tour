import {IFooter} from '@/types/footer.interface'
import Link from 'next/link'

interface FooterMobileQuickAccessProps {
  data: IFooter
}

const FooterMobileQuickAccess = ({data}: FooterMobileQuickAccessProps) => {
  return (
    <div className='footer__mb-three'>
      <p className='footer__mb-three-title'>Quick Access</p>
      <nav>
        <ul>
          {data.footer_quick_access.map((item) => (
            <li key={item.footer_page_link.url}>
              <Link href={item.footer_page_link.url}>
                {item.footer_page_link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default FooterMobileQuickAccess
