import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const FAQ = () => {
  const faqs = [
    {
      title: 'Can I drive myself ?',
      desc: 'Yes, you can drive yourself if you have a valid motorbike driving license and are confident in handling mountainous roads. However, please note that the roads in Hà Giang are challenging with many steep passes and curves. For your safety, we highly recommend choosing our experienced local drivers (Easy Rider option), especially if it’s your first time traveling in this region',
    },
    {
      title: 'Where will I sleep on the arrival night ?',
      desc: 'Yes, you can drive yourself if you have a valid motorbike driving license and are confident in handling mountainous roads. However, please note that the roads in Hà Giang are challenging with many steep passes and curves. For your safety, we highly recommend choosing our experienced local drivers (Easy Rider option), especially if it’s your first time traveling in this region',
    },
    {
      title: 'How can I pay ?',
      desc: 'Yes, you can drive yourself if you have a valid motorbike driving license and are confident in handling mountainous roads. However, please note that the roads in Hà Giang are challenging with many steep passes and curves. For your safety, we highly recommend choosing our experienced local drivers (Easy Rider option), especially if it’s your first time traveling in this region',
    },
    {
      title: 'How can I pay ?',
      desc: 'Yes, you can drive yourself if you have a valid motorbike driving license and are confident in handling mountainous roads. However, please note that the roads in Hà Giang are challenging with many steep passes and curves. For your safety, we highly recommend choosing our experienced local drivers (Easy Rider option), especially if it’s your first time traveling in this region',
    },
    {
      title: 'What should I bring during the trip ?',
      desc: 'Yes, you can drive yourself if you have a valid motorbike driving license and are confident in handling mountainous roads. However, please note that the roads in Hà Giang are challenging with many steep passes and curves. For your safety, we highly recommend choosing our experienced local drivers (Easy Rider option), especially if it’s your first time traveling in this region',
    },
    {
      title: 'Do you have Vegan/Vegetarian/allergies food options ?',
      desc: 'Yes, you can drive yourself if you have a valid motorbike driving license and are confident in handling mountainous roads. However, please note that the roads in Hà Giang are challenging with many steep passes and curves. For your safety, we highly recommend choosing our experienced local drivers (Easy Rider option), especially if it’s your first time traveling in this region',
    },
    {
      title: 'Can I change from 3 days to 4 days during the tour ?',
      desc: 'Yes, you can drive yourself if you have a valid motorbike driving license and are confident in handling mountainous roads. However, please note that the roads in Hà Giang are challenging with many steep passes and curves. For your safety, we highly recommend choosing our experienced local drivers (Easy Rider option), especially if it’s your first time traveling in this region',
    },
    {
      title: 'Can I change to EASY RIDER during the tour ?',
      desc: 'Yes, you can drive yourself if you have a valid motorbike driving license and are confident in handling mountainous roads. However, please note that the roads in Hà Giang are challenging with many steep passes and curves. For your safety, we highly recommend choosing our experienced local drivers (Easy Rider option), especially if it’s your first time traveling in this region',
    },
    {
      title: 'I’m 60+, can I still do the Ha Giang loop by motorcycle ?',
      desc: 'Yes, you can drive yourself if you have a valid motorbike driving license and are confident in handling mountainous roads. However, please note that the roads in Hà Giang are challenging with many steep passes and curves. For your safety, we highly recommend choosing our experienced local drivers (Easy Rider option), especially if it’s your first time traveling in this region',
    },
    {
      title: 'Should I tip for the drivers ?',
      desc: 'Yes, you can drive yourself if you have a valid motorbike driving license and are confident in handling mountainous roads. However, please note that the roads in Hà Giang are challenging with many steep passes and curves. For your safety, we highly recommend choosing our experienced local drivers (Easy Rider option), especially if it’s your first time traveling in this region',
    },
  ]
  return (
    <Accordion
      type='single'
      collapsible
    >
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`faq-${index}`}
          className='space-y-[1.25rem] border-none'
        >
          <AccordionTrigger className='p-4 rounded-[1.5rem] bg-[#f6f6f6] text-[#303030] text-[0.875rem] leading-[1.05rem] font-medium tracking-[0.00219rem]'>
            {faq.title}
          </AccordionTrigger>
          <AccordionContent className='w-[47.1875rem] mx-auto xsm:w-full'>
            <p className='text-[#303030]/80 text-[0.875rem] leading-[1.3125rem] tracking-[0.00219rem]'>
              {faq.desc}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
