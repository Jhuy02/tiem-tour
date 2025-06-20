import {BlueButton} from '@/components/blue-button'
import {getPathFromUrl} from '@/hooks/useGetPathFromUrl'

interface DiscoverButtonProps {
  button: {
    title: string
    url: string
  }
}

const DiscoverButton = ({button}: DiscoverButtonProps) => {
  return (
    <div className='flex justify-center mt-[3rem] xsm:mt-[1.5rem] xsm:px-[0.75rem]'>
      <BlueButton
        href={getPathFromUrl(button.url)}
        className='p-[1.25rem_2.5rem] xsm:w-full'
      >
        {button.title}
      </BlueButton>
    </div>
  )
}

export default DiscoverButton
