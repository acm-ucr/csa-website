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
          className={`w-[40%] rounded-md border-4 bg-white ${event.border}`}
        >
          <AccordionItem value={`item-${index}`} className="text-center">
            <AccordionTrigger
              className={`px-10 text-3xl underline md:px-40 ${event.text}`}
            >
              {event.name}
            </AccordionTrigger>
            <AccordionContent className="text-2xl">
              {event.info}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default Events;
