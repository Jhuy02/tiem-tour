import clsx from 'clsx'
import React from 'react'

export default function IconLoadingSpinner(
  props: React.HTMLProps<HTMLDivElement>,
) {
  return (
    <div
      {...props}
      className={clsx('lds-ring', props.className)}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
