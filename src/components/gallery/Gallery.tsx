import { events } from "@/data/eventData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Events = () => {
  return (
    <div className="flex flex-col items-center gap-y-8 py-5">
      {events.map((event, index) => (
        <Accordion
          type="single"
          collapsible
          className={`rounded-md border-4 bg-white ${event.border}`}
          key={index}
        >
          <AccordionItem value={`item-${index}`} className="text-center">
            <AccordionTrigger
              className={`w-[70vw] justify-center text-4xl underline md:w-[44vw] ${event.text}`}
            >
              {event.name}
            </AccordionTrigger>
            <AccordionContent className="w-[52vw] justify-self-center md:w-[40vw]">
              {event.info}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default Events;
