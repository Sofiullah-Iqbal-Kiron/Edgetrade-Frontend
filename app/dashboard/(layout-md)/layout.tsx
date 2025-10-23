// local
import { TopNav } from '@/components/mobile/navs'
import EquityCard from '@/components/equity-card'
import { SubContainerMd } from '@/components/mobile/containers-md'

export default function DashboardSmallLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='bg-white'>
      {/* Top Blue Header */}
      <div className='bg-primary text-white rounded-b-[12px] shadow-md w-full h-[270px] relative'>
        <EquityCard />
        <div className='px-2'>
          <TopNav />
        </div>
      </div>

      {/* Page Content */}
      <div className='mt-2 px-2'>
        <SubContainerMd>{children}</SubContainerMd>
      </div>
    </div>
  )
}
