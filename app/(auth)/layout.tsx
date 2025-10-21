interface Props {
  children: React.ReactNode
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className="bg-[rgba(248,249,250,1)]">
      {children}
    </div>
  )
}
