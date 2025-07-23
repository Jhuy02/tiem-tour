'use client'

import {Button} from '@/components/ui/button'
import {ROUTES} from '@/constants/routes'
import Link from 'next/link'
import {useEffect, useState} from 'react'

interface NotFoundProps {
  title?: string
  description?: string
  showBackButton?: boolean
  showHomeButton?: boolean
}

export default function NotFound({
  title = 'Không tìm thấy tour',
  description = 'Tour bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.',
  showBackButton = true,
  showHomeButton = true,
}: NotFoundProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className='relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50 py-[10rem]'>
      {/* Background decorations */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='animate-blob absolute -top-40 -right-40 h-80 w-80 rounded-full bg-green-200 opacity-70 mix-blend-multiply blur-xl filter'></div>
        <div className='animate-blob animation-delay-2000 absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-200 opacity-70 mix-blend-multiply blur-xl filter'></div>
        <div className='animate-blob animation-delay-4000 absolute top-40 left-40 h-80 w-80 rounded-full bg-yellow-200 opacity-70 mix-blend-multiply blur-xl filter'></div>
      </div>

      <div className='relative z-10 mx-auto max-w-2xl px-6 text-center'>
        {/* 404 Number */}
        <div className='mb-8'>
          <h1 className='font-dvn-luckiest-guy text-9xl leading-none text-gray-800'>
            404
          </h1>
        </div>

        {/* Main content */}
        <div className='space-y-6'>
          <div className='space-y-4'>
            <h2 className='font-dvn-luckiest-guy text-4xl leading-tight text-gray-900'>
              {title}
            </h2>
            <p className='mx-auto max-w-md text-lg leading-relaxed text-gray-600'>
              {description}
            </p>
          </div>

          {/* Action buttons */}
          <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
            {showBackButton && (
              <Button
                variant='ghost'
                size='lg'
                onClick={() => window.history.back()}
                className='w-full cursor-pointer px-8 py-3 text-base font-medium transition-all duration-300 hover:bg-gray-50 sm:w-auto'
              >
                <svg
                  className='mr-2 h-5 w-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M10 19l-7-7m0 0l7-7m-7 7h18'
                  />
                </svg>
                Quay lại
              </Button>
            )}

            {showHomeButton && (
              <Link href='/'>
                <Button
                  red
                  className='cursor-pointer'
                >
                  Về trang chủ
                </Button>
              </Link>
            )}
          </div>

          {/* Additional help text */}
          <div className='mt-8 border-t border-gray-200 pt-6'>
            <p className='text-sm text-gray-500'>
              Cần hỗ trợ?{' '}
              <Link
                href={ROUTES.CONTACT}
                className='font-medium text-sky-600 underline hover:text-sky-700'
              >
                Liên hệ với chúng tôi
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
