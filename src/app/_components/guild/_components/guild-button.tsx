import {BlueButton} from '@/components/blue-button'

const GuildButton = ({button}: {button: {url: string; title: string}}) => (
  <div className='flex justify-center mt-[3rem] xsm:hidden'>
    <BlueButton
      href={button.url}
      textColor='#3b3943'
      borderColor='rgba(0,0,0, 0.12)'
      arrowColor='#3b3943'
      className='p-[1.25rem_2.5rem]'
    >
      {button.title}
    </BlueButton>
  </div>
)

export default GuildButton
