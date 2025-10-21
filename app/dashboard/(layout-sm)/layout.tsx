// local
import { TopNav } from '@/components/mobile/navs'
import { SubContainer } from '@/components/mobile/containers'

export default function DashboardSmallLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='bg-white'>
      {/* Top Blue Header */}
      <div className='bg-primary text-white pb-6 rounded-b-[12px] shadow-md w-full h-[105px] relative'></div>

      <div className='absolute top-14 left-0 right-0 px-4'>
        <TopNav />
      </div>
      <p className='font-bold text-center py-2 text-sm mt-[40px]'>
        EMMA BROWN 90993789 - USD
      </p>

      {/* Page Content */}
      <div className='mt-4 px-4'>
        <SubContainer>{children}</SubContainer>
      </div>
    </div>
  )
}
