import { TopNav } from '@/components/mobile/navs'
import EquityCard from '@/components/equity-card'
import { SubContainerMd } from '@/components/mobile/containers-md'

export default function DashboardMdLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='bg-white lg:hidden'>
      {/* Top Blue Header */}
      <div className='bg-primary text-white rounded-b-[12px] shadow-[inset_0px_36.1px_36.1px_4.9px_#00000040] w-full h-[270px] relative '>
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
