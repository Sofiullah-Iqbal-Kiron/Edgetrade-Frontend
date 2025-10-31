import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@/components/ui/accordion'

export function ImportantNotesAccordion () {
  return (
    <Accordion type='single' collapsible className='w-full'>
      <AccordionItem value='important-notes'>
        <div className='bg-[#FFF3CD] border border-[#FFCD2D] rounded-lg px-3 text-sm text-[#B28A0E]'>
          <AccordionTrigger>
            <div className='font-bold text-sm'>Important Notes</div>
          </AccordionTrigger>
          <AccordionContent>
            <ul className='text-xs list-disc list-inside'>
              <li>Minimum Investment: $100</li>
              <li>Processing time: 1–3 business days</li>
              <li>There is no investment fee</li>
            </ul>
          </AccordionContent>
        </div>
      </AccordionItem>
    </Accordion>
  )
}
