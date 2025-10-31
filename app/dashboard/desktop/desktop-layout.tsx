import DesktopNavbar from '@/components/desktop/DesktopNavbar'
import DesktopSidebar from '@/components/desktop/DesktopSidebar'
import { SubContainerDesktop } from '@/components/desktop/SubContainerDesktop'

export default function DashboardDesktopLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='hidden lg:flex h-screen bg-gray-100'>
      <DesktopSidebar />
      <div className='flex flex-col flex-1'>
        <DesktopNavbar />
        <main className='p-6 flex-1 overflow-auto'>{children}</main>
      </div>
    </div>
  )
}
