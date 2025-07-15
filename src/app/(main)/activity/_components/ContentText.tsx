import {cn} from '@/lib/utils'

const ContentText = ({
  children,
  className,
}: {
  children?: string | TrustedHTML
  className?: string
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{__html: children ? String(children) : ''}}
      className={cn(
        '[&_p]:font-trip-sans [&_p]:text-[1rem] [&_p]:mb-4 [&_p]:last:mb-0 [&_p]:text-[#303030] [&_p]:leading-[1.6] [&_p]:tracking-[0.0025rem]',
        className,
      )}
    ></div>
  )
}
export default ContentText
