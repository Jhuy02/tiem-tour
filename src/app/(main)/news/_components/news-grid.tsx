import {Skeleton} from '@/components/ui/skeleton'
import {type NewsList} from '@/types/news.interface'
import NewsCard from './news-card'

interface NewsGridProps {
  randomColors: string[]
  isLoading: boolean
  data:
    | {
        data?: NewsList[]
        totalPages?: number
      }
    | undefined
}

const NewsGrid = ({randomColors, isLoading, data}: NewsGridProps) => {
  if (isLoading) {
    return (
      <div className='grid grid-cols-4 xsm:grid-cols-1 gap-[1.25rem] mt-[1.75rem]'>
        {Array(8)
          .fill(null)
          .map((_, index) => (
            <Skeleton
              className='w-full h-[27.3125rem] rounded-[0.5rem]'
              key={index}
            />
          ))}
      </div>
    )
  }

  if (!data?.data) {
    return (
      <div className='grid grid-cols-4 xsm:grid-cols-1 gap-[1.25rem] mt-[1.75rem]'>
        <div>No Post Found !</div>
      </div>
    )
  }

  return (
    <div className='grid grid-cols-4 xsm:grid-cols-1 gap-[1.25rem] mt-[1.75rem]'>
      {data?.data?.map((item: NewsList, index: number) => (
        <NewsCard
          key={item.link}
          item={item}
          backgroundColor={randomColors[index]}
        />
      ))}
    </div>
  )
}

export default NewsGrid
