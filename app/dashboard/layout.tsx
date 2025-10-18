// local
import { BottomNav } from "@/components/mobile/navs"


interface Props {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="min-h-dvh flex flex-col px-2.5 pt-4 pb-[3.8rem]">
      {children}
      <BottomNav />
    </div>
  )
}
