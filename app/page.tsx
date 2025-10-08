import Image from "next/image"

// local
import { ModeToggle } from "@/components/mode-toggle"
import { BottomTab } from "@/components/bottom-tab"


export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <ModeToggle />
      </main>
      <footer>
        <BottomTab />
      </footer>
    </div>
  )
}
