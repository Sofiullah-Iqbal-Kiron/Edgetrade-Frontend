interface Props {
  children: React.ReactNode
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className="min-h-dvh flex flex-col justify-center items-center px-4">
      {children}
    </div>
  )
}
