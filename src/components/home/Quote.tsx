import QuoteBox from "@/components/home/QuoteBox";
import quotes from "@/data/quote-data";

const Quote = () => {
  return (
    <>
      {quotes.map(({ quote, person }, index) => (
        <QuoteBox quote={quote} name={person} key={index} />
      ))}
    </>
  );
};

export default Quote;
