import clsx from 'clsx'
import React from 'react'
interface LoadingSpinnerProps {
  loading: boolean
}
export default function LoadingSpinner({loading}: LoadingSpinnerProps) {
  return (
    <div
      className={clsx(
        'fixed inset-0 z-99999! flex items-center justify-center transition-all duration-400 ease-out',
        {
          'visible opacity-100': loading,
          'invisible opacity-0': !loading,
        },
      )}
    >
      <div className='absolute inset-0 z-0 bg-black/25'></div>
      <span className='loader relative z-1'></span>
    </div>
  )
}
