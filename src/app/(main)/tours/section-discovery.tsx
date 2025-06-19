import React from 'react'
import './section-discovery.css'
import SelectCustom from '@/app/(main)/tours/_components/select-custom'

export default function SectionDiscovery() {
  return (
    <section className='relative pt-[2.5rem] h-screen'>
      <div className='max-w-[87.5rem] mx-auto'>
        <h2 className='text-[#3B3943] mb-[3rem] font-dvn-luckiest-guy text-[3rem] font-normal leading-[130%]'>
          Discovery your trip
        </h2>
        <div className='flex flex-col space-y-[0.8125rem]'>
          <div className='self-stretch w-full h-[5.1875rem] p-[0.5rem] items-end flex space-x-[0.25rem] bg-white'>
            <div className='flex-1'>
              <SelectCustom
                iconUrl='/tours/compass.svg'
                label='Location of interest'
                selectedValues={[]}
                options={[]}
              />
            </div>
            <div className='flex-1'>
              <SelectCustom
                iconUrl='/tours/compass.svg'
                label='Location of interest'
                selectedValues={[]}
                options={[]}
              />
            </div>
            <div className='flex-1'>
              <SelectCustom
                iconUrl='/tours/compass.svg'
                label='Location of interest'
                selectedValues={[]}
                options={[]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
