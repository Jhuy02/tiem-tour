const Rating = ({props}: {props?: React.SVGProps<SVGSVGElement>}) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <circle
        cx='6'
        cy='6'
        r='6'
        transform='matrix(0.99947 0.0325638 -0.0374023 0.9993 3.92969 3.99219)'
        fill='#33E0A0'
      />
      <circle
        cx='9'
        cy='9'
        r='8.25'
        transform='matrix(0.99947 0.0325638 -0.0374023 0.9993 1.04297 0.898438)'
        stroke='#33E0A0'
        strokeWidth='1.5'
      />
    </svg>
  )
}

export {Rating}
