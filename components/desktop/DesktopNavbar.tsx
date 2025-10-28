import { Search } from "lucide-react";

export default function DesktopNavbar() {
  return (
    <header className="w-full bg-white shadow px-6 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-8 text-sm">
        <div><span className="text-gray-500">Balance</span> <p className="font-semibold">$10,500.00</p></div>
        <div><span className="text-gray-500">Equity</span> <p className="font-semibold">$10,660.00</p></div>
        <div><span className="text-gray-500">Margin Used / Free</span> <p className="font-semibold">$560.00 / 660.00</p></div>
        <div><span className="text-gray-500">Margin Level</span> <p className="font-semibold">205.30%</p></div>
        <div><span className="text-gray-500">Total Unrealized P/L</span> <p className="font-semibold text-green-600">$2,304.02</p></div>
        <div><span className="text-gray-500">Time Zone</span> <p className="font-semibold">13:31:08 (6+)</p></div>
      </div>

      <div className="flex items-center space-x-4">
        <Search size={20} className="text-gray-600 cursor-pointer" />
        <span className="font-semibold text-sm">EMMA BROWN 98765 - USD</span>
      </div>
    </header>
  );
}
