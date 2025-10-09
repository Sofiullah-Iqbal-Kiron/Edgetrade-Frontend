// local
import { Topbar } from "@/components/topbar"
import { BottomTab } from "@/components/bottom-tab"


interface Props {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="min-h-dvh flex flex-col p-dashboard">
      <Topbar />
      {children}
      <BottomTab />
    </div>
  )
}
