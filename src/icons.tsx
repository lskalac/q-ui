import { SVGProps } from "react";

export const RightArrowSVG = (props: SVGProps<SVGSVGElement>) => (
    <svg
      width={26}
      height={26}
      viewBox="0 -6.5 38 38"
      {...props}
    >
      <title>{"right-arrow"}</title>
      <path
        d="m26.812.58 10.513 10.424.088.082c.352.349.557.809.587 1.352l-.002.183c-.025.43-.19.842-.514 1.21l-.123.127L26.812 24.42a2.005 2.005 0 0 1-2.822 0 1.985 1.985 0 0 1 0-2.822l7.284-7.224H2C.897 14.375 0 13.486 0 12.385c0-1.102.897-1.992 2-1.992h29.04l-7.05-6.99a1.985 1.985 0 0 1 0-2.822 2.005 2.005 0 0 1 2.822 0Z"
        fill="#1C1C1F"
        fillRule="nonzero"
      />
    </svg>
  )