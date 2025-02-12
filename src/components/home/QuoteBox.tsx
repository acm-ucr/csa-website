const QuoteBox = ({ quote, name }: { quote: string; name: string }) => {
  return (
    <div className="flex justify-center">
      <div className="font-lora relative w-10/12 sm:w-3/5 md:w-3/5">
        <div className="absolute right-4 top-4 h-full w-full rounded-xl bg-csa-gray-200 bg-opacity-50" />
        <div className="relative flex flex-col gap-8 rounded-xl bg-white p-4">
          <div className="pt-10">
            <p className="text-8xl font-bold leading-4 text-csa-yellow-100">
              “
            </p>
            <p className="text-right text-sm font-semibold text-csa-gray-100 md:text-base">
              {quote}
            </p>
          </div>
          <p className="pb-4 font-semibold text-csa-gray-100">- {name}</p>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
