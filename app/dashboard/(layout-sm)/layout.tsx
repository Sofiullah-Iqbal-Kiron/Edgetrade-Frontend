// local
import { TopNav } from "@/components/mobile/navs"
import { SubContainer } from "@/components/mobile/containers"


export default function DashboardSmallLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            <TopNav />
            <p className="font-bold text-center py-3">
                EMMA BROWN 90993789 - USD
            </p>
            <SubContainer>
                {children}
            </SubContainer>
        </div>
    )
}
