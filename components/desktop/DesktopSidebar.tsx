"use client"
import { Home, BarChart2, Bookmark, Repeat2, Bell, Settings } from "lucide-react";
import Link from "next/link";

export default function DesktopSidebar() {
  return (
    <aside className="w-[70px] bg-white shadow-md flex flex-col items-center justify-between py-6">
      <div className="flex flex-col items-center space-y-6">
        <Link href="/dashboard">
          <Home className="text-primary hover:text-blue-600 cursor-pointer" size={26} />
        </Link>
        <Link href="/dashboard/charts">
          <BarChart2 className="text-gray-500 hover:text-primary cursor-pointer" size={26} />
        </Link>
        <Link href="/dashboard/positions">
          <BarChart2 className="text-gray-500 hover:text-primary cursor-pointer" size={26} />
        </Link>
        <Link href="/dashboard/watchlist">
          <Bookmark className="text-gray-500 hover:text-primary cursor-pointer" size={26} />
        </Link>
        <Link href="/dashboard/trade">
          <Repeat2 className="text-gray-500 hover:text-primary cursor-pointer" size={26} />
        </Link>
      </div>

      <div className="flex flex-col items-center space-y-6">
        <Bell className="text-gray-500 hover:text-primary cursor-pointer" size={26} />
        <Settings className="text-gray-500 hover:text-primary cursor-pointer" size={26} />
      </div>
    </aside>
  );
}
