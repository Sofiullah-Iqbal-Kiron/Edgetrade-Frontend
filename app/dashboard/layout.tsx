// local
import { BottomNav } from "@/components/mobile/navs"


interface Props {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="min-h-dvh flex flex-col pb-[100px]">
      {children}
      <BottomNav />
    </div>
  )
}
