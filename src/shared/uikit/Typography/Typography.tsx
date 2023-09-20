export interface TypographyProps {
  children: React.ReactNode
  className?: string
  tag?: keyof JSX.IntrinsicElements
}

export const Typography = ({
  children,
  className = '',
  tag: Wrapper = 'div',
  ...props
}: TypographyProps) => (
  <Wrapper className={className} {...props}>
    {children}
  </Wrapper>
)
