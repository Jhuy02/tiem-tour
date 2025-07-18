'use client'

import {IContactPageACF} from '@/app/(main)/contact/page'
import contactSchema from '@/schemas/contact.schema'
import React, {createContext, useState, useTransition} from 'react'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import styles from './contact-form.module.css'
import clsx from 'clsx'
import IconArrowRightV2 from '@/components/icon/IconArrowRightV2'
import CF7Request from '@/fetches/cf7Request'
import endpoints from '@/utils/endpoints'
import DialogForm from '@/app/(main)/contact/dialog-form'
import IconLoadingSpinner from '@/components/icon/IconLoadingSpinner'

type DialogStatus = 'success' | 'error' | null

interface IContactFormContext {
  dialogStatus: DialogStatus
  setDialogStatus: (status: DialogStatus) => void
}
export const ContactFormContext = createContext<IContactFormContext>({
  dialogStatus: null,
  setDialogStatus: () => {},
})

export default function ContactForm({data}: IContactPageACF) {
  const [isPending, setTransition] = useTransition()
  const [dialogStatus, setDialogStatus] = useState<'success' | 'error' | null>(
    null,
  )
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      message: '',
    },
  })
  const onSubmit = (values: z.infer<typeof contactSchema>) => {
    setTransition(async () => {
      const dataForm = {
        'your-name': values.name,
        'your-phone': values.phone,
        'your-email': values.email,
        'your-message': values.message,
      }
      const request = new CF7Request(dataForm)
      const response = await request.send(endpoints.contactForm)

      if (response?.invalid_fields?.length === 0) {
        setDialogStatus('success')
      } else {
        setDialogStatus('error')
      }
      form.reset()
    })
  }
  return (
    <ContactFormContext.Provider value={{dialogStatus, setDialogStatus}}>
      <DialogForm />
      <div className='mr-[3.5rem] flex-1 max-sm:mr-0 max-sm:w-full max-sm:px-[1rem] max-sm:py-[2rem]'>
        <h2 className='font-dvn-luckiest-guy mb-[2rem] w-[29.625rem] text-[3rem] leading-[130%] font-normal text-[#3B3943] max-sm:w-full max-sm:text-[1.5625rem]'>
          {data?.contact_title ?? ''}
        </h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='mt-[2rem] w-full'
          >
            <FormField
              control={form.control}
              name='name'
              render={({field}) => (
                <FormItem className={clsx(styles.formGroup)}>
                  <FormControl>
                    <input
                      {...field}
                      placeholder=''
                      className={clsx(styles.formControl)}
                    />
                  </FormControl>
                  <FormLabel className={clsx(styles.formLabel)}>
                    Your name
                    <span>*</span>
                  </FormLabel>
                  <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='phone'
              render={({field}) => (
                <FormItem className={clsx(styles.formGroup)}>
                  <FormControl>
                    <input
                      {...field}
                      placeholder=''
                      className={clsx(styles.formControl)}
                    />
                  </FormControl>
                  <FormLabel className={clsx(styles.formLabel)}>
                    Phone number
                    <span>*</span>
                  </FormLabel>
                  <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({field}) => (
                <FormItem className={clsx(styles.formGroup)}>
                  <FormControl>
                    <input
                      {...field}
                      placeholder=''
                      className={clsx(styles.formControl)}
                    />
                  </FormControl>
                  <FormLabel className={clsx(styles.formLabel)}>
                    Email
                    <span>*</span>
                  </FormLabel>
                  <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='message'
              render={({field}) => (
                <FormItem className={clsx(styles.formGroup)}>
                  <FormControl>
                    <input
                      {...field}
                      placeholder=''
                      className={clsx(styles.formControl)}
                    />
                  </FormControl>
                  <FormLabel className={clsx(styles.formLabel)}>Note</FormLabel>
                  <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
                </FormItem>
              )}
            />
            <button
              type='submit'
              className={clsx(styles.formSubmit, {
                'pointer-events-none cursor-not-allowed border-[#25ACAB]! bg-[#25ACAB]! opacity-50':
                  isPending,
              })}
            >
              <span
                className={clsx(styles.formSubmitText, {
                  'text-[#fff]!': isPending,
                })}
              >
                Send information
              </span>
              {isPending ? (
                <IconLoadingSpinner />
              ) : (
                <IconArrowRightV2
                  className={clsx(
                    'h-auto w-[1.575rem] shrink-0',
                    styles.formSubmitIcon,
                  )}
                />
              )}
            </button>
          </form>
        </Form>
      </div>
    </ContactFormContext.Provider>
  )
}
