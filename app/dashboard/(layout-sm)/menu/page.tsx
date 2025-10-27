// nextjs
// import Image from 'next/image'
// import Link from 'next/link'

// // shadcn/ui
// import { Button } from '@/components/ui/button'

// // local
// import finans_image from '@/public/finans-trade.png'

// type MenuType = {
//   label: string
//   link: string
//   className?: string
// }

// const menus: Array<MenuType> = [
//   {
//     label: 'Account Information',
//     link: '/dashboard/account-information'
//   },
//   {
//     label: 'Withdrawal',
//     link: '/dashboard/withdrawal'
//   },
//   {
//     label: 'Deposit',
//     link: '/dashboard/deposit'
//   },
//   {
//     label: 'Trade & Transaction',
//     link: '/dashboard/trade'
//   },
//   {
//     label: 'Help Desk',
//     link: '/dashboard/contact'
//   }
// ]

// const termsLinks: Array<MenuType> = [
//   {
//     label: 'TERMS OF USE',
//     link: '#'
//   },
//   {
//     label: 'PRIVACY POLICY',
//     link: '#'
//   }
// ]

// function MenuItem (item: MenuType) {
//   return (
//     <Link href={item.link} className='w-full'>
//       <Button variant='secondary' size='lg' className='w-full h-14 font-bold'>
//         {item.label}
//       </Button>
//     </Link>
//   )
// }

// function TermsLink (item: MenuType) {
//   return (
//     <Link href={item.link}>
//       <Button
//         variant='link'
//         className='underline text-black tracking-wider px-0'
//       >
//         {item.label}
//       </Button>
//     </Link>
//   )
// }

// export default function MenuPage () {
//   return (
//     <>
//       {menus.map((menu, idx) => (
//         <MenuItem key={`menu-page-menu-item-${idx}`} {...menu} />
//       ))}

//       <Image
//         src={finans_image}
//         alt='finans-logo'
//         width={150}
//         height={150}
//         className='py-4'
//       />

//       <div className='w-full flex flex-row justify-between items-center px-3 '>
//         {termsLinks.map((termLink, idx) => (
          
//           <TermsLink
//             key={`menu-page-term-link-${idx}`}
//             {...termLink}
//             className='!text-[40px] !font-semibold'
//           />
//         ))}
//       </div>

//       <p className='uppercase font-semibold text-muted-foreground text-center text-[12px] mt-2'>
//         Trade responsibility: trading cfds is risky and may lead to permanent
//         capital loss. Make sure you understand the risks before trading.
//       </p>

//       <div className='flex space-x-3 text-[12px] text-[#5D5D5D] font-bold mt-1'>
//         <span>2025</span>
//         <span>
//           EDGETRADE <sup>TM</sup>
//         </span>
//       </div>
//     </>
//   )
// }

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import finans_image from '@/public/finans-trade.png'

// ✅ Updated type to accept className
type MenuType = {
  label: string
  link: string
  className?: string
}

const menus: Array<MenuType> = [
  { label: 'Account Information', link: '/dashboard/account-information' },
  { label: 'Withdrawal', link: '/dashboard/withdrawal' },
  { label: 'Deposit', link: '/dashboard/deposit' },
  { label: 'Trade & Transaction', link: '/dashboard/trade' },
  { label: 'Help Desk', link: '/dashboard/contact' }
]

const termsLinks: Array<MenuType> = [
  { label: 'TERMS OF USE', link: '#' },
  { label: 'PRIVACY POLICY', link: '#' }
]

// ✅ Button Menu Items
function MenuItem(item: MenuType) {
  return (
    <Link href={item.link} className="w-full">
      <Button variant="secondary" size="lg" className="w-full h-14 font-bold">
        {item.label}
      </Button>
    </Link>
  )
}

// ✅ Updated TermsLink using `asChild` (this makes styles actually work)
function TermsLink({ label, link, className }: MenuType) {
  return (
    <Button
      asChild
      variant="link"
      className={`underline text-black tracking-wider px-0 ${className || ''}`}
    >
      <Link href={link}>{label}</Link>
    </Button>
  )
}

export default function MenuPage() {
  return (
    <>
      {menus.map((menu, idx) => (
        <MenuItem key={`menu-page-menu-item-${idx}`} {...menu} />
      ))}

      <Image
        src={finans_image}
        alt="finans-logo"
        width={150}
        height={150}
        className="py-4"
      />

      
      <div className="w-full flex flex-row justify-between items-center px-3">
        {termsLinks.map((termLink, idx) => (
          <TermsLink
            key={`menu-page-term-link-${idx}`}
            {...termLink}
            className="text-[14px] font-semibold"
          />
        ))}
      </div>

      <p className="uppercase font-semibold text-center text-[10px] mt-2 text-[#949494]">
        Trade responsibility: trading cfds is risky and may lead to permanent
        capital loss. Make sure you understand the risks before trading.
      </p>

      <div className="flex space-x-3 text-[10px] text-[#5D5D5D] font-bold mt-1">
        <span>2025</span>
        <span>
          EDGETRADE <sup>TM</sup>
        </span>
      </div>
    </>
  )
}

