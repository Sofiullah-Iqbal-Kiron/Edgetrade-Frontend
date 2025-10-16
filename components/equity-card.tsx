export default function EquityCard() {
  const equity = 10_000

  return (
    <div className="flex flex-col justify-center items-center py-6">
      <span className="text-lg">Equity</span>
      <span className="text-3xl font-bold">
        {equity.toLocaleString("en-US", { style: "currency", currency: "USD" })}
      </span>
    </div>
  )
}
