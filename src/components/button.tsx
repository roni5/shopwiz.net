import React, { MouseEvent, SFC , ReactNode } from 'react'

type Props = {
  onClick(e: MouseEvent<HTMLElement>): void
  children?: ReactNode
}

 const Button: SFC<Props> = ({ onClick: handleClick, children }: Props) => (
  <button onClick={handleClick}>{children}</button>
 )

export default Button;