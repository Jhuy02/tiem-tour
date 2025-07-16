import {Separator} from '@/components/ui/separator'
import {cn} from '@/lib/utils'
import {TourDetailContent} from '@/types/tours.interface'

export const Landscape = ({
  data,
}: {
  data: TourDetailContent['acf_fields']['landscape']
}) => {
  return (
    <section>
      {data.map((item, index) => (
        <article
          className={cn('mb-[1.5rem]', index === data.length - 1 && 'mb-0')}
          key={index}
        >
          <h4 className='leading-[1.3rem] font-bold tracking-[0.0025rem] text-[#303030]'>
            Day {index + 1}: {item.title}
          </h4>
          <p
            className='mt-[0.5rem] leading-[1.6] tracking-[0.0025rem] text-[#303030] [&_strong]:leading-[1.3rem] [&_strong]:font-bold'
            dangerouslySetInnerHTML={{
              __html: item.morning,
            }}
          ></p>
          <div className='my-[1rem] rounded-[1.5rem] bg-[#F3F9F9] p-4'>
            <p className='text-[0.875rem] leading-[1.05rem] font-extrabold tracking-[0.01563rem] text-[#303030] uppercase'>
              Destination
            </p>
            <Separator className='my-[0.75rem] h-[0.0625rem] bg-[#ededed]' />
            <article
              className='landscape-destination list-inside list-disc space-y-[0.75rem] leading-[1.2rem] font-medium tracking-[0.0025rem] text-[#303030] marker:block marker:size-[1.25rem]'
              dangerouslySetInnerHTML={{
                __html: item.destination,
              }}
            ></article>
          </div>
          <article
            className='leading-[1.6] tracking-[0.0025rem] text-[#303030] [&_strong]:leading-[1.3rem] [&_strong]:font-bold'
            dangerouslySetInnerHTML={{
              __html: item.evening,
            }}
          ></article>
        </article>
      ))}
    </section>
  )
}
