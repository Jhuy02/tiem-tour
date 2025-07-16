'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useEffect, useState } from 'react'

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden py-[10rem]">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-dvn-luckiest-guy text-gray-800 leading-none">
            404
          </h1>
        </div>

        {/* Main content */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-4xl font-dvn-luckiest-guy text-gray-900 leading-tight">
              {title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto">
              {description}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {showBackButton && (
              <Button
                variant="ghost"
                size="lg"
                onClick={() => window.history.back()}
                className="w-full sm:w-auto px-8 py-3 text-base font-medium hover:bg-gray-50 transition-all duration-300 cursor-pointer"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Quay lại
              </Button>
            )}
            
            {showHomeButton && (
              <Link href="/">
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
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Cần hỗ trợ?{' '}
              <Link href="/contact" className="text-sky-600 hover:text-sky-700 font-medium underline">
                Liên hệ với chúng tôi
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 