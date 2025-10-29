import { Search } from "lucide-react";
import RoundProgress from "../ui/progess";
import { IoMdArrowDropdown } from "react-icons/io";

export default function DesktopNavbar() {
  return (
    <header className="w-full h-[50px] bg-white shadow px-6 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-5 text-sm">
        <div><span className="text-[#767676] text-[12px]">Balance</span> <p className="text-[#5D5D5D] font-bold">$10,500.00</p></div>
        <div><span className="text-[#767676] text-[12px]">Equity</span> <p className="text-[#5D5D5D] font-bold">$10,660.00</p></div>
       
        <div className="flex gap-x-2 items-center">
          <RoundProgress/>
          <div>
            <span className="text-[#767676] text-[12px]">Margin Used / Free</span> 
          <p className="text-[#5D5D5D] font-bold">$560.00 / 660.00</p>
          </div>
          </div>
        <div><span className="text-[#767676] text-[12px]">Margin Level</span> <p className="text-[#767676] text-[12px]">205.30%</p></div>
        <div><span className="text-[#767676] text-[12px]">Total Unrealized P/L</span> <p className="font-bold text-[#1BB507]">-$2,304.02</p></div>
        <div><span className="text-[#767676] text-[12px]">Time Zone</span> <p className="text-[#5D5D5D] font-bold">13:31:08 (6+)</p></div>
         <Search size={20} className="text-[#767676] cursor-pointer" />
      </div>

      <div className="flex items-center space-x-1">
        <span className="font-bold text-sm text-[#5D5D5D]">EMMA BROWN 98765 - <span className="text-[#707070] font-normal ml-[4px]">USD</span></span>
        <IoMdArrowDropdown className="text-[#707070]"/>

      </div>
    </header>
  );
}
