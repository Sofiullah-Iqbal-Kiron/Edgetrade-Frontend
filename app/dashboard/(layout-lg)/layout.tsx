// local
import { SubContainerLarge } from "@/components/mobile/containers-large"


export default function DashboardLargeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white">
      {/* Top Blue Header */}
      <div className="bg-primary text-white pb-6 rounded-b-[12px] shadow-md w-full h-[295px] relative"></div>

      {/* Page Content */}
      <div className="mt-[10px] px-2">
        <SubContainerLarge>{children}</SubContainerLarge>
      </div>
    </div>
  )
}
