import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import {cn} from '@/lib/utils'
import Link from 'next/link'
import {Fragment} from 'react'

export function BreadcrumbDynamic({
  breadcrumbs,
  className,
}: {
  breadcrumbs: {label: string; href: string}[]
  className?: string
}) {
  return (
    <Breadcrumb
      className={cn(
        'relative max-w-[87.5rem] mx-auto xsm:w-[23.4375rem] xsm:mx-0 xsm:py-[0.625rem] xsm:px-[1rem] xsm:h-[2.25rem]',
        className,
      )}
    >
      <BreadcrumbList>
        {breadcrumbs.map((item, idx) => {
          const isLast = idx === breadcrumbs.length - 1
          return (
            <Fragment key={idx}>
              <BreadcrumbItem>
                {isLast ? (
                  <span className='text-[0.875rem] text-[#19C2C2] leading-[1.05rem] tracking-[0.00219rem] font-medium xsm:text-[#303030] xsm:w-[4.125rem] xsm:whitespace-nowrap xsm:text-[0.75rem] xsm:leading-[0.9rem] xsm:tracking-[0.00188rem] xsm:overflow-hidden xsm:text-ellipsis'>
                    {item.label}
                  </span>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link
                      href={item.href}
                      className='text-[0.875rem] text-white leading-[1.05rem] tracking-[0.00219rem] font-medium max-w-[5.6875rem] overflow-hidden text-ellipsis whitespace-nowrap hover:opacity-80 transition-opacity duration-300 hover:text-white xsm:text-[0.75rem] xsm:leading-[0.975rem] xsm:text-[#30303066]'
                    >
                      {item.label}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
