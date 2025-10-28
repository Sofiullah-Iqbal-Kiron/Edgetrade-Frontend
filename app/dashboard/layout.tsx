import DashboardDesktopLayout from './desktop/desktop-layout'
import { BottomNav } from '@/components/mobile/navs'

interface Props {
  children: React.ReactNode
}

export default function DashboardLayout ({ children }: Props) {
  return (
    <>
      {/* layout for mobile and md device */}
      <div className='lg:hidden min-h-dvh flex flex-col pb-[100px]'>
        {children}
        <BottomNav />
      </div>

      {/* the layout for desktop view */}
      <div className='hidden lg:block'>
        <DashboardDesktopLayout>{children}</DashboardDesktopLayout>
      </div>
    </>
  )
}
