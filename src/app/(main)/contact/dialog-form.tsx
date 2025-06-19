'use client'
import {ContactFormContext} from '@/app/(main)/contact/contact-form'
import IconCloseDialogV1 from '@/components/icon/IconCloseDialogV1'
import clsx from 'clsx'
import React, {useContext, useEffect} from 'react'
import styles from './dialog-form.module.css'

export default function DialogForm(props: React.HTMLProps<HTMLDivElement>) {
  const {dialogStatus, setDialogStatus} = useContext(ContactFormContext)
  useEffect(() => {
    if (dialogStatus !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [dialogStatus])
  const handleCloseDialog = () => {
    setDialogStatus(null)
  }
  return (
    <div
      {...props}
      className={clsx(styles.dialogForm, {
        [styles.active]: dialogStatus !== null,
      })}
    >
      <div className={clsx(styles.dialogContent)}>
        <button
          onClick={handleCloseDialog}
          className='absolute top-[1.5rem] right-[1.5rem] size-[1.5625rem] bg-transparent cursor-pointer'
        >
          <IconCloseDialogV1 className='w-full h-auto' />
        </button>
        {dialogStatus === 'success' && (
          <div className='mt-[5.45rem]'>
            <p className='text-center text-[1.625rem] font-trip-sans font-bold leading-[120%] tracking-[0.01563rem] text-[#25ACAB]'>
              Congratulation! <br /> Your Booking Confirm
            </p>
          </div>
        )}
        {dialogStatus === 'error' && (
          <div className='w-full max-w-[19.1119rem] mx-auto mt-[4.14rem] max-sm:px-[1rem]'>
            <p className='text-[#F64722] text-center font-trip-sans text-[1.5rem] font-bold leading-[120%] mb-[0.75rem]'>
              Form error
            </p>
            <p className='text-[#3B3943] font-trip-sans text-[0.875rem] leading-[150%] text-center tracking-[0.00219rem]'>
              Please be aware that there were errors in the form submission. We
              encourage you to check and complete it again.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
