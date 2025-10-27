export default function ApproveButton () {
  return (
    <button
      onClick={() => alert('Approved (simulate)')}
      className='w-full py-3 rounded-lg bg-normal-blue text-white font-medium mt-3'
    >
      Approve
    </button>
  )
}
