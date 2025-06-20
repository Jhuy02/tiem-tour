import {ICustomerSay} from '@/types/customer.interface'
import {CustomerItem} from './customer-item'

export const CustomerList = ({custom_say}: {custom_say: ICustomerSay[]}) => {
  return (
    <div className='customer__list swiper xsm:hidden!'>
      <div className='grid grid-cols-2 gap-y-[1.25rem] p-[1rem]'>
        {Array.isArray(custom_say) &&
          custom_say?.map((item, index) => (
            <CustomerItem
              key={index}
              item={item}
              isReverse={index >= 2}
            />
          ))}
      </div>
    </div>
  )
}
