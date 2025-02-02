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
        <div key={index}>
          <Accordion
            type="single"
            collapsible
            className={`rounded-md border-4 bg-white ${event.border}`}
          >
            <AccordionItem value={`item-${index}`} className="text-center">
              <AccordionTrigger
                className={`px-20 text-3xl underline md:px-52 ${event.text}`}
              >
                {event.name}
              </AccordionTrigger>
              <AccordionContent className="text-2xl">
                {event.info}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default Events;
