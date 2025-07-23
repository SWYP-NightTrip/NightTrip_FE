interface WrapperProps extends React.ComponentProps<'div'> {
  children: React.ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  return <div className="relative">{children}</div>;
}
