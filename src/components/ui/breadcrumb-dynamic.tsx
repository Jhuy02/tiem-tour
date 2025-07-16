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
    <Breadcrumb className={cn('relative max-w-[87.5rem] mx-auto', className)}>
      <BreadcrumbList>
        {breadcrumbs.map((item, idx) => {
          const isLast = idx === breadcrumbs.length - 1
          return (
            <Fragment key={idx}>
              <BreadcrumbItem>
                {isLast ? (
                  <span className='text-[0.875rem] text-[#19C2C2] leading-[1.05rem] tracking-[0.00219rem] font-medium'>
                    {item.label}
                  </span>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link
                      href={item.href}
                      className='text-[0.875rem] text-white leading-[1.05rem] tracking-[0.00219rem] font-medium max-w-[5.6875rem] overflow-hidden text-ellipsis whitespace-nowrap'
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
