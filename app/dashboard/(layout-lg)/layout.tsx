// local
import { SubContainerLarge } from "@/components/mobile/containers-large"


export default function DashboardLargeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white lg:hidden">
      {/* Top Blue Header */}
      <div className="bg-primary text-white pb-6 rounded-b-[12px] w-full h-[295px] relative shadow-[inset_0px_36.1px_36.1px_4.9px_#00000040]"></div>

      {/* Page Content */}
      <div className="mt-[10px] px-2">
        <SubContainerLarge>{children}</SubContainerLarge>
      </div>
    </div>
  )
}
