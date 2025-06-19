'use client'
import IconCheck from '@/app/_components/banner/IconCheck'
import ImageFallback from '@/components/image/ImageFallback'
import {TermItem} from '@/types/taxonomies.interface'

export default function PopupSelectMb({
  dataTaxonomies,
  toggle,
  title,
  type = 'all',
  setSelectedMultiple,
  selectedMultiple,
  setSelectedOnly,
  selectedOnly,
  changeOpen,
}: {
  dataTaxonomies: TermItem[]
  toggle: boolean
  title: string
  type?: 'all' | 'budget'
  setSelectedMultiple?: (value: TermItem[]) => void
  selectedMultiple?: TermItem[]
  setSelectedOnly?: (
    value: {
      name: string
      slug: string
    } | null,
  ) => void
  selectedOnly?: {
    name: string
    slug: string
  } | null
  changeOpen?: (value: boolean) => void
}) {
  return (
    <div className={`popuplocationmb ${toggle ? 'open' : ''}`}>
      <div className='popuplocationmb__title'>{title}</div>
      <div className='popuplocationmb-content'>
        {dataTaxonomies.map((term) => (
          <div
            key={term.slug}
            className='swiper-slide'
            onClick={() => {
              if (setSelectedMultiple) {
                setSelectedMultiple(
                  selectedMultiple?.some((item) => item.slug === term.slug)
                    ? selectedMultiple?.filter(
                        (item) => item.slug !== term.slug,
                      )
                    : [
                        ...(selectedMultiple || []),
                        {name: term.name, slug: term.slug},
                      ],
                )
              }
              if (setSelectedOnly) {
                setSelectedOnly({name: term.name, slug: term.slug})
              }
              if (changeOpen) {
                changeOpen(false)
              }
            }}
          >
            <div
              className={`${
                type === 'all'
                  ? 'popuplocation-item__checkbox'
                  : 'proposedbudget-content__radio'
              } ${
                selectedMultiple?.some((item) => item.slug === term.slug)
                  ? 'active'
                  : ''
              } ${selectedOnly?.slug === term.slug ? 'active' : ''}`}
              data-tax={term.slug}
            >
              <div className='item__checkbox'>
                <IconCheck
                  className={`${type === 'all' ? '' : '[&>path]:stroke-white'}`}
                />
              </div>
            </div>
            {term?.img_location && (
              <ImageFallback
                className='popuplocation-item__imglocation'
                src={term?.img_location}
                alt={term?.name}
                width={100}
                height={100}
              />
            )}
            <div className='popuplocation-item__titlewapper'>
              <p className='popuplocation-item__title'>{term.name}</p>
              {term?.hot_location && (
                <div className='popuplocation-item__tag'>Hot</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
