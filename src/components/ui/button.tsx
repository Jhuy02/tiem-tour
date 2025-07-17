import * as React from 'react'
import {Slot} from '@radix-ui/react-slot'
import {cva, type VariantProps} from 'class-variance-authority'

import {cn} from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary:
          'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
        ghost:
          'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  red,
  icon,
  children,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    red?: boolean
    icon?: boolean
    children?: React.ReactNode
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot='button'
      className={cn(
        red
          ? 'py-[1rem] px-[2rem] rounded-[3.125rem] text-white text-[1.125rem] leading-[1.35rem] bg-[#C83E21] hover:opacity-85 space-x-[0.625rem] flex items-center font-dvn-luckiest-guy gap-[0.625rem] transition-all duration-300'
          : buttonVariants({variant, size}),
        className,
      )}
      {...props}
    >
      {children}
      {icon && <ArrowRight className='w-[1.575rem] h-[1.5rem]' />}
    </Comp>
  )
}

const ArrowRight = ({className}: {className?: string}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='27'
      height='24'
      viewBox='0 0 27 24'
      fill='none'
      className={className}
    >
      <path
        d='M17.7446 5.8111C16.6697 4.69032 15.527 3.26812 14.7222 1.94033C14.3662 1.35309 14.1083 0.690489 13.7688 0.118838C13.7262 0.0478138 13.794 -0.0258061 13.6203 0.00883897L10.0179 3.9489C12.3874 6.31346 15.2336 8.18605 18.2933 9.55108L20.8695 10.4874C14.1665 10.5723 7.41131 10.1193 0.900149 8.49613L0.900148 15.5118C2.30154 15.1645 3.71421 14.8363 5.13818 14.5859C10.3191 13.6756 15.6104 13.4513 20.8695 13.5206L18.5286 14.3452C15.8483 15.5326 13.253 17.07 11.0572 19.018C10.7194 19.3177 10.432 19.7706 10.017 19.93L13.7488 24C16.0688 19.0249 20.6602 14.5972 25.8838 12.761C26.2597 12.5575 26.0192 11.6809 26.0713 11.2764C23.3927 10.5047 20.8165 8.72739 18.7865 6.85047C18.3993 6.6218 17.9521 6.23464 17.7446 5.8111Z'
        fill='white'
      />
    </svg>
  )
}

export {Button, buttonVariants}
