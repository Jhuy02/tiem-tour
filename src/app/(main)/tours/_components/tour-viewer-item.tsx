'use client'
import IconCloseFilterChip from '@/components/icon/IconCloseFilterChip'

interface TourViewerItemProps {
  keyParam: 'location' | 'duration' | 'orderby'
  label: string
  slug: string
  name: string
  onRemove: (
    key: 'location' | 'duration' | 'orderby',
    value: {slug: string},
  ) => void
}
export default function TourViewerItem({
  keyParam,
  label,
  slug,
  name,
  onRemove,
}: TourViewerItemProps) {
  return (
    <div
      data-slug={slug}
      data-key-param={keyParam}
      className='inline-flex h-[2rem] max-w-fit items-center justify-center space-x-[0.75rem] bg-[rgba(170,170,170,0.32)] px-[0.75rem]'
    >
      <div className='font-trip-sans flex items-center space-x-[0.25rem] text-[1rem] leading-[160%] tracking-[0.0025rem]'>
        <p className='text-[rgba(48,48,48,0.40)]'>{label}:</p>
        <span className='text-[#303030]'>{name}</span>
      </div>
      <button
        onClick={() => onRemove(keyParam, {slug})}
        className='h-[1.25rem] w-[1.25rem] cursor-pointer rounded-full'
      >
        <IconCloseFilterChip className='h-auto w-full rounded-full' />
      </button>
    </div>
  )
}
