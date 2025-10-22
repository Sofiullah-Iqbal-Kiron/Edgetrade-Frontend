export default function EquityCard() {
  const equity = 10_000

  return (
    <div className="flex flex-col justify-center items-center pt-10 pb-6">
      <span className="text-lg text-[#C8C6C6]">Equity</span>
      <span className="text-3xl font-bold">
        {equity.toLocaleString("en-US", { style: "currency", currency: "USD" })}
      </span>
    </div>
  )
}
