import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

interface TermsAndConditionsProps {
  open: boolean
  onClose: () => void
}

export default function TermsAndConditions({
  open,
  onClose,
}: TermsAndConditionsProps) {
  return (
    <div
      className={clsx(
        'fixed inset-0 z-100 flex items-center justify-center transition-all duration-800 ease-out',
        {
          'invisible opacity-0': !open,
          'visible opacity-100': open,
        },
      )}
    >
      <div
        className='absolute top-0 left-0 z-1 h-full w-full bg-black/25'
        onClick={onClose}
      ></div>
      <div className='relative z-2 h-[42.75rem] max-h-[80vh] w-[56.0625rem] max-w-[80vw] overflow-hidden rounded-[1.5rem] bg-[#FAFAFA]'>
        <div className='absolute bottom-0 left-0 z-2 h-[4.125rem] w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_0%,_#FFF_100%)]'></div>
        <div className='relative z-1 max-h-full overflow-y-auto px-[1.5rem]'>
          <button
            type='button'
            onClick={onClose}
            className='absolute top-[1.5rem] right-[1.5rem] cursor-pointer'
          >
            <Image
              alt=''
              width={20}
              height={20}
              src={'/icons/x-close.svg'}
              className='h-auto w-[1.25rem] shrink-0'
            />
          </button>
          <h3 className='font-dvn-luckiest-guy mb-[0.75rem] pt-[2.25rem] pb-[1.25rem] text-center text-[1.625rem] leading-[150%] font-normal tracking-[0.01563rem] text-[#303030] uppercase'>
            TIEM TOURS HA GIANG TERMS AND CONDITIONS
          </h3>
          <div className='flex space-x-[1rem]'>
            {/* Deposit Policy */}
            <div className='flex-1 rounded-[1.5rem] bg-[#F1F8F8] p-[1rem]'>
              <p className='mb-[0.75rem] text-[0.875rem] font-extrabold tracking-[0.01563rem] text-[#303030] uppercase'>
                Deposit Policy:
              </p>
              <div className='flex flex-col space-y-[0.75rem]'>
                {[...Array(4)].map((_, index) => {
                  return (
                    <div
                      key={index}
                      className='flex items-start space-x-[0.5rem]'
                    >
                      <Image
                        alt=''
                        width={24}
                        height={24}
                        src={'/icons/privacy_policy.svg'}
                        className='h-auto w-[1.5rem] shrink-0'
                      />
                      <p className='text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[#303030]'>
                        We require a deposit of 1.000.000VND per person (not
                        including 3% transfer fee). The deposit is only to
                        guarantee the tour. Any request might change due to the
                        availability of each day.
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
            {/* No-Refund Policy: */}
            <div className='flex-1 rounded-[1.5rem] bg-[#F1F8F8] p-[1rem]'>
              <p className='mb-[0.75rem] text-[0.875rem] font-extrabold tracking-[0.01563rem] text-[#303030] uppercase'>
                Deposit Policy:
              </p>
              <div className='flex flex-col space-y-[0.75rem]'>
                {[...Array(4)].map((_, index) => {
                  return (
                    <div
                      key={index}
                      className='flex items-start space-x-[0.5rem]'
                    >
                      <Image
                        alt=''
                        width={24}
                        height={24}
                        src={'/icons/danger.svg'}
                        className='h-auto w-[1.5rem] shrink-0'
                      />
                      <p className='text-[0.875rem] leading-[150%] tracking-[0.00219rem] text-[#303030]'>
                        In the event of cancellation, no refunds will be issued
                        for the deposit or full payment tour regardless of the
                        reason for cancellation
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Recusandae, deserunt consequatur? Animi quo dolorum ullam
            dignissimos modi at, autem debitis consequatur explicabo sapiente
            culpa nobis, voluptatibus consectetur amet aperiam eveniet? Quo illo
            earum consectetur corrupti dolorem rerum voluptate, hic tempore
            fugit perferendis amet distinctio quisquam exercitationem magni
            accusamus aut nulla repudiandae cum ex beatae deserunt dolores!
            Alias aspernatur ex quibusdam. Rem est ipsa necessitatibus ipsam
            labore eum possimus, blanditiis architecto aperiam recusandae natus,
            magnam, itaque deserunt totam sit inventore. Dignissimos rerum
            explicabo possimus aliquam! Ut tempora nam voluptate expedita
            commodi. Assumenda deleniti error necessitatibus, voluptatibus
            dolorem quisquam. Veritatis libero inventore soluta tenetur delectus
            atque in magnam. Tempore quidem dicta soluta dolor odit nihil
            deleniti fuga tenetur magni illo, aut laudantium! Facere, quod.
            Dolore unde incidunt molestiae delectus sapiente dolores possimus
            praesentium alias, qui perspiciatis assumenda. Nam ratione ipsum
            magni dolore adipisci minima? Cum voluptates asperiores modi,
            architecto quos aspernatur ex? Voluptates tempora pariatur fuga, est
            itaque, rem, error animi voluptatem nemo suscipit consequatur fugiat
            necessitatibus. Et eligendi cumque qui repudiandae magnam incidunt,
            minus enim totam necessitatibus excepturi porro velit ipsum? Nisi
            itaque harum ex animi voluptatibus totam excepturi earum iusto
            aperiam ipsa, vitae dicta eum culpa corrupti. Incidunt dolorum fuga
            eos temporibus facere dicta quam cum, eveniet labore, ex ratione.
            Necessitatibus magnam reprehenderit perspiciatis minima, maxime ea
            architecto suscipit deleniti voluptatem neque aspernatur. Nulla
            doloribus consequatur voluptas quibusdam iusto. Earum, numquam est.
            Voluptas autem est quod inventore id assumenda architecto. Dicta
            harum nam animi labore dolorem eos, maiores officiis similique,
            voluptate aliquam voluptatem necessitatibus ullam voluptatum nobis.
            Aliquam, beatae ratione? Neque, iste repellat odio recusandae eaque
            fugit adipisci molestias voluptatem! Delectus, eos ipsum qui ipsa
            tenetur nemo, amet aut pariatur id incidunt molestiae sit dolores
            impedit quibusdam. A rerum praesentium facilis! Atque exercitationem
            voluptas repellat culpa maiores cum inventore ipsa?
          </div>
        </div>
      </div>
    </div>
  )
}
