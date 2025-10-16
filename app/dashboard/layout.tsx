// local
import { BottomNav } from "@/components/navs"


interface Props {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="min-h-dvh flex flex-col px-2.5 pt-3 pb-[3.5rem]">
      {children}
      <BottomNav />
    </div>
  )
}
