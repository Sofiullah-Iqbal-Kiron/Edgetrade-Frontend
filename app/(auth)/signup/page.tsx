// next js
import Link from "next/link"


export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col">
      {/* <header className="p-4"> */}
      {/* </header> */}

      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Edgetrade Inc.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
          The ultimate trading platform to make you win
        </p>

        <div className="flex gap-4">
          <Link href="/dashboard" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Get Started
          </Link>
          <button className="border border-border px-6 py-3 rounded-lg font-semibold hover:bg-accent transition-colors">
            Learn More
          </button>
        </div>
      </main>

      <footer className="text-center px-2 py-4 flex flex-col">
        <span className="text-xl">
          Edgetrade Inc.
        </span>
        <span className="text-sm">
          All rights reserved.
        </span>
      </footer>
    </div>
  )
}
